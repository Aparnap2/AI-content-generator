import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseconfig/firebase.js';
import { Button } from '@nextui-org/button';

const GoogleSignInButton = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <Button onClick={handleGoogleSignIn}>
      Sign in with Google
    </Button>
  );
};

export default GoogleSignInButton;