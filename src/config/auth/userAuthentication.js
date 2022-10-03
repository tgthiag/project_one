// import app from './auth';
// import {
//     getAuth,
//     onAuthStateChanged,
//     signInWithCredential,
//     User
//   } from 'firebase/auth';
//   import { useState } from 'react';

// const auth = getAuth(app);

// // Listen for authentication state to change.
// onAuthStateChanged(auth, user => {
//   if (user != null) {
//     console.log('We are authenticated now!');
//   }else{
//     console.log('Not authenticated!');
//   }

//   // Do other things
// });
// // import 'firebase/auth';
// // import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
// // const auth = getAuth();

// export function useAuthentication() {
//   const [user, setUser] = React.useState<User>(null);

//   React.useEffect(() => {
//     const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         setUser(user);
//       } else {
//         // User is signed out
//         setUser(undefined);
//       }
//     });

//     return unsubscribeFromAuthStatuChanged;
//   }, []);

//   return {
//     user
//   };
// }