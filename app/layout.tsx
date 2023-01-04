import Link from "next/link"
import React from "react"
import NavBar from "../components/NavBar/NavBar"
import '../styles/globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
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
  );
}
