import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { database } from "./index.js";

const getDatas = async (collectionName: string) => {
  const coll = collection(database, collectionName);
  const snapchot = await getDocs(coll);
  const list = snapchot.docs.map((doc) => doc.data());
  return list;
};

const getData = async (collectionName: string, documentName: string) => {
  const document = doc(database, collectionName, documentName);
  const snapshot = await getDoc(document);
  return snapshot.data();
};

export { getDatas, getData };
