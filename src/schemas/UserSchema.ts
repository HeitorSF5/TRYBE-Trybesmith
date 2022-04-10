import ErrorResponse from '../interfaces/ErrorResponse';

export const checkUsername = (username: string) : void | ErrorResponse => {
  if (username === undefined) return { code: 400, error: 'Username is required' };
  // I opted for ' === undefined' instead of ' !username ' because of JavaScript's ~~quirky~~ way it processes ' ! '. Meaning: If username came as 0 or false then it would give the response that it is Required, as opposed to being the wrong type.
  if (typeof username !== 'string') return { code: 422, error: 'Username must be a string' };
  if (username.length < 3) {
    return { code: 422, error: 'Username must be longer than 2 characters' };
  }
};

export const checkPassword = (password: string) : void | ErrorResponse => {
  if (password === undefined) return { code: 400, error: 'Password is required' };
  if (typeof password !== 'string') return { code: 422, error: 'Password must be a string' };
  if (password.length < 8) return { code: 422, error: 'Password must be longer than 7 characters' };
};

export const checkClasse = (classe: string) : void | ErrorResponse => {
  if (classe === undefined) return { code: 400, error: 'Classe is required' };
  if (typeof classe !== 'string') return { code: 422, error: 'Classe must be a string' };
  if (classe.length < 3) return { code: 422, error: 'Classe must be longer than 2 characters' };
};

export const checkLevel = (level: number) : void | ErrorResponse => {
  if (level === undefined) return { code: 400, error: 'Level is required' };
  if (typeof level !== 'number') return { code: 422, error: 'Level must be a number' };
  if (level < 1) return { code: 422, error: 'Level must be greater than 0' };
};