import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"apps-e6a7f","appId":"1:664626746731:web:29a3135cf279631406282e","storageBucket":"apps-e6a7f.firebasestorage.app","apiKey":"AIzaSyBg8u8nghYIP1NJwaZfCdyfODl5WVEYQnA","authDomain":"apps-e6a7f.firebaseapp.com","messagingSenderId":"664626746731"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"apps-e6a7f","appId":"1:664626746731:web:29a3135cf279631406282e","storageBucket":"apps-e6a7f.firebasestorage.app","apiKey":"AIzaSyBg8u8nghYIP1NJwaZfCdyfODl5WVEYQnA","authDomain":"apps-e6a7f.firebaseapp.com","messagingSenderId":"664626746731"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
