import ErrorResponse from '../interfaces/ErrorResponse';
import ProductTemplate from '../interfaces/ProductTemplate';

const nameChecker = (name : string): void | ErrorResponse => {
  if (name === undefined) return { code: 400, error: 'Name is required' };
  if (typeof name !== 'string') return { code: 422, error: 'Name must be a string' };
  if (name.length < 3) return { code: 422, error: 'Name must be longer than 2 characters' };
};

const amountChecker = (amount : string): void | ErrorResponse => {
  if (amount === undefined) return { code: 400, error: 'Amount is required' };  
  if (typeof amount !== 'string') return { code: 422, error: 'Amount must be a string' };
  if (amount.length < 3) return { code: 422, error: 'Amount must be longer than 2 characters' };
};

const checkProductInfo = ({ name, amount }: ProductTemplate) : void | ErrorResponse => {  
  const nameFail = nameChecker(name);
  const amountFail = amountChecker(amount);
  if (nameFail) return nameFail;  
  if (amountFail) return amountFail;
};

export default { checkProductInfo };