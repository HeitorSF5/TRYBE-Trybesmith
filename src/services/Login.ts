import { createToken } from '../authorization/Token';
import ErrorResponse from '../interfaces/ErrorResponse';
import LoginTemplate from '../interfaces/LoginTemplate';
// import TokenTemplate from '../interfaces/TokenTemplate';
import Login from '../models/Login';

const loginService = async (
  { username, password }: LoginTemplate,
) : Promise<string | ErrorResponse> => {
  // ESLint is weird ^^^^
  const tryLogin = await Login.login({ username, password });
  if (tryLogin === false) return { code: 401, error: 'Username or password invalid' };
  const token = createToken({ username, password });
  return token;
};

export default { loginService };