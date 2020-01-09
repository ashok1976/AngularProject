import { Directive, HostBinding, HostListener,ElementRef,Renderer,ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({  selector: '[appDirective]'
})
export class DirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer, public viewContainerRef:ViewContainerRef ) {
    this.ChangeBgColor('red');
}
ChangeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
}

@HostBinding('class.active') isActive:boolean
@HostBinding('style.backgroundColor') myColor
@HostListener('click') onclick(){
this.isActive =true;
this.myColor ='green';
}

}

@Directive({  selector: '[tempDirective]',  })
  export class templateRefDirective {
  constructor(private _viewContainerRef: ViewContainerRef,
    public  _tempplateRef:TemplateRef<any>,
    private Renderer:Renderer, private ele: ElementRef) { }
   /*    @Input() set tempDirective(condition:boolean){
        if(condition){
          this._viewContainerRef.createEmbeddedView(this._tempplateRef)

        }else{
          this._viewContainerRef.clear
        }

        
      } */
  
  }

export const allDirective = [DirectiveDirective,templateRefDirective]