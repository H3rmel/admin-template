export default interface User {
  uid: string;
  name: string;
  email: string;
  token: Promise<string>;
  provider: string;
  imageUrl: string;
}
