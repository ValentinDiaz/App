export interface Usuario {
    id?: string;             // Identificador único del usuario
    nombre: string;          // Nombre del usuario
    apellido: string;        // Apellido del usuario
    email: string;
    rol:string;           // Correo electrónico del usuario
    telefono?: string;       // Teléfono de contacto (opcional)
    fechaNacimiento?: string; // Fecha de nacimiento (opcional)
    estadoSuscripcion?: 'activo' | 'inactivo' | 'prueba';
    planSuscripcion?: 'básico' | 'premium' | 'vip';  // Plan de suscripción (opcional)
    historialPagos?: Array<{ fecha: string, monto: number }>; // Historial de pagos (opcional)
}
