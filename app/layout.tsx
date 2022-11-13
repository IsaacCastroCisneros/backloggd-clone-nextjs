'use client'

import React,{createContext,useContext} from "react"
import NavBar from "./components/NavBar/NavBar"
import '../styles/globals.css'
import { useMediaQuery } from 'react-responsive'
import { MainContext } from "./context/mainContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const mob = useMediaQuery({ query: '(max-width: 756px)' })

  const values=
  {
    mob
  }

  return (
    <MainContext.Provider value={values}>
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
    </MainContext.Provider>
  );
}
