import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './shared/slider/slider.component';
import { ServicesComponent } from './pages/services/services.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'slider', component: SliderComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'about-us', component: AboutUsComponent},
    { path: 'navbar', component: NavbarComponent},
    { path: 'portafolio', component: PortafolioComponent},
    { path: 'conctact', component: ContactComponent},
    
];
