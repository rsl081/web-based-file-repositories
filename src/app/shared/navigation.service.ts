import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  // cross component communication
  navOpened = new EventEmitter<void>();
  navClosed = new EventEmitter<void>();

  private navState = false;

  toggleNavState(){
    this.navState = !this.navState;
  }

  getNavState():boolean{
    return this.navState;
  }
}
