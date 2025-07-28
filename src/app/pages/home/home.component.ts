import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChild } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import Typewriter from 'typewriter-effect/dist/core';

// Import all your other components
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
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
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
        .typeString('And Namaste!')
        .pauseFor(3000)
        .start();
    }
    }

    if (this.bgVideo?.nativeElement) {
      const videoEl = this.bgVideo.nativeElement;
      videoEl.muted = true; // Needed for autoplay
      videoEl.play().catch(err => {
        console.warn('Autoplay failed:', err);
      });
    }
  }
}