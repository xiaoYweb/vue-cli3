const baseUrl = process.env.NODE_ENV === 'production'
? '/'
: '/proxyApi/'

export default baseUrl
