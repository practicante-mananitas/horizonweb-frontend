import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements AfterViewInit {

  @ViewChild('aboutSection') aboutSection!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // si solo quieres que pase una vez
          }
        });
      },
      { threshold: 0.2 } // empieza cuando se ve al menos el 20%
    );

    observer.observe(this.aboutSection.nativeElement);
  }

}
