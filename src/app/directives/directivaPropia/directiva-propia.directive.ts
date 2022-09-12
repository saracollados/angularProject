import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivaPropia]'
})
export class DirectivaPropiaDirective {

  constructor() { }

  @HostBinding('class.estiloHover') private estilosHover:boolean = false;
  @HostBinding('class.estiloNoHover') private estilosNoHover:boolean = true;

  @HostListener('mouseenter') mouseenter() {
    this.estilosHover = true;
    this.estilosNoHover = false;
  }
  @HostListener('mouseleave') mouseleave() {
    this.estilosHover = false;
    this.estilosNoHover = true;
  }
}
