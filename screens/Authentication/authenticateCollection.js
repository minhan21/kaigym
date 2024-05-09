// Import Firestore and your Firestore instance
import { db } from "./../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Helper from "utils/helper";

export async function addUser(params) {
  try {
    // Define a reference to the "User" collection
    const userCollectionRef = collection(db, "User");

    // Add a new document to the "User" collection
    const docRef = await addDoc(userCollectionRef, {
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      password: params.password,
    });
    Helper.showToastMessage({
      type: "success",
      title: "Thành công",
      content: "Đăng ký tài khoản thành công",
    });
    console.log("User document written with ID:", docRef.id);
    return { success: true };
  } catch (error) {
    Helper.showToastMessage({
      type: "error",
      title: "Lỗi đăng ký",
      content: error.toString(),
    });
    console.log(error, "error");

    return { success: false };
  }
}
