// 使用 babel-plugin-transform-remove-console 插件 去掉console.log
const plugins = [];
if(['production', 'prod'].includes(process.env.NODE_ENV)) {
  plugins.push("transform-remove-console")
}

module.exports = {
  presets: [["@vue/app",{"useBuiltIns": "entry"}]],
  plugins: plugins
}
