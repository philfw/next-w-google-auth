"use client"

import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import styles from "./SignIn.module.css";
 
export default function SignIn() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <img src={session.user.image} className={styles.user}></img>
        <p>Signed in as {session.user.name}</p>
        <button onClick={() => signOut("google")}>Sign Out</button>
      </div>
    )
  }

  return <button onClick={() => signIn("google")}>Sign In</button>
}