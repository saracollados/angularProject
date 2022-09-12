import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  canActivate(): boolean {
    let permitirAcceso:boolean = true;

    if(localStorage.getItem('user') === 'sara@gmail.com') {
      permitirAcceso = false;
    }
    return permitirAcceso;
  }
}
