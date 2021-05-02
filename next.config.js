module.exports = {
  future: {
    webpack5: false,
  },
  async rewrites() {
    return {
      afterFiles: [
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
        {
          has: [
            {
              type: 'host',
              value: '(?<host>.*)',
            },
          ],
          source: '/:dummy/:path*',
          destination: '/:host/:dummy/:path*',
        },
        {
          has: [
            {
              type: 'host',
              value: '(?<host>.*)',
            },
          ],
          source: '/:path*',
          destination: '/:host/:path*',
        },
      ],
    };
  },
};
