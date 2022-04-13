import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OverlayService } from '../overlay.service';

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.css']
})
export class DashboardDialogComponent implements OnInit{

  @Input() dialogTitle?: string;
  @Input() inputPlaceholder?: string;
  @Output() dialogClosed = new EventEmitter<void>();
  
  constructor(private overlayService: OverlayService) { }

  ngOnInit(): void {
    // notify home component that the overlay is active 
    this.overlayService.showOverlay.emit();
  }

  closeDialog(){
    this.dialogClosed.emit();
    // notify home component that the overlay is inactive
    this.overlayService.hideOverlay.emit();
  }
}
