// app/components/home/home.component.ts - Compact design
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="home-container">
      <div class="container">
        <div class="hero-content">
          <div class="text-content">
            <div class="intro fade-in">
              <span class="greeting">Hello, I'm</span>
              <h1 class="name">Haseeb Ur Rahman Mohammad</h1>
              <h2 class="title">Software Developer</h2>
            </div>
            
            <p class="description fade-in delay-1">
              2+ years of professional experience in developing Web Applications, 
              Microservices, and enterprise solutions using .NET 6/7/8, Azure, and modern web technologies.
            </p>
            
            <div class="key-skills fade-in delay-2">
              <div class="skill-item">
                <i class="fas fa-code"></i>
                <span>Full Stack Development</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-cloud"></i>
                <span>Azure Cloud Expert</span>
              </div>
              <div class="skill-item">
                <i class="fas fa-cogs"></i>
                <span>Microservices Architecture</span>
              </div>
            </div>
            
            <div class="cta-section fade-in delay-3">
              <div class="action-buttons">
                <a href="#projects" class="btn-primary">
                  <i class="fas fa-rocket"></i>
                  View Projects
                </a>
                <a href="#contact" class="btn-secondary">
                  <i class="fas fa-envelope"></i>
                  Contact Me
                </a>
              </div>
              
              <div class="tech-showcase">
                <span *ngFor="let tech of mainTechs" class="tech-badge">
                  <i [class]="tech.icon"></i>
                  {{tech.name}}
                </span>
              </div>
            </div>
          </div>
          
          <div class="image-content fade-in-right delay-1">
            <div class="image-wrapper">
              <img src="assets/images/developer-animation.svg" 
                   alt="Developer illustration"
                   class="hero-image"
                   (error)="onImageError($event)">
              
              <div class="placeholder-image" *ngIf="imageError">
                <i class="fas fa-laptop-code"></i>
              </div>
              
              <div class="floating-badges">
                <div class="badge badge-1">.NET</div>
                <div class="badge badge-2">Azure</div>
                <div class="badge badge-3">Angular</div>
                <div class="badge badge-4">C#</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="stats-row fade-in delay-4">
          <div class="stat" *ngFor="let stat of stats">
            <div class="stat-number">{{stat.value}}</div>
            <div class="stat-label">{{stat.label}}</div>
          </div>
        </div>
      </div>
      
      <div class="scroll-prompt" (click)="scrollToNext()">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  imageError = false;
  
  mainTechs = [
    { name: '.NET 8', icon: 'fab fa-microsoft' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Azure', icon: 'fas fa-cloud' },
    { name: 'SQL', icon: 'fas fa-database' }
  ];
  
  stats = [
    { value: '2+', label: 'Years' },
    { value: '15+', label: 'Technologies' },
    { value: '6', label: 'Projects' },
    { value: '100%', label: 'Passion' }
  ];
  
  ngOnInit(): void {
    // Component initialization
  }
  
  ngOnDestroy(): void {
    // Cleanup if needed
  }
  
  scrollToNext(): void {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  onImageError(event: any): void {
    this.imageError = true;
  }
}