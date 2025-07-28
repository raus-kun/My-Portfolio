import { Component, OnInit, AfterViewInit  } from '@angular/core';
import Typewriter from 'typewriter-effect/dist/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular'; 
import { particlesConfig } from '../../particles-config';
import { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { EducationComponent } from '../../components/education/education.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    EducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    CertificationsComponent,
    ContactComponent,
    NgxParticlesModule  
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  isBrowser: boolean; 

  particlesOptions = particlesConfig;
  id = "tsparticles";

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    this.isBrowser = isPlatformBrowser(this.platformId); 
  }

  ngOnInit(): void {
  }

   ngAfterViewInit(): void {
    if (this.isBrowser) {
      const typewriterTarget = document.querySelector('.hero-intro');

      if (typewriterTarget) {
        const typewriter = new Typewriter(typewriterTarget, {
          loop: true,
          delay: 75,
        });

        typewriter
          .pauseFor(1000)
          .typeString('Hello World!!')
          .pauseFor(3000)
          .deleteAll()
          .typeString('Almost an Engineer')
          .pauseFor(3000)
          .start();
      }
    }
  }
 
  particlesLoaded(container: Container): void {
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
}