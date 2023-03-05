import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})
export class CustomeDirectiveDirective {

  constructor( private el:ElementRef,private render: Renderer2) {

    // el.nativeElement.style.backgroundColor='grey';

    render.setStyle(el.nativeElement,'backgroundColor','red');

   }

}
