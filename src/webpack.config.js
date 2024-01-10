const path = require('path');
const createExpoWebPackConfingAsync = require('expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebPackConfingAsync(env, argv);

  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [path.join(_dirname, 'node_modules/react-router-native')]
  });
  return config;
};
