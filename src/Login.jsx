 import React from 'react'
 import { auth } from './firebase';
 import './login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
 import { login } from './features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] =  useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        
    };
    const register = () => {
      if(!name){
          return alert("please Register")
      }
      auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
          userAuth.user.updateProfile({
              displayName: name,
              photoURL: profilePic,
          })
          .then(() => {
              dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              }))
          })
      }).catch(error => alert(error));
    };
   

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [name, setName] = useState("");
//     const [profilePic, setProfilePic] =  useState("");
//     const dispatch = useDispatch();

//     const logintoapp = (e) => {
//         e.preventDefault();
//        auth.signInWithEmailAndPassword(email,password)
//        .then(userAuth => {
//            dispatch(login({
//                email:userAuth.user.email,
//                uid: userAuth.user.uid,
//                displayName: userAuth.user.displayName,
//                profileUrl: userAuth.user.photoURL,
               

//            }))
//        }).catch(error => alert(error));
//     }

//     const register = () => {
//         if(!name) {
//             return alert("Please Register")
//         }

//         auth.createUserWithEmailAndPassword(email, password)
//         .then((userAuth) => {
//             userAuth.user.updateProfile({
//                 displayName: name,
//                 photoURL: profilePic,
//             })
//             .then(() => {
//                 dispatch(login({
//                     email: userAuth.user.email,
//                     uid: userAuth.user.uid,
//                     displayName:name,
//                     photoUrl: profilePic,
//                 }))
//             })
//         }).catch((error) => alert(error))
//     }
    
   return (
  <div className='login'>
       <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" alt="" />
         <form>
             <input type="text"  placeholder='Full name(If not registered)' value={name} onChange={(e) => setName(e.target.value)}/>
             <input type="text"  placeholder='Profile pic URL(optional)' value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
             <input type="email"  placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
             <input type="password"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
             <button type='submit' onClick={loginToApp}>Sign in</button>
         </form>
         <p>Not a member?</p>
         <span className='login_register' onClick={register} >Register Now</span> 
 </div>
  )
 }

export default Login