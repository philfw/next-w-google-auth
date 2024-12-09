"use client"

import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
 
export default function SignIn() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
      <div>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut("google")}>Sign Out</button>
      </div>
    )
  }

  return <button onClick={() => signIn("google")}>Sign In</button>
}