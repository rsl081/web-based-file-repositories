import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { NavigationService } from 'src/app/shared/navigation.service';
import { ViewportService } from 'src/app/shared/viewport.service';

@Component({
  selector: 'app-faculty-sidebar',
  templateUrl: './faculty-sidebar.component.html',
  styleUrls: ['./faculty-sidebar.component.css'],
  animations: [
    trigger('toggleNav', [
      state('show', style({
        left: 0
      })),
      state('hide', style({
        left: '-16rem'
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ])
  ]
})
export class FacultySidebarComponent implements OnInit {

  constructor(private navigationService: NavigationService, private viewportService: ViewportService) { }

  ngOnInit(): void {
  }

  get stateName(){
    if(this.viewportService.breakpoint === 'mobile'){
      return this.isNavOpen()? 'show' : 'hide';
    }else{
      return false;
    }
  }

  isNavOpen(): boolean{
    return this.navigationService.getNavState();
  }

  @HostListener('window:resize')
  onWindowResize() {
    if(this.isNavOpen()){
      if(this.viewportService.breakpoint === 'desktop'){
        this.navigationService.toggleNavState();
      }
    }
  }

  // this method will call once any of the sidebar links are clicked
  closeSidebar(){
    this.navigationService.toggleNavState();
    // this will notify the other components that the sidebar is closed
    this.navigationService.navClosed.emit();
  }

}
