import { MockMethod, RespThisType } from 'vite-plugin-mock';

import { ResponseCode } from './mock.type';
import { generateResponse, generateToken, getServerError } from './mock.util';

const mock: MockMethod[] = [
  {
    url: '/api/login',
    method: 'post',
    timeout: 2000,
    response: ({ body }: { body: { email: string; password: string } }) => {
      try {
        if (body) {
          const { email, password } = body;
          if (email === 'academy@gmail.com' && password === 'academy123') {
            const expiresIn = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 365; // 1 year
            const accessToken = generateToken({ email, password, expiresIn });

            return generateResponse({ expiresIn, accessToken });
          }
          return generateResponse({}, 'Invalid Credentials!', ResponseCode.UNAUTHORIZED);
        }
        return generateResponse({}, 'Server Error', ResponseCode.SERVER_ERROR);
      } catch {
        return generateResponse({}, 'Server Error', ResponseCode.SERVER_ERROR);
      }
    },
  },
];
export default mock;
