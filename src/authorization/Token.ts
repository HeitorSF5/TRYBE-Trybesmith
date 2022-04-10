// import dotenv from 'dotenv';
// dotenv.config();
import jwt from 'jsonwebtoken';
import UserAsPayload from '../interfaces/UserAsPayload';
// import TokenError from '../interfaces/TokenError';
import LoginPayload from '../interfaces/LoginPayload';
import ErrorResponse from '../interfaces/ErrorResponse';

const secret = 'avedominusnox';

const createToken = (data: UserAsPayload | LoginPayload) => {
  // const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  // const token = jwt.sign({ data }, secret, jwtConfig);
  // Says "there's no overload that matches this call" when jwtConfig is present as a parameter of jwt.sign
  const token: string = jwt.sign({ data }, secret);
  return token;
};

const checkToken = (token: string) : true | ErrorResponse => {
  // if (!token) return { code: 401, error: 'Token not found' };
  try {
    jwt.verify(token, secret);
    // return undefined;
  } catch (err) {
    return { code: 401, error: 'Invalid token' };
  }
  return true;
};

const decodeToken = (token: string) => jwt.decode(token);

export { createToken, checkToken, decodeToken }; 

// Not gonna lie - I copy pasted this from my own API Blogs project