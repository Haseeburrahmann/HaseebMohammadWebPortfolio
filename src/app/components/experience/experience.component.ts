// app/components/experience/experience.component.ts - Clean Professional Design
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Experience</h2>
          <p class="section-subtitle fade-in delay-1">
            Professional journey building scalable software solutions
          </p>
        </div>
        
        <div class="experience-content">
          <div class="experience-stats fade-in delay-2">
            <div class="stat-item">
              <div class="stat-number">2+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">40%</div>
              <div class="stat-label">Performance Boost</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">CI/CD Success</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">6+</div>
              <div class="stat-label">Major Projects</div>
            </div>
          </div>
          
          <div class="timeline">
            <div *ngFor="let job of experiences; let i = index" 
                 class="timeline-item"
                 [class]="'fade-in delay-' + (i + 3)">
              
              <div class="timeline-marker">
                <div class="marker-dot"></div>
                <div class="marker-line" *ngIf="i < experiences.length - 1"></div>
              </div>
              
              <div class="timeline-content">
                <div class="job-header">
                  <div class="job-info">
                    <h3 class="job-title">{{ job.title }}</h3>
                    <h4 class="company-name">{{ job.company }}</h4>
                  </div>
                  <div class="job-meta">
                    <span class="job-period">{{ job.period }}</span>
                    <span class="job-type">{{ job.type }}</span>
                  </div>
                </div>
                
                <div class="achievements">
                  <ul class="achievement-list">
                    <li *ngFor="let achievement of job.achievements">
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                
                <div class="technologies">
                  <span *ngFor="let tech of job.technologies.slice(0, 6)" class="tech-tag">
                    {{ tech }}
                  </span>
                  <span *ngIf="job.technologies.length > 6" class="tech-tag more">
                    +{{ job.technologies.length - 6 }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      title: 'Software Developer',
      company: 'JET Health Solutions',
      period: 'Feb 2024 - Present',
      type: 'Full-time',
      achievements: [
        'Architected microservices with .NET 8 and Azure using SOLID principles',
        'Improved application performance by 40% through SQL optimization',
        'Implemented CI/CD pipelines with 99.9% success rate using Azure DevOps'
      ],
      technologies: ['.NET 8', 'Azure', 'Angular 17', 'SQL Server', 'Docker', 'Kubernetes', 'Entity Framework']
    },
    {
      title: 'Software Developer Intern',
      company: 'JET Health Solutions',
      period: 'Aug 2023 - Dec 2023',
      type: 'Internship',
      achievements: [
        'Enhanced SQL performance resulting in 40% improved response times',
        'Collaborated on microservices application using Angular 16 and .NET 7',
        'Implemented responsive design with Bootstrap 5 for cross-device compatibility'
      ],
      technologies: ['.NET 7', 'Angular 16', 'SQL Server', 'Azure', 'Bootstrap 5', 'REST APIs']
    },
    {
      title: 'Software Developer Intern',
      company: 'JET Health Solutions',
      period: 'May 2023 - Jul 2023',
      type: 'Internship',
      achievements: [
        'Enhanced system efficiency by 25% through complex stored procedures',
        'Implemented dependency injection in .NET Core applications',
        'Completed comprehensive training in OOP, .NET 6, and C# best practices'
      ],
      technologies: ['C# 10', '.NET 6', 'T-SQL', 'Angular 15', 'Entity Framework', 'Visual Studio']
    }
  ];
}