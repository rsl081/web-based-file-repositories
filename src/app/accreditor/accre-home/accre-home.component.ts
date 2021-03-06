import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/navigation.service';
import { ViewportService } from 'src/app/shared/viewport.service';

@Component({
  selector: 'app-accre-home',
  templateUrl: './accre-home.component.html',
  styleUrls: ['./accre-home.component.css']
})
export class AccreHomeComponent implements OnInit {


  userName='Hi, Accreditor'
  isNavOpened = false;

  
  constructor(private navigationService: NavigationService, private viewportService: ViewportService) {
    // notify this component once the sidebar is opened or closed
    this.navigationService.navOpened.subscribe(()=>{
      this.isNavOpened = true;
    })

    this.navigationService.navClosed.subscribe(()=>{
      this.isNavOpened = false;
    })
   }

  ngOnInit(): void {
  }

  // event listener for screen resize
  @HostListener('window:resize')
  onWindowResize() {
    if(this.isNavOpened){
      // check the viewport everytime the user resize the screen
      if(this.viewportService.breakpoint === 'desktop'){
        // if the screen is large (desktop), set the isNavOped to false
        this.isNavOpened = false;
        // this will closed the overlay
      }
    }
  }

}
