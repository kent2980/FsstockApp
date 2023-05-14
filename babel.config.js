module.exports = function(api) {
  api.cache(true);
  return {
    plugins: [
      'transform-inline-environment-variables',
      [
        'dotenv-import', {
          'moduleName': '@env',
          'path': '.env',
          'blacklist': null,
          'whitelist': null,
          'safe': false,
          'allowUndefined': false,
        }
      ],
      'babel-plugin-macros', // 追加
    ],
    presets: ['babel-preset-expo'],
  };
};
