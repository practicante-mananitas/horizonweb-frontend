import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {

  projects = [
    { image: 'assets/portafolio/proyecto_02.png', title: 'Ticketrip', description: 'Landing page moderna.' },
    { image: 'assets/portafolio/proyecto_01.png', title: 'Aero MX', description: 'Tienda en línea.' },
    { image: 'assets/portafolio/proyecto_04.png', title: 'Wines Menu', description: 'Aplicación web.' }
  ]
}
