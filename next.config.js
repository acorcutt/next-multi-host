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
        destination: '/:host',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/posts/:id',
        destination: '/:host/posts/:id',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/slugs/:slug*',
        destination: '/:host/slugs/:slug*',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/:a',
        destination: '/:host/catchall/:a',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/:a/:b',
        destination: '/:host/catchall/:a/:b',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/:a/:b/:c',
        destination: '/:host/catchall/:a/:b/:c',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/:a/:b/:c/:d',
        destination: '/:host/catchall/:a/:b/:c/:d',
      },
    ];
  },
};
