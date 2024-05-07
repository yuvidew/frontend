import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDsBzuXOL8AFFCDTpGigIwnVcjsyaAT6yk",
    authDomain: "wboard-d751b.firebaseapp.com",
    projectId: "wboard-d751b",
    storageBucket: "wboard-d751b.appspot.com",
    messagingSenderId: "1039490407453",
    appId: "1:1039490407453:web:452142190801e185f97af4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
