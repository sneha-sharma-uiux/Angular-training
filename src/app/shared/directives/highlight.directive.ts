import { Directive, OnInit, OnDestroy, ElementRef , HostListener, Renderer2, Input} from '@angular/core';

//h2, div , any tag that contains directive is called host element
//Renderer2 DOM manipulation Library

@Directive({
  //[] - must, represent a property
  // used at ant tag/component
  selector: '[appHighlight]',
  exportAs:'appHighlight' // for #myDir="appHighlight"
})
export class HighlightDirective implements OnInit, OnDestroy {

  @Input('appHighlight')
  color:string='lightgreen';

  // is injected with host element ElementRef
  constructor(private hostElement:ElementRef, private renderer:Renderer2) { 
    console.log('HighlightDirective Created');
  }
  ngOnInit(){
    console.log('HighlightDirective ngOnInit');
    if(!this.color){
      this.color='lightgreen';
    }
    console.log('host Tag', this.hostElement.nativeElement.tagName)
  }
  ngOnDestroy(){
    console.log('HighlightDirective ngOnDestroy');
  }

  @HostListener('click') // for directive listen event coz paranthesis not used in directive
  clicked(){
    console.log('click event');
  }

  @HostListener('mouseenter')
  mouseEnter(){
    this.renderer.setStyle(this.hostElement.nativeElement,'background',this.color)
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.renderer.removeStyle(this.hostElement.nativeElement,'background')
  }

}
