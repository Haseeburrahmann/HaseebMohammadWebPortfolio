// app/components/footer/footer.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <svg class="footer-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,85.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="currentColor"></path>
      </svg>
      
      <div class="footer-top">
        <div class="container">
          <div class="footer-content">
            <div class="footer-info fade-in">
            <div class="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 50"
              width="120"
              height="30"
            >
              <!-- Definitions -->
              <defs>
                <linearGradient
                  id="compactLogoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#00838f" />
                  <stop offset="100%" stop-color="#26a69a" />
                </linearGradient>
              </defs>

              <!-- Main Logo Group -->
              <g>
                <!-- Brackets and HM monogram -->
                <g transform="translate(5, 5)">
                  <!-- Left Bracket -->
                  <path
                    d="M5,5 L0,20 L5,35"
                    fill="none"
                    stroke="#00838f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <!-- Right Bracket -->
                  <path
                    d="M185,5 L190,20 L185,35"
                    fill="none"
                    stroke="#26a69a"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <!-- H letter -->
                  <path
                    d="M20,10 L20,30 M20,20 L35,20 M35,10 L35,30"
                    stroke="url(#compactLogoGradient)"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />

                  <!-- M letter stylized to connect with the H -->
                  <path
                    d="M40,10 L40,30 M40,10 L50,25 L60,10 M60,10 L60,30"
                    stroke="url(#compactLogoGradient)"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </g>

                <!-- Name -->
                <g transform="translate(75, 12)">
                  <!-- Haseeb -->
                  <text
                    x="0"
                    y="10"
                    font-family="'Poppins', sans-serif"
                    font-size="14"
                    font-weight="600"
                    fill="#00838f"
                  >
                    Haseeb
                  </text>

                  <!-- Mohammad -->
                  <text
                    x="0"
                    y="28"
                    font-family="'Poppins', sans-serif"
                    font-size="14"
                    font-weight="600"
                    fill="#26a69a"
                  >
                    Mohammad
                  </text>
                </g>

                <!-- Decorative dots -->
                <circle cx="70" cy="20" r="1.5" fill="#00838f">
                  <animate
                    attributeName="r"
                    values="1.5;2;1.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="70" cy="30" r="1.5" fill="#26a69a">
                  <animate
                    attributeName="r"
                    values="1.5;2;1.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </div>
              <p class="footer-tagline">
                Full Stack Software Developer specializing in .NET Core, Azure, and modern web technologies.
              </p>
              <div class="footer-contact">
                <a href="mailto:mohd.haseeb.4201@gmail.com">
                  <i class="fas fa-envelope"></i> mohd.haseeb.4201gmail.com
                </a>
                <a href="tel:+13054278756">
                  <i class="fas fa-phone-alt"></i> +1 305-427-8756
                </a>
              </div>
            </div>
            
            <div class="footer-links fade-in delay-1">
              <h3>Quick Links</h3>
              <ul>
                <li *ngFor="let item of navItems">
                  <a [href]="'#' + item.id" (click)="scrollToSection($event, item.id)">
                    <i [class]="item.icon"></i> {{item.label}}
                  </a>
                </li>
              </ul>
            </div>
            
            <div class="footer-technologies fade-in delay-2">
              <h3>My Technologies</h3>
              <div class="tech-tags">
                <span class="tech-tag" *ngFor="let tech of technologies">{{tech}}</span>
              </div>
            </div>
            
            <div class="footer-social fade-in delay-3">
              <h3>Connect With Me</h3>
              <div class="social-icons">
                <a 
                  *ngFor="let social of socialLinks" 
                  [href]="social.url" 
                  target="_blank" 
                  rel="noopener" 
                  [attr.aria-label]="social.label"
                  class="social-icon"
                >
                  <i [class]="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footer-divider"></div>
      
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2025 Haseeb Ur Rahman Mohammad. All rights reserved.</p>
          <p>Designed & Built with <i class="fas fa-heart"></i> using Angular</p>
        </div>
      </div>
      
      <div class="scroll-to-top" [class.visible]="showScrollTop">
        <a href="#home" (click)="scrollToTop($event)" aria-label="Scroll to top">
          <i class="fas fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navItems = [
    { label: 'Home', id: 'home', icon: 'fas fa-home' },
    { label: 'About', id: 'about', icon: 'fas fa-user' },
    { label: 'Experience', id: 'experience', icon: 'fas fa-briefcase' },
    { label: 'Skills', id: 'skills', icon: 'fas fa-code' },
    { label: 'Projects', id: 'projects', icon: 'fas fa-project-diagram' },
    { label: 'Contact', id: 'contact', icon: 'fas fa-envelope' }
  ];
  
  technologies = [
    'C#', '.NET Core', 'Angular', 'Azure', 'SQL Server', 'Docker',
    'Kubernetes', 'React', 'TypeScript', 'Entity Framework'
  ];
  
  socialLinks: SocialLink[] = [
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/haseeb-ur-rahman-mohammad-5274781b0', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/Haseeburrahmann', label: 'GitHub' },
  ];
  
  showScrollTop = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // Show scroll-to-top button when scrolled down 400px
    this.showScrollTop = window.scrollY > 400;
  }
  
  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}