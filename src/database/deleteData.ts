import { deleteDoc, doc } from "firebase/firestore/lite";
import { database } from "./index.js";

const deleteData = async (collectionName: string, id: string) =>
  await deleteDoc(doc(database, collectionName, id));

export { deleteData };
