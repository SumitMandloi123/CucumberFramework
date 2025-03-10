module.exports = {
    default: {
      require: ["src/step-definitions/*.ts"],
      requireModule: ["ts-node/register"],
      format: ["progress"],
      paths: ["src/features/*.feature"],
      publishQuiet: true
    }
  };
  