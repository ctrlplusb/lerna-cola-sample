module.exports = {
  packages: {
    "@lerna-cola-sample/api-basket": {
      developPlugin: "core-plugin-develop-server",
      deployPlugin: {
        name: "@lerna-cola/plugin-deploy-now"
      }
    },
    "@lerna-cola-sample/api-books": {
      developPlugin: "core-plugin-develop-server",
      deployPlugin: {
        name: "@lerna-cola/plugin-deploy-now"
      }
    },
    "@lerna-cola-sample/ui": {
      buildPlugin: {
        name: "core-plugin-script",
        options: {
          scriptName: "build"
        }
      },
      developPlugin: {
        name: "core-plugin-script",
        options: {
          scriptName: "start"
        }
      },
      deployPlugin: {
        name: "@lerna-cola/plugin-deploy-now"
      }
    }
  }
};
