import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLoi_78B8kILZItvI9uT4T4yBPA-fNc1c",
  authDomain: "carrot-67701.firebaseapp.com",
  projectId: "carrot-67701",
  storageBucket: "carrot-67701.appspot.com",
  messagingSenderId: "322590414721",
  appId: "1:322590414721:web:b3b09c88ce774690c7fa80",
  measurementId: "G-CTRJFC5M5E",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage();

//firebase의 firestore 인스턴스를 변수에 저장
export const db = getFirestore(app);
//필요한 곳에서 사용할 수 있도록 내보내기

export default app;
