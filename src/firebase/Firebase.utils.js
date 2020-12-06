import firebase from 'firebase';
import 'firebase/auth';

const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
  };
  
  const prodConfig = {};
  const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

// firebase.initializeApp(config);

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.firebaseAuth = firebase.auth();
        console.log('firebase auth: ', this.firebaseAuth);
    }
    // register
    
    async register(displayName, email, password) {

        try {
            await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    
            this.firebaseAuth.currentUser.updateProfile({
                displayName
            })
        } catch (error) {
            console.log('Firebase Register Error: ', error)
        }
    }
    // signin with google

    useGoogleProvider() {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        googleProvider.setCustomParameters({ prompt: "select_account" })
        this.firebaseAuth.signInWithPopup(googleProvider);
    }

    // login
    signIn(email, password) {
        this.firebaseAuth.signInWithEmailAndPassword(email, password);
    }
    
        // logout
    signOut() {
        this.firebaseAuth.signOut();
    }
    
        // forgot password
    
    
}

export default new Firebase();