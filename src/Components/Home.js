import React, {useEffect, useState} from 'react';
import firebaseConfig from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


function Home() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loginName, setLoginName] = useState('')
  const [loginPass, setLoginPass] = useState('')

    const [ currentUser , setCurrentUser] = useState();
    const auth = getAuth(firebaseConfig);
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => { setCurrentUser(user) })
    }, [])

    

  const handleSignup = () =>{
    const auth = getAuth(firebaseConfig);
    createUserWithEmailAndPassword(auth, name, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  }

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const mail = (e) =>{
    setName(e.target.value)
  }
  
  const pass = (e) =>{
    setPassword(e.target.value)
  }

  const loginMail = (e) =>{
    setLoginName(e.target.value)
  }
  const loginPassword = (e) =>{
    setLoginPass(e.target.value)
  }

  const handleLogin = () =>{
    const auth = getAuth(firebaseConfig);
    signInWithEmailAndPassword(auth, loginName, loginPass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  return (
    <div className="container">
      <h2>Register user</h2>
      <div>
        <label>Email</label>
        <input type="email" onChange={mail}/>
        <label>Password</label>
        <input type="password" onChange={pass}/>
      <input type="submit" value="signup" onClick={() => handleSignup()} disabled={currentUser}/>
      </div>

      <h2>Login user</h2>
      <div>
        <label>Email</label>
        <input type="email" onChange={loginMail}/>
        <label>Password</label>
        <input type="password" onChange={loginPassword}/>
      <input type="submit" value="login" onClick={() => handleLogin()} disabled={currentUser}/>
      </div>

      <br/>
      <div className="usrname">{currentUser?.email}</div>
      <input type="submit" value="signout" onClick={() => handleSignOut()}/>
    </div>
  );
  
}


export {
  Home
};