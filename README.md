#### ⚠️ &nbsp; [next.js v12+](https://nextjs.org) now supports [middleware](https://nextjs.org/docs/middleware) which can be used for [hostname-rewrites](https://github.com/vercel/examples/tree/main/edge-functions/hostname-rewrites) and more!
---

# Multiple domain hosting on [next.js](https://nextjs.org) using [rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites)

Using rewrites to support multiple hosts with caching, fallbacks and static rendering.

## Example

[Host 1](https://next-multi-host.vercel.app) - [Host 2](https://next-multi-host-acorcutt.vercel.app)

## How it works

It uses [next rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites) to rewrite a url like https://next-multi-host.vercel.app/posts/a to `/pages/hosts/[host]/posts/[id]` style routes so you can use the `:host` parameter in your page routes along with static generation and [ISR](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration).

## Instructions

Create a page in the format `/pages/hosts/[host]/posts/[id].js` and add the following to your `next.config.js` rewrites section:

```
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
```

Use the `:host` parameter in your page just like other dynamic parameters.

```
export async function getStaticProps(context) {
  // Available on server render
  console.log('getStaticProps', context);

  const host = context.params.host;
  const id = context.params.id;

  return {
    props: {
      host,
      id,
    },
    revalidate: 10,
  };
}
```

Create required static paths with additional host param...

```
export async function getStaticPaths() {
  return {
    paths: [
      // Include host in static params!
      { params: { id: 'a', host: 'localhost' } },
      { params: { id: 'a', host: 'next-multi-host.vercel.app' } },
      { params: { id: 'a', host: 'next-multi-host-acorcutt.vercel.app' } },
    ],
    fallback: 'blocking',
  };
}
```

## Testing

### Localhost

Add domains to your hosts file or use localhost subdomains to test your site...
http://localhost:3000/posts/a - http://domain.localhost:3000/posts/a

### Cypress

Cypress has an unsupported option to use localhost subdomains for testing, just add the following to your `cypress.json` file...

```
{
  "hosts": {
    "*.localhost": "127.0.0.1"
  }
}

```

## Limitations

### Wildcard paths do not work too well with other overlapping routes

```
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
```

Use a rewrite for every combination of paths where possible or fallback to standard SSR.

### It gets complicated when mixing with other rewrites and headers

You will need to add a rewrite for every combination of paths and headers you use, and not all headers work.

## Tips

For complicated rewrites and multiple headers try combining them into one parameter and decoding the value on the server:

```
{
  has: [
    {
      type: 'host',
      value: '(?<host>.*)',
    },
    {
      type: 'query',
      key: 'x',
      value: '(?<x>.*)',
    },
    {
      type: 'cookie',
      key: 'c',
      value: '(?<c>.*)',
    },
  ],
  source: '/posts/:id',
  destination: '/h/:host--:x--:c/posts/:id',
},
```

`/pages/h/[headers]/posts/[id].js`

```
export async function getStaticProps(context) {
  const headers = context.params.headers.split('--');

    return {
    props: {
      headers,
      id:context.params.id
    },
  };
}
```
