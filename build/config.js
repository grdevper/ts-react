const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  port: 8080,
  env,
  title: 'study',
  contextPath: process.cwd(),
  path: '/public',
  publicPath: '/',
  static: '/static',
  staticPath: '/static',
  templateName: 'index.html',
}