import connection from './connection';
import LoginTemplate from '../interfaces/LoginTemplate';

const login = async ({ username, password }: LoginTemplate) : Promise <true | false> => {
  // make a SELECT using both username and password. If the return is an empty array then give error. Otherwise, return nothing or some shit idk
  const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';
  const [user] = await connection.execute(query, [username, password]);
  if (Object.keys(user).length !== 1) return false;
  return true;
};

export default { login };