import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import {
  logoutUser,
  setLoadingState,
  setUser,
} from "@screens/Authentication/userSlice";
import { auth } from "firebaseConfig";

const AuthHandler = () => {
  const dispatch = useDispatch();
  const db = getFirestore();

  useEffect(() => {
    dispatch(setLoadingState(true));
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "User", user.uid);
        try {
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userDetails = userDoc.data();
            console.log(userDetails, "userDetails");
            // Extract and dispatch only the serializable user details
            dispatch(
              setUser({
                userData: {
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  emailVerified: user.emailVerified,
                  phoneNumber: user.phoneNumber,
                  photoURL: user.photoURL,
                },
                userDetails: userDetails,
              })
            );
            dispatch(setLoadingState(false));
          } else {
            dispatch(setLoadingState(false));

            console.log("No additional user details found in Firestore.");
            dispatch(
              setUser({
                userData: {
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  emailVerified: user.emailVerified,
                  phoneNumber: user.phoneNumber,
                  photoURL: user.photoURL,
                },
                userDetails: {},
              })
            );
          }
        } catch (error) {
          dispatch(setLoadingState(false));
          console.error("Error fetching user details:", error);
        }
      } else {
        dispatch(setLoadingState(false));
        dispatch(logoutUser());
      }
    });
  }, [dispatch, db]);

  return null;
};

export default AuthHandler;
