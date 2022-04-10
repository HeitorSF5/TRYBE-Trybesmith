export default interface LoginTemplate {
  username: string,
  password: string,
}
// I realize this is redundant with LoginPayload as of now, but I'm considering that there might be a change in the payload in the future - be it adding something new or changing what's required, which would cause it to break the entirety of the Login route