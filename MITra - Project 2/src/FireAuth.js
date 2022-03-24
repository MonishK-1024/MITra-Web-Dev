import { signInWithPopup, signInWithRedirect, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth, facebookAuthProvider, googleAuthProvider } from './Firebase'

async function signUp(email, password) {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {

        const user = userCredential.user;
        console.log(email, password);
    })
        .catch((error) => {
            const errorCode = error.code;
            const errormessage = error.message;
            console.log(errorCode, errormessage);

            return false;
        });
    return true;
}

async function signIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log(auth.currentUser);
        const user = userCredential.user;
        console.log(email, password);
    })
        .catch((error) => {
            const errorCode = error.code;
            const errormessage = error.message;
            console.log(errorCode, errormessage);

            return false;
        });
    return true;
}

async function signOut() {
    await auth.signOut();
}

async function googleSignIn() {
    googleAuthProvider.addScope('profile');
    googleAuthProvider.addScope('email');
    await signInWithPopup(auth, googleAuthProvider).then((userCredential) => {
        const user = userCredential.user;
    })
        .catch((error) => {
            const errorCode = error.code;
            const errormessage = error.message;
            console.log(errorCode, errormessage);

            return false;
        });
    return true;
}

async function facebookSignIn() {
    facebookAuthProvider.addScope('user_birthday');
    await signInWithRedirect(auth, facebookAuthProvider).then((userCredential) => {
        const user = userCredential.user;
    })
        .catch((error) => {
            const errorCode = error.code;
            const errormessage = error.message;
            console.log(errorCode, errormessage);

            return false;
        });
    return true;
}

export { signUp, signIn, signOut, googleSignIn, facebookSignIn }