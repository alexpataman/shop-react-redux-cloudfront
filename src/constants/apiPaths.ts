const getProductApiPath = () =>
  'development'
    ? 'http://localhost:4000'
    : 'https://ob84jfvkmb.execute-api.eu-west-1.amazonaws.com';

const getImportApiPath = () =>
  'development'
    ? 'http://localhost:4001'
    : 'https://ob84jfvkmb.execute-api.eu-west-1.amazonaws.com';

const API_PATHS = {
  product: getProductApiPath(),
  order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  import: getImportApiPath(),
  bff: getProductApiPath(),
  cart: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
};

export default API_PATHS;
