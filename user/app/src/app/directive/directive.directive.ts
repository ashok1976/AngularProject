import { Directive, ElementRef,AfterViewInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[appDirective]'})
export class DirectiveDirective {
  constructor( private _eleRef:ElementRef) { }
    ngAfterViewInit(){
     // this._eleRef.nativeElement.style.color = 'Red'
    }
    colorChange(color){
      this._eleRef.nativeElement.style.color = color;
    }
}
@Directive({
  selector:'[viewChildren]'
})
export class VidewchildrenDirective{
  constructor(private _eleRef: ElementRef,private renderer:Renderer2){

  }
  childrenColor(color){
    this._eleRef.nativeElement.style.color = color;
    this.renderer.setStyle(this._eleRef.nativeElement,'background','blue')
    this.renderer.setStyle(this._eleRef.nativeElement,'color','#fff')
 
   
  }


}
export const allDirective = [DirectiveDirective,VidewchildrenDirective]
