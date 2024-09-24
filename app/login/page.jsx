'use client'
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconfig/firebase.js';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import GoogleSignInButton from '../firebaseconfig/googleOauth.js';

import { useRouter } from 'next/navigation.js';



const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          navigate.push('/dashboard');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          navigate.push('/dashboard');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <Button type="submit">{isLogin ? 'Login' : 'Sign up'}</Button>
      <Button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign up instead' : 'Login instead'}</Button>
      <GoogleSignInButton />
    </form>
  );
};

export default AuthForm;
