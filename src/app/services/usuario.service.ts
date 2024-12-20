import { Injectable } from "@angular/core";
import { collection, Firestore,addDoc, collectionData} from "@angular/fire/firestore";
import { Usuario } from "../interfaces/usuario.iterface";
import { Observable } from "rxjs";
import { Gimnasio } from "../interfaces/gym.interface";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService{
    constructor(private firestore: Firestore){
        
    }

    addGimnasio(gimnasio: Gimnasio) {
        const gimnasioRef = collection(this.firestore, 'gimnasios');
        return addDoc(gimnasioRef, gimnasio);
      }

    addUsuario(usuario: Usuario){
        const usuarioRef = collection(this.firestore, 'usuarios');
        return addDoc(usuarioRef, usuario);
    }

    getUsuarios():Observable<Usuario[]>{
        const usuarioRef = collection(this.firestore, 'usuarios');
        return collectionData(usuarioRef, {idField:'uid'}) as Observable<Usuario[]>;

    }
}