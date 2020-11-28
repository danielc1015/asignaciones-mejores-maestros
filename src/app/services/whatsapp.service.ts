import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  constructor() { }

  // tslint:disable-next-line:typedef
  enviarMensaje(telefono, asignacion) {
    const bienvenida = asignacion.estudiante1.genero.nombre === 'hombre' ? 'Estimado hermano' : 'Estimada hermana';

    const mensaje = bienvenida + ', tiene una asignación el ' + asignacion.fecha + '. Estos son los datos:' +
                    asignacion.tipoAsignacion.nombre +
                    'Estudiante: ' + asignacion.estudiante1.nombre +
                    'Ayudante: ' + asignacion.estudiante2.nombre;
    return 'https://api.whatsapp.com/send?phone=' + telefono + '&text=' + mensaje;
  }
}
