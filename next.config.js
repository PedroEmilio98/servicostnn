module.exports = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/Manutenção',
        permanent: true,
      },
    ]
  },
}
