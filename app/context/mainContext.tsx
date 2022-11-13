import {createContext} from 'react';

export interface mainContext
{
  mob:boolean
}

export const MainContext = createContext<mainContext>({
  mob:false
})
