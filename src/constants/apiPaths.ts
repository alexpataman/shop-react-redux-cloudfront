const getProductApiPath = () =>
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://ob84jfvkmb.execute-api.eu-west-1.amazonaws.com';

const getImportApiPath = () =>
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4001'
    : 'https://8wgz36e2h8.execute-api.eu-west-1.amazonaws.com';

const API_PATHS = {
  product: getProductApiPath(),
  order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  import: getImportApiPath(),
  bff: getProductApiPath(),
  cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
};

export default API_PATHS;
