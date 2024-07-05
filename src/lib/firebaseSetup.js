import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);

export const writeReportData = (reports) => {
    set(ref(database, 'reports'), reports);
}

export const getReports = () => {
    return get(child(ref(database), 'reports'));
}

export const writeDashboardData = (reports) => {
    set(ref(database, 'dashboardReports'), reports);
}

export const getDashboardReports = () => {
    return get(child(ref(database),'dashboardReports'));
}
