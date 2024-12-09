import { signIn, signOut, auth } from "../auth.js"
 
export default async function LoginStatus() {

  const session = await auth();

  if (session?.user) {
    return (
      <form
      action={async () => {
        "use server"
        await signOut();
      }}
       >
        <p>Signed in as {session.user.email}</p>
        <button type="submit">Sign Out</button>
      </form>
      
    )
  }

  return (
    <form
      action={async () => {
        "use server"
        await signIn("google");
      }}
    >
      <button type="submit">Sign In With Google</button>
    </form>
  )

}