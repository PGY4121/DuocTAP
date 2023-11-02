import { Injectable, EventEmitter, Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../models/database.types';
import { AuthService } from './auth.service';
import { delay } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private router: Router, @Inject('SupabaseClient') private supabase: SupabaseClient<Database>) { }

  async guardarSesionClase(qrCodeValue: string, currentUserId: string) {
    try {
      const { data, error: selectError } = await this.supabase.from('seccion').select('id_seccion').eq('id', currentUserId).single();
  
      if (selectError) {
        throw selectError;
      }
  
      if (data && data.id_seccion) {
        const { error: insertError } = await this.supabase.from('sesion_clase').insert({
          fecha_sesion_clase: new Date().toISOString(),
          id_seccion: data.id_seccion,
          id_sesion_clase: qrCodeValue,
          esta_activa: true
        });
  
        if (insertError) {
          throw insertError;
        }
  
        console.log("Sesión de clase guardada con éxito.");
  
      } else {
        console.error("No se encontró el id_seccion para el usuario dado.");
      }
  
    } catch (error) {
      console.error("Error al guardar la sesión de clase:", error);
    }
  }
  
}
