/* eslint-disable @typescript-eslint/no-explicit-any */
import { setDoc, doc } from "firebase/firestore/lite";
import { database } from "./index.js";

const addData = async (
  collectionName: string,
  id: string,
  data: any,
  merge?: boolean
) => {
  if (!merge) merge = false;
  await setDoc(doc(database, collectionName, id), data, { merge });
};

export { addData };
