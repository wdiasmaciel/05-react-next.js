import "@/app/globals.css"

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Cadastro e Login</title>
      </head>
      <body>
          {children}
      </body>
    </html>
  )
}
