let merge = require('webpack-merge');
let prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  mockData: false, // 是否开启模拟数据
  proxyTable: {
    '/mytoken-api': {
      target: 'https://www.mytoken.io',//api代理服务器地址http://ip:port
      changeOrigin: true,
      projectName: '',// 项目名称，配置该选项，请求的url会加上项目名称，比如/api/common/get-data => /api/projectName/common/get-data
      pathRewrite: {
        '^/mytoken-api': ''
      }
    }
  }
});
