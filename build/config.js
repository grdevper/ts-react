const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  port: 8080,
  env,
  contextPath: process.cwd(),
  path: '/public',
  publicPath: '/public',
  static: '/static',
  staticPath: '/static',
  templateName: 'index.html',
}