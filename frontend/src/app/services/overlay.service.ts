import {  Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  overlayRef: OverlayRef

  constructor(private overlay: Overlay) { }

  open( component: any) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    });
    const componentPortal = new ComponentPortal(component);
    this.overlayRef.addPanelClass("example-overlay")
    this.overlayRef.attach(componentPortal);
  }
  close(){
    this.overlayRef.dispose()
  }
}
