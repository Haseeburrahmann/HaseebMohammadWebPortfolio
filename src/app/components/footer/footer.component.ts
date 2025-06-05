// app/components/footer/footer.component.ts - Clean Professional Design
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-main">
            <div class="footer-brand">
              <div class="brand-logo">
                <span class="brand-text">Haseeb Mohammad</span>
              </div>
              <p class="brand-tagline">
                Software Developer specializing in .NET, Azure, and modern web technologies.
                Building scalable solutions that make a difference.
              </p>
            </div>
            
            <div class="footer-stats">
              <div class="stat-item">
                <span class="stat-number">2+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">15+</span>
                <span class="stat-label">Technologies</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">6+</span>
                <span class="stat-label">Projects</span>
              </div>
            </div>
          </div>
          
          <div class="footer-links">
            <div class="links-section">
              <h4>Quick Links</h4>
              <ul>
                <li *ngFor="let link of quickLinks">
                  <a [href]="link.href" (click)="smoothScroll($event, link.href)">
                    <i *ngIf="link.icon" [class]="link.icon"></i>
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>
            
            <div class="links-section">
              <h4>Technologies</h4>
              <div class="tech-tags">
                <span *ngFor="let tech of technologies" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="links-section">
              <h4>Connect</h4>
              <div class="social-links">
                <a *ngFor="let social of socialLinks" 
                   [href]="social.url" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="social-link"
                   [style.background]="social.color"
                   [attr.aria-label]="'Follow me on ' + social.platform">
                  <i [class]="social.icon"></i>
                </a>
              </div>
              
              <div class="contact-info">
                <a href="mailto:mohd.haseeb.4201@gmail.com" class="contact-link">
                  <i class="fas fa-envelope"></i>
                  mohd.haseeb.4201#&64gmail.com
                </a>
                <a href="tel:+13054278756" class="contact-link">
                  <i class="fas fa-phone"></i>
                  +1 305-427-8756
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">
              &copy; {{ currentYear }} Haseeb Ur Rahman Mohammad. All rights reserved.
            </p>
            <p class="built-with">
              Built with <i class="fas fa-heart"></i> using Angular & TypeScript
            </p>
          </div>
        </div>
      </div>
      
      <!-- Scroll to Top Button -->
      <div class="scroll-to-top" [class.visible]="showScrollTop" (click)="scrollToTop()">
        <i class="fas fa-chevron-up"></i>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  showScrollTop = false;
  
  quickLinks: FooterLink[] = [
    { label: 'Home', href: '#home', icon: 'fas fa-home' },
    { label: 'About', href: '#about', icon: 'fas fa-user' },
    { label: 'Experience', href: '#experience', icon: 'fas fa-briefcase' },
    { label: 'Skills', href: '#skills', icon: 'fas fa-code' },
    { label: 'Projects', href: '#projects', icon: 'fas fa-project-diagram' },
    { label: 'Contact', href: '#contact', icon: 'fas fa-envelope' }
  ];
  
  technologies = [
    '.NET 8', 'C#', 'Angular', 'TypeScript', 'Azure', 'SQL Server'
  ];
  
  socialLinks: SocialLink[] = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/haseeb-ur-rahman-mohammad-5274781b0',
      icon: 'fab fa-linkedin-in',
      color: 'linear-gradient(135deg, #0077b5, #00a0dc)'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/Haseeburrahmann',
      icon: 'fab fa-github',
      color: 'linear-gradient(135deg, #333, #24292e)'
    },
    {
      platform: 'Email',
      url: 'mailto:mohd.haseeb.4201@gmail.com',
      icon: 'fas fa-envelope',
      color: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
    }
  ];
  
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 400;
  }
  
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  smoothScroll(event: Event, href: string): void {
    if (href.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}