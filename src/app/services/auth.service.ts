import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider
} from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(private auth: Auth,private firestore: Firestore) {}
  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logOut() {
    return signOut(this.auth);
  }
  async isAdmin(): Promise<boolean> {
    const currentUser = this.auth.currentUser;

    if (currentUser) {
      const userRef = doc(this.firestore, 'usuarios', currentUser.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        return userData?.['rol'] === 'pro'; // Devuelve true si el usuario es 'pro'
      }
    }
    return false; // Si no es admin, devuelve false
  }
}
