// app/components/experience/experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-container">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Work Experience</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="timeline">
          <!-- Timeline vertical line -->
          <div class="timeline-line"></div>
          
          <div *ngFor="let job of workExperience; let i = index" 
               class="timeline-item"
               [class.timeline-item-left]="i % 2 === 0"
               [class.timeline-item-right]="i % 2 !== 0">
            
            <!-- Timeline dot -->
            <div class="timeline-dot fade-in" [ngClass]="'delay-' + (i + 1)"></div>
            
            <!-- Timeline content -->
            <div class="timeline-content" [ngClass]="i % 2 === 0 ? 'fade-in-right' : 'fade-in-left'" [class]="'delay-' + (i + 1)">
              <div class="timeline-date">
                <span>{{job.period}}</span>
              </div>
              
              <div class="timeline-card">
                <h3>{{job.title}}</h3>
                <h4>{{job.company}} - {{job.location}}</h4>
                
                <ul class="responsibility-list">
                  <li *ngFor="let responsibility of job.responsibilities">
                    {{responsibility}}
                  </li>
                </ul>
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
  workExperience: WorkExperience[] = [
    {
      title: 'Software Developer',
      company: 'JET Health Solutions',
      location: 'Fort Lauderdale, Florida',
      period: 'Feb 2024 - Current',
      responsibilities: [
        'Architected and deployed microservices using Azure App Services and Container Instances, improving system scalability by 40%',
        'Implemented Azure DevOps pipelines for CI/CD, reducing deployment time by 35% and minimizing deployment errors',
        'Developed full-stack web applications using .NET Core, Angular, and Azure cloud services',
        'Designed and implemented RESTful APIs and SOAP services using .NET Core Web API',
        'Optimized database performance through SQL Server query tuning and implementation of efficient indexing strategies'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'JET Health Solutions',
      location: 'Fort Lauderdale, Florida',
      period: 'Aug 2023 - Dec 2023',
      responsibilities: [
        'Enhanced SQL performance by implementing advanced indexing strategies, resulting in 25% faster query response times',
        'Developed and integrated new features using Angular and .NET Core, following clean architecture principles',
        'Implemented automated testing using xUnit and Selenium, achieving 90% code coverage',
        'Gained hands-on experience with Azure cloud services, including Azure DevOps and Azure SQL Database'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'JET Health Solutions',
      location: 'Fort Lauderdale, Florida',
      period: 'May 2023 - Jul 2023',
      responsibilities: [
        'Developed and optimized SQL queries and stored procedures within C# applications',
        'Implemented data extraction utilities using Entity Framework Core and LINQ',
        'Completed comprehensive training in .NET Core, C#, Angular, and Azure cloud services',
        'Participated in Agile ceremonies and team collaboration activities'
      ]
    },
    {
      title: 'Student Assistant - Grader/Tutor',
      company: 'Florida International University',
      location: 'Florida',
      period: 'Dec 2022 - Dec 2023',
      responsibilities: [
        'Provided one-on-one tutoring in Java programming concepts and software development principles',
        'Evaluated student assignments and provided detailed feedback to enhance learning outcomes',
        'Collaborated with faculty to align tutoring materials with course objectives'
      ]
    }
  ];
}