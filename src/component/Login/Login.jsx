import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import React from 'react';
import app from '../../firebase/firebase.init';
const Login = () => {

    const auth = getAuth (app)
    console.log(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSineIn = () => {
    signInWithPopup(auth,provider)
    .then(result = {
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.log('error', error.messsage)
    })
  }
    return (
        
        <div>
             <button onClick={handleGoogleSineIn}>Google Login</button>
        </div>
    );
};

export default Login;