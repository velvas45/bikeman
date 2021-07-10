import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_DATABASE,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
})

const googleProvider = firebase.auth.GoogleAuthProvider.PROVIDER_ID
const facebookProvider = firebase.auth.FacebookAuthProvider.PROVIDER_ID

export const auth = app.auth()
export {googleProvider, facebookProvider}
export default app