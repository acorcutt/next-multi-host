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
          {
            type: 'header',
            key: 'connection',
            value: '(?<connection>.*)',
          },
          {
            type: 'header',
            key: 'cache-control',
            value: '(?<cache>.*)',
          },
          // {
          //   type: 'header',
          //   key: 'user-agent',
          //   value: '(?<agent>.*)',
          // },
        ],
        source: '/headers',
        destination: '/hosts/:host/headers/:connection---:cache',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/posts/:id',
        destination: '/hosts/:host/posts/:id',
      },
      {
        has: [
          {
            type: 'host',
            value: '(?<host>.*)',
          },
        ],
        source: '/slugs/:slug*',
        destination: '/hosts/:host/slugs/:slug*',
      },
    ];
  },
};
