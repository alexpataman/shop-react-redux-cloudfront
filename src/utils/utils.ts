const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);

const encodeCredentials = (value: string) => btoa(value);

export const setAuthToken = (value?: string) => {
  if (value) {
    localStorage.setItem('authorization_token', encodeCredentials(value));
  }
};

export const removeAuthToken = () => {
  localStorage.removeItem('authorization_token');
};

export const getAuthToken = () => localStorage.getItem('authorization_token');
