import React, { useRef } from 'react';
import { setAuthToken, removeAuthToken } from '../../../../../utils/utils';
import { DEFAULT_AUTH_CREDENTIALS } from '../../../../../constants/auth';

export default function AuthPanel() {
  const credentials = useRef<HTMLInputElement>(null);

  const setCorrectAuthTokenHandler = () => {
    setAuthToken(credentials.current?.value);
    if (credentials.current?.value === DEFAULT_AUTH_CREDENTIALS) {
      alert('Correct Auth token was successfully set. Try to send the request.');
    } else {
      alert('Invalid Auth token was successfully set. Try to send the request.');
    }
  };
  const removeAuthTokenHandler = () => {
    if (credentials.current) {
      credentials.current.value = '';
    }
    removeAuthToken();
    alert('Auth Token was removed from the local storage');
  };

  return (
    <div>
      <input
        type="text"
        ref={credentials}
        defaultValue={DEFAULT_AUTH_CREDENTIALS}
        style={{ width: '250px' }}
      />
      <button type="button" onClick={setCorrectAuthTokenHandler}>
        Set Auth Token from the field
      </button>
      &nbsp;
      <button type="button" onClick={removeAuthTokenHandler}>
        Remove Auth Token
      </button>
    </div>
  );
}
