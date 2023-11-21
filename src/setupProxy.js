const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://staging-api-shop.rankerdao.com',
      changeOrigin: true,
    }),
  );
};
