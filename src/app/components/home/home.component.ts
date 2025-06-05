// app/components/home/home.component.ts - Unified Design System Applied
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="intro fade-in">
              <span class="greeting">Hello, I'm</span>
              <h1 class="hero-title">Haseeb Ur Rahman Mohammad</h1>
              <h2 class="hero-subtitle">Software Developer</h2>
            </div>
            
            <p class="hero-description fade-in delay-1">
              2+ years of professional experience in developing Web Applications, 
              Microservices, and enterprise solutions using .NET 6/7/8, Azure, and modern web technologies.
            </p>
            
            <div class="key-skills fade-in delay-2">
              <div class="skill-badge" *ngFor="let skill of keySkills">
                <i [class]="skill.icon"></i>
                <span>{{ skill.name }}</span>
              </div>
            </div>
            
            <div class="hero-actions fade-in delay-3">
              <a href="#projects" class="btn btn-primary btn-lg">
                <i class="fas fa-rocket"></i>
                View Projects
              </a>
              <a href="#contact" class="btn btn-secondary btn-lg">
                <i class="fas fa-envelope"></i>
                Contact Me
              </a>
            </div>
            
            <div class="tech-showcase fade-in delay-4">
              <span *ngFor="let tech of mainTechs" class="tag">
                <i [class]="tech.icon"></i>
                {{ tech.name }}
              </span>
            </div>
          </div>
          
          <div class="hero-visual fade-in-right delay-1">
            <div class="developer-illustration">
              <div class="illustration-container">
                <!-- Developer Avatar SVG -->
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="developer-svg">
                  <defs>
                    <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#fdbcb4"/>
                      <stop offset="100%" style="stop-color:#ea9085"/>
                    </linearGradient>
                    <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#2c1810"/>
                      <stop offset="100%" style="stop-color:#1a0e08"/>
                    </linearGradient>
                    <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#00838f"/>
                      <stop offset="100%" style="stop-color:#005662"/>
                    </linearGradient>
                  </defs>
                  
                  <!-- Background circle -->
                  <circle cx="200" cy="200" r="190" fill="none" stroke="url(#shirtGradient)" stroke-width="2" opacity="0.3"/>
                  
                  <!-- Developer character -->
                  <g transform="translate(200, 200)">
                    <!-- Body -->
                    <ellipse cx="0" cy="50" rx="60" ry="80" fill="url(#shirtGradient)"/>
                    
                    <!-- Laptop -->
                    <g transform="translate(0, 20)">
                      <rect x="-40" y="0" width="80" height="50" rx="4" fill="#2d3748"/>
                      <rect x="-35" y="-35" width="70" height="45" rx="3" fill="#1a1a1a"/>
                      <rect x="-32" y="-32" width="64" height="39" rx="2" fill="#0f4c75"/>
                      
                      <!-- Code on screen -->
                      <text x="-28" y="-20" font-family="monospace" font-size="6" fill="#26a69a">const dev =</text>
                      <text x="-28" y="-12" font-family="monospace" font-size="6" fill="#00bcd4">  skilled;</text>
                      <text x="-28" y="-4" font-family="monospace" font-size="6" fill="#ff9800">return dev;</text>
                    </g>
                    
                    <!-- Arms -->
                    <ellipse cx="-45" cy="20" rx="15" ry="40" fill="url(#skinGradient)" transform="rotate(-20)"/>
                    <ellipse cx="45" cy="20" rx="15" ry="40" fill="url(#skinGradient)" transform="rotate(20)"/>
                    
                    <!-- Hands -->
                    <circle cx="-25" cy="35" r="8" fill="url(#skinGradient)"/>
                    <circle cx="25" cy="35" r="8" fill="url(#skinGradient)"/>
                    
                    <!-- Head -->
                    <circle cx="0" cy="-40" r="35" fill="url(#skinGradient)"/>
                    
                    <!-- Hair -->
                    <path d="M -30 -65 Q 0 -75 30 -65 Q 35 -45 25 -25 Q 0 -35 -25 -25 Q -35 -45 -30 -65 Z" fill="url(#hairGradient)"/>
                    
                    <!-- Eyes -->
                    <circle cx="-12" cy="-45" r="3" fill="#2d3748"/>
                    <circle cx="12" cy="-45" r="3" fill="#2d3748"/>
                    <circle cx="-11" cy="-46" r="1" fill="white"/>
                    <circle cx="13" cy="-46" r="1" fill="white"/>
                    
                    <!-- Glasses -->
                    <circle cx="-12" cy="-45" r="12" fill="none" stroke="#2d3748" stroke-width="2"/>
                    <circle cx="12" cy="-45" r="12" fill="none" stroke="#2d3748" stroke-width="2"/>
                    <line x1="0" y1="-45" x2="0" y2="-45" stroke="#2d3748" stroke-width="2"/>
                    
                    <!-- Mouth -->
                    <path d="M -8 -28 Q 0 -24 8 -28" stroke="#d4756b" stroke-width="2" fill="none" stroke-linecap="round"/>
                  </g>
                  
                  <!-- Floating elements -->
                  <g class="floating-elements" opacity="0.6">
                    <circle cx="70" cy="70" r="15" fill="#26a69a">
                      <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="70" y="75" text-anchor="middle" font-size="12" fill="white">C#</text>
                    
                    <circle cx="330" cy="100" r="15" fill="#00838f">
                      <animate attributeName="r" values="15;18;15" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <text x="330" y="105" text-anchor="middle" font-size="10" fill="white">.NET</text>
                    
                    <circle cx="80" cy="330" r="15" fill="#ff9800">
                      <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <text x="80" y="335" text-anchor="middle" font-size="9" fill="white">Azure</text>
                    
                    <circle cx="320" cy="320" r="15" fill="#e91e63">
                      <animate attributeName="r" values="15;18;15" dur="2.2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="320" y="325" text-anchor="middle" font-size="8" fill="white">Angular</text>
                  </g>
                </svg>
              </div>
              
              <!-- Floating badges around the illustration -->
              <div class="floating-badges">
                <div class="floating-badge badge-1 tag tag-primary">.NET</div>
                <div class="floating-badge badge-2 tag tag-secondary">Azure</div>
                <div class="floating-badge badge-3 tag tag-accent">Angular</div>
                <div class="floating-badge badge-4 tag tag-primary">SQL</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Stats Row with unified design -->
        <div class="hero-stats fade-in delay-5">
          <div class="grid grid-4">
            <div class="stat-card card" *ngFor="let stat of stats">
              <div class="card-body text-center">
                <div class="stat-number">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll prompt -->
      <div class="scroll-prompt" (click)="scrollToNext()">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  keySkills = [
    { name: 'Full Stack Development', icon: 'fas fa-code' },
    { name: 'Azure Cloud Expert', icon: 'fas fa-cloud' },
    { name: 'Microservices Architecture', icon: 'fas fa-cogs' }
  ];
  
  mainTechs = [
    { name: '.NET 8', icon: 'fab fa-microsoft' },
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'Azure', icon: 'fas fa-cloud' },
    { name: 'SQL Server', icon: 'fas fa-database' }
  ];
  
  stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Technologies' },
    { value: '6', label: 'Major Projects' },
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
}