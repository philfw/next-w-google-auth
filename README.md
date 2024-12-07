# Simple Starter Code Environment

For Next app with Google authentication, using auth.js.

Tutorial here: https://authjs.dev/getting-started/authentication/oauth

Requires creating an OAuth client in a Google Cloud app. URI set to localhost:3000 and callback set to http://localhost:3000/api/auth/callback/google

Create a .env.local file in the root of your project with:

AUTH_SECRET= # Add by `npx auth`. Read more: https://cli.authjs.dev

AUTH_GOOGLE_ID=

AUTH_GOOGLE_SECRET=