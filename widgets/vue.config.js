module.exports = {
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  chainWebpack: (config) => {
    config.module
      .rule("css")
      .test(/\.css$/)
      .oneOf("vue")
      .resourceQuery(/\?vue/)
      .use("px2rem")
      .loader("px2rem-loader")
      .options({
        remUnit: 75,
      });
  },
  configureWebpack: {
    //警告 webpack 的性能提示
    performance: {
      hints: "warning", // 枚举
      //入口起点的最大体积,整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积,整数类型（以字节为单位）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示, 提供资源文件名的断言函数
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js") || assetFilename.endsWith(".css");
      },
    },
  },
};
