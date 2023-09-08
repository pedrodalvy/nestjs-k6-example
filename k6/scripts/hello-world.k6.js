import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '20s', target: 100 },
    { duration: '20s', target: 100 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<5'], // 95 percent of response times must be below 5ms
  },
};

export default () => {
  const response = http.get(__ENV.APP_URL);

  check(response, {
    'Verify response text': (r) => r.body.includes('Hello World!'),
  });

  sleep(1);
};
