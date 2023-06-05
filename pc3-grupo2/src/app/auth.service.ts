import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    constructor(private afAuth: AngularFireAuth) {}
  
    // Método para iniciar sesión
    login(email: string, password: string): Promise<auth.UserCredential> {
      return this.afAuth.signInWithEmailAndPassword(email, password);
    }
  
    // Método para registrar un nuevo usuario
    register(email: string, password: string): Promise<auth.UserCredential> {
      return this.afAuth.createUserWithEmailAndPassword(email, password);
    }
  
    // Método para cerrar sesión
    logout(): Promise<void> {
      return this.afAuth.signOut();
    }
  }
  
  