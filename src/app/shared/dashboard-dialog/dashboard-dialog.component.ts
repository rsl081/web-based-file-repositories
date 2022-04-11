import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.css']
})
export class DashboardDialogComponent implements OnInit{

  @Input() inputPlaceholder?: string;
  @Output() dialogClosed = new EventEmitter<void>();
  isDialogOpen = true;
  
  constructor(private overlayService: OverlayService) { }

  ngOnInit(): void {
    // notify home component that the overlay is active once this component is initialized
    this.overlayService.showOverlay.emit();
  }

  closeDialog(){
    this.isDialogOpen = !this.isDialogOpen;
    this.dialogClosed.emit();
    this.overlayService.hideOverlay.emit();
  }

}
