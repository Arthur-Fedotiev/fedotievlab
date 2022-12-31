import admin, { ServiceAccount } from "firebase-admin";

const serviceAccount = JSON.parse(
  import.meta.env.VITE_FIREBASE_SERVICE_ACCOUNT_KEY
);

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Firebase admin initialization error", error.stack);
    }
  }
}
export default admin.firestore();
