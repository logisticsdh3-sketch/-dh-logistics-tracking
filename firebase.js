// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvaFvbrsX3Yc-7cJodBCr-oU9qgFI_aB4",
  authDomain: "dh-logistics-7863d.firebaseapp.com",
  projectId: "dh-logistics-7863d",
  storageBucket: "dh-logistics-7863d.firebasestorage.app",
  messagingSenderId: "812380574823",
  appId: "1:812380574823:web:2cb2a0705b71284569f0c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
