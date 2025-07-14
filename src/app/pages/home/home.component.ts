import { Component } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';
import { ServicesComponent } from '../services/services.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { PortafolioComponent } from '../portafolio/portafolio.component';
import { ContactComponent } from '../contact/contact.component';
import { HttpClientModule } from '@angular/common/http'; // <-- Importa esto

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SliderComponent,
    ServicesComponent,
    RouterLink,
    FooterComponent,
    AboutUsComponent,
    PortafolioComponent,
    ContactComponent,
    HttpClientModule,   // <-- Aquí también
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  // <-- plural
})
export class HomeComponent {

  scrollToServices() {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

}
