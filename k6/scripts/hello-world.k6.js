import { check } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '20s', target: 100 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 0 },
  ],
};

export default () => {
  const response = http.get(__ENV.APP_URL);

  check(response, {
    'Verify response text': (r) => r.body.includes('Hello World!'),
  });
};
