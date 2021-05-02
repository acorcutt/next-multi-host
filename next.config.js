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
          source: '/:part1',
          destination: '/hosts/:host/catchall/:part1/__/__/__',
        },
        {
          has: [
            {
              type: 'host',
              value: '(?<host>.*)',
            },
          ],
          source: '/:part1/:part2',
          destination: '/hosts/:host/catchall/:part1/:part2/__/__',
        },
        {
          has: [
            {
              type: 'host',
              value: '(?<host>.*)',
            },
          ],
          source: '/:part1/:part2/:part3',
          destination: '/hosts/:host/catchall/:part1/:part2/:part3/__',
        },
        {
          has: [
            {
              type: 'host',
              value: '(?<host>.*)',
            },
          ],
          source: '/:part1/:part2/:part3/:part4',
          destination: '/hosts/:host/catchall/:part1/:part2/:part3/:part4',
        },
      ],
    };
  },
};
