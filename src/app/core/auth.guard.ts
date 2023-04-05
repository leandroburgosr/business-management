import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verifica si el usuario ha iniciado sesión
    const isLoggedIn = false; // Aquí va la lógica para verificar si el usuario ha iniciado sesión

    if (isLoggedIn) {
      return true;
    } else {
      // Si el usuario no ha iniciado sesión, redirigir a la ruta de inicio de sesión
      this.router.navigate(['/login']);
      return false;
    }
  }
}
