import ErrorResponse from '../interfaces/ErrorResponse';

const checkProductArray = (prodArray : Array<number>) : void | ErrorResponse => {
  if (prodArray === undefined) return { code: 400, error: 'Products is required' };
  if (prodArray.length < 1) return { code: 422, error: 'Products can\'t be empty' };
  if (!Array.isArray(prodArray)) {
    return { 
      code: 422, error: 'Products must be an array of numbers',
    };
  }
  // if (prodArray.includes(NaN)) return { code: 422, error: 'Products must be an array of numbers' };
};

export default { checkProductArray };