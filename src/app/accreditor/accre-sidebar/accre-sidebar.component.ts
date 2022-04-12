import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/navigation.service';
import { ViewportService } from 'src/app/shared/viewport.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-accre-sidebar',
  templateUrl: './accre-sidebar.component.html',
  styleUrls: ['./accre-sidebar.component.css'],
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
export class AccreSidebarComponent implements OnInit {

  constructor(private navigationService: NavigationService, private viewportService: ViewportService) { }

  ngOnInit(): void {
  }

  get stateName(){
    // tirgger the animation only if the screen size is within the mobile breakpoint
    if(this.viewportService.breakpoint === 'mobile'){
      return this.isNavOpen()? 'show' : 'hide';
    }else{
      // do nothing
      return 'default';
    }
  }

  isNavOpen(): boolean{
    return this.navigationService.getNavState();
  }

  // event listener for screen resize
  @HostListener('window:resize')
  onWindowResize() {
    if(this.isNavOpen()){
      // check the viewport everytime the user resize the screen
      if(this.viewportService.breakpoint === 'desktop'){
        // if the screen is large (desktop), toggle the sidebar
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
