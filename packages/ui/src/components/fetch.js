import { Component } from 'react'
import PropTypes from 'prop-types'

export const STATE = Object.freeze({
  FAILED: 'FAILED',
  IN_PROGRESS: 'IN_PROGRESS',
  SUCCEEDED: 'SUCCESS',
})

export default class Fetch extends Component {
  static propTypes = {
    interval: PropTypes.number,
    render: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    responseType: PropTypes.oneOf(['json', 'text']),
  }

  static defaultProps = {
    interval: undefined,
    responseType: 'json',
  }

  constructor(props) {
    super(props)
    this.state = {
      state: STATE.IN_PROGRESS,
    }
  }

  componentDidMount() {
    this.executeFetch()
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  executeFetch = () =>
    fetch(this.props.url)
      .then(response => response[this.props.responseType]())
      .then(result => this.updateState(STATE.SUCCEEDED, result))
      .catch(err => this.updateState(STATE.FAILED, err))
      .then(this.queueNext)

  queueNext = () => {
    const { interval } = this.props
    if (interval) {
      setTimeout(this.executeFetch, interval)
    }
  }

  updateState = (state, payload) => {
    if (this.unmounted) {
      return
    }
    switch (state) {
      case STATE.SUCCEEDED:
        this.setState({ err: null, result: payload, state })
        break
      case STATE.FAILED:
        this.setState({ err: payload, result: null, state })
        break
      default: {
        throw new Error(`Invalid fetch state ${state}`)
      }
    }
  }

  render() {
    return this.props.render(Object.assign({}, this.state))
  }
}
