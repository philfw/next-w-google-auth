import { SessionProvider } from "next-auth/react"

export const metadata = {
  title: 'Simple next app with Google auth',
  description: '',
}

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body>{children}</body>
      </SessionProvider>
    </html>
  )
}
