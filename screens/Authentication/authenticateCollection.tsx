// Import Firestore and your Firestore instance
import Helper from "utils/helper";
import { db } from "firebaseConfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser(params) {
  const auth = getAuth();

  try {
    // Register the user with Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      params.email,
      params.password
    );
    const userId = userCredential.user.uid; // Get the unique user ID from Firebase Auth

    // Set the additional user data in Firestore under the user's UID
    await setDoc(doc(db, "User", userId), {
      firstName: params.firstName,
      lastName: params.lastName,
      role: params.role,
      // Include any additional fields if necessary
    });

    Helper.showToastMessage({
      type: "success",
      title: "Success",
      content: "User registration successful",
    });
    console.log("User registered and data saved in Firestore with ID:", userId);
    return { success: true, userId: userId };
  } catch (error) {
    Helper.handleFirestoreError(error);
    return { success: false, error: error };
  }
}

export async function loginUser(params) {
  console.log(params, "params");
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      params.email,
      params.password
    );
    Helper.showToastMessage({
      type: "success",
      title: "Thành công",
      content: "Đăng nhập thành công",
    });
    return { success: true, user: userCredential.user };
  } catch (error) {
    Helper.handleFirestoreError(error);

    return { success: false, error: error };
  }
}
export async function logoutUser() {
  const auth = getAuth();

  try {
    await signOut(auth); // This signs out the current user
    Helper.showToastMessage({
      type: "success",
      title: "Đã đăng xuất",
      content: "Đăng xuất thành công",
    });
    return { success: true };
  } catch (error) {
    Helper.handleFirestoreError(error); // Assuming handleFirestoreError can handle auth errors too

    return { success: false, error: error };
  }
}
