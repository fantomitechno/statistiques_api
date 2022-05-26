/* eslint-disable @typescript-eslint/no-explicit-any */
import { doc, updateDoc } from "firebase/firestore/lite";
import { database } from "./index.js";

const updateData = async (collectionName: string, id: string, data: any) =>
  await updateDoc(doc(database, collectionName, id), data);

export { updateData };
