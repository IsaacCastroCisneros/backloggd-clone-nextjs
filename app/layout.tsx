'use client'

import React from "react"
import NavBar from "./components/NavBar/NavBar"
import { useMediaQuery } from 'react-responsive'
import { MainContext } from "./context/mainContext"
import '../styles/globals.css'

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
