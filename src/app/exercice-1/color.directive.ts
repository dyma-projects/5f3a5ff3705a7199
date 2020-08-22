
import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({ selector: '[txtColor]' })
export class ColorDirective {

    @HostListener('window:keydown', ['$event']) windowKeydown($event) {
        if($event.key === 'ArrowUp'){
         this.renderer.setStyle(this.el.nativeElement,'color', 'green');
        }else if($event.key === 'ArrowDown'){
         this.renderer.setStyle(this.el.nativeElement,'color', 'yellow');
        }else if($event.key === 'ArrowLeft'){
         this.renderer.setStyle(this.el.nativeElement,'color', 'orange');
        }else if ($event.key === 'ArrowRight'){
         this.renderer.setStyle(this.el.nativeElement,'color', 'blue');
        }
      }
   
   
     constructor(private renderer : Renderer2, private el : ElementRef) {
     }
   
     ngOnInit() {
       this.renderer.setStyle(this.el.nativeElement,'color', 'black');
     }
   

}