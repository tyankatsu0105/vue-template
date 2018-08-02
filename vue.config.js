module.exports = {
  baseUrl:
    process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        // vueファイル内でimportしなくても良くなる
        // 複数の場合は配列にする
        data: '@import "@/styles/variables/importer.scss";'
      }
    }
  }
};
