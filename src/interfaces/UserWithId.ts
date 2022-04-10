import UserTemplate from './UserTemplate';

export default interface UserWithId extends UserTemplate {
  id: number,
}