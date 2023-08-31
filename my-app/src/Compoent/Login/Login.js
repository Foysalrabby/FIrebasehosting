import React, { useContext, useState } from 'react';
import firebaseConfig from './firebaseConfig ';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { contextprovider } from '../../App';
const auth = getAuth();

const provider = new GoogleAuthProvider();



const Login = () => {

  const [isloggin,setloggin]=useContext(contextprovider);

  const Handlegooglelg=()=>{
  
 
   
    signInWithPopup(auth, provider)
    .then((res) => {
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential.accessToken;
      const {displayName,email,photoURL} = res.user;
      const singninInfo={
        name:displayName,
        email:email,
        photo:photoURL
      }
      setloggin(singninInfo);
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
   console.log(error);
    });
  
}

    return (
        <div>
           <button onClick={Handlegooglelg}> Sing in google</button>
        </div>
    );
};

export default Login;