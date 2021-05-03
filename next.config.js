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
          destination: '/posts/:id/hosts/:host',
        },
      ],
      fallback: [
        {
          has: [
            {
              type: 'host',
              value: '(?<host>.*)',
            },
          ],
          source: '/:slug*',
          destination: 'https://next-multi-host.vercel.app/hosts/:host/slugs/:slug*',
        },
      ],
    };
  },
};
