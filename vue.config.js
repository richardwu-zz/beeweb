const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/beeweb/' : '/'
};

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  }
}
