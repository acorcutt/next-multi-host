module.exports = {
  future: {
    webpack5: false,
  },
  async rewrites() {
    return [
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/',
        destination: '/hosts/:host',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/posts/:id',
        destination: '/posts/:id/hosts/:host',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/:slug*',
        destination: '/slugs/:slug*/:host',
      },
    ];
  },
};
