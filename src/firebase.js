import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA1TShXcpj5AdC8Kcd7s6Hjl2RByTAEu4Y",
    authDomain: "food-order-fb4dc.firebaseapp.com",
    projectId: "food-order-fb4dc",
    storageBucket: "food-order-fb4dc.appspot.com",
    messagingSenderId: "756590793642",
    appId: "1:756590793642:web:3eea4988cb41c4e01911d3",
    databaseURL : "https://food-order-fb4dc-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
