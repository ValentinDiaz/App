

export interface Gimnasio {
    uid: string;        
    email: string;      
    nombre: string; 
    direccion: string;  
    telefono:string;  
    usuarios?: any[];      // Colección de usuarios, inicialmente vacía
   
}