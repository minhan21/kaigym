import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "firebaseConfig";
import Helper from "utils/helper";
import uuid from "react-native-uuid";

export const addStage = async (ownerId, newData) => {
  /**
   * Adds or updates a record in the 'stages' sub-collection of an owner in Firestore.
   * If a record with the same start and end time exists, it updates the existing data array.
   * @param {string} ownerId - The ID of the owner user.
   * @param {object} newData - An object containing customerEmail, start, end, price, note, status, and color.
   * @returns {object} The response data containing success status and updated record details.
   */
  try {
    // Generate a unique ID and add it to newData
    const uniqueId = uuid.v4();
    newData.id = uniqueId;

    // Extract the start and end time from newData
    const { start, end } = newData;

    // Reference to the owner's stages sub-collection
    const stagesRef = collection(db, "User", ownerId, "stages");

    // Query to check if a record with the same start and end time exists
    const q = query(
      stagesRef,
      where("start", "==", start),
      where("end", "==", end)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If a record with the same start and end time exists, update it
      const stageDoc = querySnapshot.docs[0];
      const stageRef = doc(db, "User", ownerId, "stages", stageDoc.id);

      await updateDoc(stageRef, {
        data: arrayUnion(newData),
      });

      const updatedStageDoc = await getDoc(stageRef);
      const updatedStageDetails = updatedStageDoc.exists()
        ? updatedStageDoc.data()
        : null;
      Helper.showToastMessage({
        type: "success",
        title: "Success",
        content: "Đặt sân thành công",
      });
      return {
        success: true,
        stageId: stageDoc.id,
        stageDetails: updatedStageDetails,
      };
    } else {
      // If no record with the same start and end time exists, create a new record
      const docRef = await addDoc(collection(db, "User", ownerId, "stages"), {
        data: [newData],
      });

      const stageDoc = await getDoc(
        doc(db, "User", ownerId, "stages", docRef.id)
      );
      const stageDetails = stageDoc.exists() ? stageDoc.data() : null;
      Helper.showToastMessage({
        type: "success",
        title: "Success",
        content: "Đặt sân thành công",
      });
      return {
        success: true,
        stageId: docRef.id,
        stageDetails: stageDetails,
      };
    }
  } catch (e) {
    console.error("Error adding or updating document: ", e);
    return {
      success: false,
      error: e.message,
    };
  }
};
/**
 * Fetches all stage records for a specific user by userId.
 * @param {string} userId - The ID of the user whose stages you want to fetch.
 * @returns {object} - The response data containing success status and the fetched records.
 */
export const getStagesByUserId = async (userId) => {
  try {
    // Reference to the user's stages sub-collection
    const stagesRef = collection(db, "User", userId, "stages");
    const stagesSnapshot = await getDocs(stagesRef);

    const userStages = stagesSnapshot.docs.flatMap((stageDoc) =>
      stageDoc.data().data.map((stage) => ({
        ...stage,
        stageId: stageDoc.id,
      }))
    );

    console.log({
      type: "success",
      title: "Thành công",
      content: "Fetched all records successfully",
    });

    return {
      success: true,
      records: userStages,
    };
  } catch (e) {
    console.error("Error fetching documents: ", e);
    return {
      success: false,
      error: e.message,
    };
  }
};
/**
 * Function to get user ID based on email.
 * @param {string} email - The email of the user to find.
 * @returns {Promise<string|null>} - Returns the user ID if found, otherwise null.
 */
export const getUserIdByEmail = async (email) => {
  try {
    // Reference to the 'User' collection
    const usersRef = collection(db, "User");

    // Query to find user with the given email
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // If user exists, return the first matched user's ID
      const userDoc = querySnapshot.docs[0];
      return userDoc.id;
    } else {
      // If no user is found, return null
      return null;
    }
  } catch (e) {
    console.error("Error getting user ID: ", e);
    return null;
  }
};
