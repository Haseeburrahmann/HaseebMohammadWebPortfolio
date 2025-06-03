// app/app.component.ts - Fixed for single-page application
import { Component, HostBinding, OnInit, Renderer2, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
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
      
      <main role="main">
        <!-- All sections in a single page -->
        <app-home id="home" class="section"></app-home>
        <app-about id="about" class="section"></app-about>
        <app-experience id="experience" class="section"></app-experience>
        <app-skills id="skills" class="section"></app-skills>
        <app-projects id="projects" class="section"></app-projects>
        <app-contact id="contact" class="section"></app-contact>
      </main>
      
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Haseeb Mohammad - Software Developer Portfolio';
  
  private themeObserver?: MutationObserver;
  private scrollObserver?: IntersectionObserver;
  
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();
      this.initializeScrollAnimations();
      this.setupAccessibilityFeatures();
    }
  }
  
  ngOnDestroy(): void {
    // Clean up observers and event listeners
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
  }
  
  private initializeTheme(): void {
    try {
      // Check if theme is saved in localStorage
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme === 'dark') {
        this.renderer.addClass(document.body, 'dark-theme');
      }
      
      // Set up theme observer to watch for changes
      this.themeObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            this.handleThemeChange();
          }
        });
      });
      
      this.themeObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
      });
    } catch (error) {
      console.warn('Error initializing theme:', error);
    }
  }
  
  private initializeScrollAnimations(): void {
    try {
      // Set up intersection observer for scroll animations
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      };
      
      this.scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, observerOptions);
      
      // Observe elements after a short delay to ensure DOM is ready
      setTimeout(() => {
        const elementsToObserve = document.querySelectorAll(
          '.fade-in, .fade-in-left, .fade-in-right, .scale-in'
        );
        
        elementsToObserve.forEach(el => {
          if (this.scrollObserver) {
            this.scrollObserver.observe(el);
          }
        });
      }, 100);
    } catch (error) {
      console.warn('Error initializing scroll animations:', error);
    }
  }
  
  private setupAccessibilityFeatures(): void {
    try {
      // Add skip navigation link for keyboard users
      this.addSkipNavigation();
      
      // Set up focus management
      this.setupFocusManagement();
      
      // Add reduced motion support
      this.handleReducedMotion();
    } catch (error) {
      console.warn('Error setting up accessibility features:', error);
    }
  }
  
  private addSkipNavigation(): void {
    const skipNav = this.renderer.createElement('a');
    this.renderer.setAttribute(skipNav, 'href', '#main-content');
    this.renderer.setAttribute(skipNav, 'class', 'skip-navigation');
    this.renderer.setProperty(skipNav, 'textContent', 'Skip to main content');
    
    // Insert at the beginning of the body
    this.renderer.insertBefore(document.body, skipNav, document.body.firstChild);
  }
  
  private setupFocusManagement(): void {
    // Add focus indicators for keyboard navigation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
      }
    });
    
    document.addEventListener('mousedown', () => {
      document.body.classList.remove('keyboard-nav');
    });
  }
  
  private handleReducedMotion(): void {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduced-motion');
    }
    
    // Listen for changes
    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        document.body.classList.add('reduced-motion');
      } else {
        document.body.classList.remove('reduced-motion');
      }
    });
  }
  
  private handleThemeChange(): void {
    try {
      // Force recalculation of styles when theme changes
      const cards = document.querySelectorAll('.card, .timeline-card, .project-card, .skill-card');
      cards.forEach(card => {
        const htmlElement = card as HTMLElement;
        // Force reflow to ensure styles are recalculated
        void htmlElement.offsetHeight;
      });
    } catch (error) {
      console.warn('Error handling theme change:', error);
    }
  }
}