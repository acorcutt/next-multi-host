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
            {
              type: 'header',
              key: 'accept-encoding',
              value: '(?<encoding>.*)',
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
          destination: '/hosts/:host/headers/:encoding---:cache',
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
      ],
      //Hack to support catch-all routes until supported by proxy back to another app https://github.com/acorcutt/next-multi-host/tree/norewrites without host rewrites
      fallback: [
        {
          has: [
            {
              type: 'host',
              value: '(?<host>.*)',
            },
          ],
          source: '/:slug*',
          destination: 'https://next-multi-host-r80x19czo-acorcutt.vercel.app/hosts/:host/slugs/:slug*',
        },
      ],
    };
  },
};
