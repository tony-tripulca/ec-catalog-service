module.exports = {
  apps: [
    {
      name: "CatalogService.1.1",
      namespace: "ec-catalog-service",
      script: "./src/index.js",
      watch: ["./src", "./src/*.js"],
      output: "./logs/out.log",
      error: "./logs/error.log",
    },
  ],
};
