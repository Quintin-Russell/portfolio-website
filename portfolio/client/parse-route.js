export default function parseRoute(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }
  const [path, queryString] = hashRoute.split('?');
  const params = new URLSearchParams(queryString);
  console.log('hash: {path}:', path)
  console.log('hash: {params}:', params)
  return { path, params };
}
