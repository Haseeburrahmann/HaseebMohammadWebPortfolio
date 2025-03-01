// app/app.component.ts
import { Component, HostBinding, OnInit, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent, 
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      
      <main>
        <!-- All sections in a single page -->
        <app-home id="home"></app-home>
        <app-about id="about"></app-about>
        <app-experience id="experience"></app-experience>
        <app-skills id="skills"></app-skills>
        <app-projects id="projects"></app-projects>
        <app-contact id="contact"></app-contact>
      </main>
      
      <app-footer></app-footer>
      
      <!-- Theme Toggle Button -->
      <!-- <button class="theme-toggle" (click)="toggleTheme()">
        <i class="fas" [ngClass]="isDarkTheme ? 'fa-sun' : 'fa-moon'"></i>
      </button> -->
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme = false;
  
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check if theme is saved in localStorage
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'dark') {
        this.isDarkTheme = true;
        this.renderer.addClass(document.body, 'dark-theme');
      }
      
      // Initialize scroll animations
      this.initScrollAnimations();
    }
  }
  
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkTheme) {
        this.renderer.addClass(document.body, 'dark-theme');
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        this.renderer.removeClass(document.body, 'dark-theme');
        localStorage.setItem('portfolio-theme', 'light');
      }
    }
  }
  
  private initScrollAnimations(): void {
    // Only run in browser
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Force initial calculation of all styles
    setTimeout(() => {
      document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        el.classList.add('active');
      });
    }, 100);
    
    // Add intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
      observer.observe(el);
    });
  }
  
  // Force recalculation of styles when route changes
  onActivate(event: any): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
      
      // Force redraw of all content
      setTimeout(() => {
        this.initScrollAnimations();
        
        // Force all cards to have proper background
        document.querySelectorAll('.card, .timeline-card, .project-card, .skill-card').forEach(card => {
          (card as HTMLElement).style.backgroundColor = this.isDarkTheme ? '#2d2d2d' : '#ffffff';
        });
        
        // Force all text to have proper color
        document.querySelectorAll('.card *, .timeline-card *, .project-card *, .skill-card *').forEach(el => {
          if (el.nodeName !== 'I') {
            (el as HTMLElement).style.color = this.isDarkTheme ? '#f5f5f5' : '#212529';
          }
        });
      }, 100);
    }
  }
}