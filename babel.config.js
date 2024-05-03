module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-react"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./components",
            "@constants": "./constants",
            "@navigation": "./navigation",
            "@screens": "./screens",
            "@shared": "./shared",
            "@utils": "./shared/utils",
          },
        },
      ],
    ],
  };
};
