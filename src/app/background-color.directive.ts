import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @Input() correctAnswer = false

  constructor(private elRef: ElementRef, private rend: Renderer2) { }

  @HostListener("click") changeColor() {
    if (this.correctAnswer)
      this.rend.addClass(this.elRef.nativeElement, "bg-success")
    else
      this.rend.addClass(this.elRef.nativeElement, "bg-danger")

  }

}
