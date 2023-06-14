
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        throw error;
      });
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
     
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      updateProfile(user, {
        displayName: user.displayName,
        photoURL: user.photoURL,
        
      });
    }
  }, [user]);

  const authInfo = {
    user,
    loading,
    setUser,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
