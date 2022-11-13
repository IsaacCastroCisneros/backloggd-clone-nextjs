'use client'

import React,{createContext} from "react"
import NavBar from "./components/NavBar/NavBar"
import '../styles/globals.css'
import { useMediaQuery } from 'react-responsive'

interface AppContext
{
  mob:boolean
}

export const AppContext = createContext<AppContext>({
  mob:false
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const mob = useMediaQuery({maxWidth:'767px'})

  const appContextValues:AppContext=
  {
     mob
  }

  return (
    <AppContext.Provider value={appContextValues}>
      <html>
        <head>
          <title>Backloggd Clone</title>
        </head>
        <body>
          <header className="block">
            <NavBar />
          </header>
          {children}
        </body>
      </html>
    </AppContext.Provider>
  );
}
