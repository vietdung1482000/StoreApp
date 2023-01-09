import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAFFr6tIaCTNTrsX6mnmFFHRlALmOnqHqw",
    authDomain: "food-delivery-app-8d310.firebaseapp.com",
    databaseURL: "https://food-delivery-app-8d310-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-8d310",
    storageBucket: "food-delivery-app-8d310.appspot.com",
    messagingSenderId: "543336313329",
    appId: "1:543336313329:web:9bbcec9e83c0b8b9c2d450",
    measurementId: "G-JY90WE4G4J"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)