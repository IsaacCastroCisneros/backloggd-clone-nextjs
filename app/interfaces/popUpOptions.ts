import errors from "./errors";

export default interface popUpOptions
{
  isShow:boolean;
  msg?:string;
  title?:string;
  list?:errors[]
}