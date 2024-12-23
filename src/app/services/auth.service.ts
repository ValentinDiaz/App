import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
} from '@angular/fire/auth';
import { addDoc, collection, doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.iterface';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root',
})
export class authService {
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  async registerUser({ email, password, ...userData }: any) {
    try {
      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      // Enviar correo de verificación
      if (userCredential.user) {
        await sendEmailVerification(userCredential.user);
        console.log('Correo de verificación enviado');

        // Guardar datos del usuario en Firestore usando UsuarioService
        const usuario = {
          uid: userCredential.user.uid, // Relacionar con UID de Firebase Auth
          email,
          ...userData, // Datos adicionales como nombre y apellido
        };
        await this.usuarioService.addUsuario(usuario);
        console.log('Datos del usuario almacenados en Firestore');
      }

      // Cerrar sesión inmediatamente después de registrar
      await signOut(this.auth);
      console.log(
        'Usuario cerrado sesión inmediatamente después de registrar.'
      );

      return userCredential;
    } catch (error) {
      console.error('Error durante el registro:', error);
      throw error;
    }
  }

  async registerGym(gimnasioData: any) {
    await this.usuarioService.addGimnasio(gimnasioData);
    console.log('Datos del usuario almacenados en Firestore');
  }

  async login({ email, password }: any) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      if (userCredential.user) {
        if (!userCredential.user.emailVerified) {
          throw new Error(
            'Por favor verifica tu email antes de iniciar sesión.'
          );
        }
      }

      return userCredential;
    } catch (error: unknown) {
      console.error('Error al iniciar sesión:', error);

      // Verificar si el error tiene la propiedad 'message' de tipo string
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const errorMessage = (error as { message: string }).message;
        if (
          errorMessage ===
          'Por favor verifica tu email antes de iniciar sesión.'
        ) {
          this.router.navigate(['/login']);
        }
      }

      throw error; // Re-lanzar el error para manejo posterior
    }
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
