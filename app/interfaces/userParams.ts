export default interface userParams
{
  [index: string]:string|undefined;
  userName?:string;
  email?:string;
  password?:string;
  passwordRetry?:string;
  status?:string;
}