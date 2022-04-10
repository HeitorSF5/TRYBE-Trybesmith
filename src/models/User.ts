import { ResultSetHeader } from 'mysql2';
import UserTemplate from '../interfaces/UserTemplate';
import connection from './connection';
// import UserAsPayload from '../interfaces/UserAsPayload';

const createUser = async (newUser : UserTemplate) : Promise<number> => {
  const { username, classe, level, password } = newUser;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`,
    [username, classe, level, password],
  );
  return id;
};

export default { createUser };