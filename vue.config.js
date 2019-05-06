const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const IS_PROD = ['production','prod'].includes(process.env.NODE_ENV)
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;


// vue.config.js
module.exports = {
    // options...
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: '',
    indexPath:'index.html',
    filenameHashing: true,
    lintOnSave: true,
    runtimeCompiler: true,
    productionSourceMap: false,
    chainWebpack: config => {
      config.resolve.symlinks(true) // 修复 HMR(热更新)失效
      // 添加别名
      config.resolve.alias
      .set('@', resolve('src'))
      // .set('assets', resolve('src/assets'))
      // .set('components', resolve('src/components'))
      // .set('static', resolve('src/static'));

      // 打包分析
      if (process.env.IS_ANALYZ) {
        config.plugin('webpack-report')
          .use(BundleAnalyzerPlugin, [{
            analyzerMode: 'static',
          }]);
      }

    },
    configureWebpack: config => {
      // config.modules()
      if (IS_PROD) {
        const plugins = [];
        // 去除多余无效的 css
        plugins.push(
            new PurgecssPlugin({
                paths: glob.sync([
                path.join(__dirname, './src/index.html'),
                path.join(__dirname, './**/*.vue'),
                path.join(__dirname, './src/**/*.js')
                ])
            })
        );

        // 使用 UglifyJsPlugin 去掉console.log
        // plugins.push(
        //   new UglifyJsPlugin({
        //       uglifyOptions: {
        //           compress: {
        //               warnings: false,
        //               drop_console: true,
        //               drop_debugger: false,
        //               pure_funcs: ['console.log']//移除console
        //           }
        //       },
        //       sourceMap: false,
        //       parallel: true
        //   })
        // );

        // 开启Gzip压缩
        plugins.push(
          new CompressionWebpackPlugin({
              filename: '[path].gz[query]',
              algorithm: 'gzip',
              test: productionGzipExtensions,
              threshold: 10240,
              minRatio: 0.8
          })
        );
        config.plugins = [
          ...config.plugins,
          ...plugins
        ];
      }
    },
    css: {
        modules:false,
        sourceMap: true,
        extract: IS_PROD,
        loaderOptions: {
          css: {
            // options here will be passed to css-loader
          },
          postcss: {
            // options here will be passed to postcss-loader
          }
        }
    },
    devServer:{
        open: true,
        host: '0.0.0.0',
        port: 8080,
        hotOnly:false,
        https: false,
        proxy:{
            '^/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
              },
              '^/foo': {
                target: '<other_url>'
            }
        }

    },
    parallel: require('os').cpus().length > 1,
    pluginOptions:{},
  }