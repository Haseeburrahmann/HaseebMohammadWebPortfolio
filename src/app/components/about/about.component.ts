// app/components/about/about.component.ts - Unified Design System Applied
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Achievement {
  icon: string;
  number: string;
  label: string;
  color?: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  gpa: string;
  period: string;
  highlights?: string[];
}

interface ContactMethod {
  icon: string;
  label: string;
  value: string;
  link?: string;
  type: 'email' | 'phone' | 'location' | 'social';
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">About Me</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle fade-in delay-1">
            Passionate software developer crafting innovative solutions with modern technologies
          </p>
        </div>
        
        <div class="about-content">
          <div class="about-visual fade-in-left delay-1">
            <div class="workspace-card card card-lg">
              <div class="workspace-illustration">
                <!-- Professional workspace illustration -->
                <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" class="workspace-svg">
                  <defs>
                    <linearGradient id="deskGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#8d6e63"/>
                      <stop offset="100%" style="stop-color:#5d4037"/>
                    </linearGradient>
                    <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#263238"/>
                      <stop offset="100%" style="stop-color:#37474f"/>
                    </linearGradient>
                    <linearGradient id="plantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#4caf50"/>
                      <stop offset="100%" style="stop-color:#2e7d32"/>
                    </linearGradient>
                  </defs>
                  
                  <!-- Background -->
                  <rect x="0" y="0" width="400" height="300" fill="#f5f5f5"/>
                  
                  <!-- Desk -->
                  <ellipse cx="200" cy="280" rx="180" ry="25" fill="url(#deskGradient)"/>
                  <rect x="20" y="250" width="360" height="30" rx="5" fill="url(#deskGradient)"/>
                  
                  <!-- Monitor -->
                  <rect x="120" y="150" width="160" height="100" rx="8" fill="#263238"/>
                  <rect x="130" y="160" width="140" height="80" rx="4" fill="#0d47a1"/>
                  
                  <!-- Code on screen -->
                  <text x="135" y="175" font-family="monospace" font-size="8" fill="#26a69a">public class Developer</text>
                  <text x="135" y="188" font-family="monospace" font-size="8" fill="#ff9800">{{ '{' }}</text>
                  <text x="145" y="201" font-family="monospace" font-size="8" fill="#00bcd4">  string Name = "Haseeb";</text>
                  <text x="145" y="214" font-family="monospace" font-size="8" fill="#e91e63">  int Experience = 2;</text>
                  <text x="145" y="227" font-family="monospace" font-size="8" fill="#9c27b0">  bool Passionate = true;</text>
                  <text x="135" y="240" font-family="monospace" font-size="8" fill="#ff9800">{{ '}' }}</text>
                  
                  <!-- Monitor stand -->
                  <rect x="185" y="250" width="30" height="15" rx="3" fill="#455a64"/>
                  <rect x="170" y="260" width="60" height="8" rx="4" fill="#455a64"/>
                  
                  <!-- Coffee cup -->
                  <rect x="300" y="240" width="25" height="30" rx="3" fill="#d7ccc8"/>
                  <rect x="302" y="242" width="21" height="26" rx="2" fill="#6d4c41"/>
                  <ellipse cx="312" cy="242" rx="10" ry="3" fill="#3e2723"/>
                  
                  <!-- Coffee steam -->
                  <path d="M308 235 Q308 230 310 235 Q310 230 312 235 Q312 230 314 235" 
                        stroke="#90a4ae" stroke-width="1" fill="none" opacity="0.7">
                    <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2s" repeatCount="indefinite"/>
                  </path>
                  
                  <!-- Plant -->
                  <ellipse cx="350" cy="265" rx="15" ry="8" fill="#8d6e63"/>
                  <rect x="347" y="250" width="6" height="15" fill="#795548"/>
                  <ellipse cx="340" cy="245" rx="12" ry="8" fill="url(#plantGradient)"/>
                  <ellipse cx="355" cy="240" rx="10" ry="6" fill="url(#plantGradient)"/>
                  <ellipse cx="350" cy="250" rx="8" ry="5" fill="url(#plantGradient)"/>
                  
                  <!-- Books -->
                  <rect x="40" y="230" width="15" height="25" fill="#1976d2"/>
                  <rect x="56" y="235" width="12" height="20" fill="#d32f2f"/>
                  <rect x="69" y="232" width="14" height="23" fill="#388e3c"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div class="about-info fade-in-right delay-1">
            <div class="intro-card card">
              <div class="card-body">
                <h3 class="about-title">Haseeb Ur Rahman Mohammad</h3>
                <h4 class="about-role">Software Developer</h4>
                
                <div class="bio-content">
                  <p>I'm a passionate <strong>Software Developer</strong> with <strong>2+ years of professional experience</strong> in developing 
                  Web Applications, Web Services, Microservices, and implementing robust enterprise solutions 
                  using <strong>.NET 6/7/8</strong>, <strong>Azure Cloud Services</strong>, and modern web technologies.</p>
                  
                  <p>My expertise includes architecting <strong>microservices-based applications</strong>, implementing <strong>CI/CD 
                  pipelines</strong> with Azure DevOps, and developing responsive <strong>Single Page Applications</strong> using Angular. 
                  I have strong experience in <strong>SQL Server database development</strong> and <strong>cloud-native application 
                  development</strong> with Azure services.</p>
                  
                  <p>I am passionate about creating <strong>efficient, scalable solutions</strong> and collaborating with 
                  cross-functional teams using <strong>Agile methodologies</strong> to deliver high-quality software 
                  that solves complex business problems.</p>
                </div>
              </div>
            </div>
            
            <!-- Key achievements using unified cards -->
            <div class="achievements-section fade-in delay-2">
              <h4 class="section-title">Key Achievements</h4>
              <div class="grid grid-2 gap-md">
                <div class="achievement-card card card-sm" *ngFor="let achievement of achievements">
                  <div class="card-body">
                    <div class="achievement-content">
                      <div class="achievement-icon">
                        <i [class]="achievement.icon"></i>
                      </div>
                      <div class="achievement-details">
                        <div class="achievement-number">{{ achievement.number }}</div>
                        <div class="achievement-label">{{ achievement.label }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Education using unified cards -->
            <div class="education-section fade-in delay-3">
              <h4 class="section-title">Education</h4>
              <div class="education-card card" *ngFor="let education of educationHistory">
                <div class="card-body">
                  <div class="education-header">
                    <div class="education-main">
                      <h5 class="education-degree">{{ education.degree }}</h5>
                      <p class="education-institution">
                        <strong>{{ education.institution }}</strong> - {{ education.location }}
                      </p>
                    </div>
                    <div class="education-meta">
                      <span class="education-period tag tag-primary">{{ education.period }}</span>
                      <div class="education-gpa">
                        <strong>GPA: {{ education.gpa }}</strong>
                      </div>
                    </div>
                  </div>
                  
                  <div class="education-highlights" *ngIf="education.highlights">
                    <ul>
                      <li *ngFor="let highlight of education.highlights">{{ highlight }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Contact information using unified design -->
            <div class="contact-section fade-in delay-4">
              <h4 class="section-title">Get In Touch</h4>
              <div class="contact-methods">
                <div class="contact-method" *ngFor="let contact of contactMethods">
                  <div class="contact-icon">
                    <i [class]="contact.icon"></i>
                  </div>
                  <div class="contact-details">
                    <span class="contact-label">{{ contact.label }}</span>
                    <a *ngIf="contact.link" 
                       [href]="contact.link" 
                       [target]="contact.type === 'social' ? '_blank' : ''"
                       [rel]="contact.type === 'social' ? 'noopener noreferrer' : ''"
                       class="contact-value">
                      {{ contact.value }}
                    </a>
                    <span *ngIf="!contact.link" class="contact-value">{{ contact.value }}</span>
                  </div>
                </div>
              </div>
              
              <div class="cta-actions">
                <a href="#contact" class="btn btn-primary">
                  <i class="fas fa-envelope"></i>
                  Get In Touch
                </a>
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                  <i class="fas fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  achievements: Achievement[] = [
    {
      icon: 'fas fa-chart-line',
      number: '40%',
      label: 'Performance Improvement',
      color: 'success'
    },
    {
      icon: 'fas fa-rocket',
      number: '99.9%',
      label: 'CI/CD Success Rate',
      color: 'primary'
    },
    {
      icon: 'fas fa-code-branch',
      number: '6+',
      label: 'Major Projects',
      color: 'secondary'
    },
    {
      icon: 'fas fa-graduation-cap',
      number: '3.75',
      label: 'GPA Masters',
      color: 'accent'
    }
  ];
  
  educationHistory: EducationItem[] = [
    {
      degree: 'Master of Science: Information Technology',
      institution: 'Florida International University',
      location: 'Florida',
      gpa: '3.75/4.0',
      period: 'Aug 2022 - Dec 2023',
      highlights: [
        'Specialized in Software Engineering and Database Systems',
        'Completed advanced coursework in Cloud Computing and DevOps',
        'Participated in collaborative software development projects'
      ]
    }
  ];
  
  contactMethods: ContactMethod[] = [
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+1 305-427-8756',
      link: 'tel:+13054278756',
      type: 'phone'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'mohd.haseeb.4201@gmail.com',
      link: 'mailto:mohd.haseeb.4201@gmail.com',
      type: 'email'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Fort Lauderdale, Florida',
      type: 'location'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/haseeb-ur-rahman-mohammad-5274781b0',
      type: 'social'
    }
  ];
}