// app/components/experience/experience.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-container">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Professional Experience</h2>
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
                
                <div class="technologies-used" *ngIf="job.technologies && job.technologies.length > 0">
                  <h5>Technologies Used:</h5>
                  <div class="tech-tags">
                    <span *ngFor="let tech of job.technologies" class="tech-tag">{{tech}}</span>
                  </div>
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
  workExperience: WorkExperience[] = [
    {
      title: 'Software Developer',
      company: 'JET Health Solutions',
      location: 'Fort Lauderdale, Florida',
      period: 'Feb 2024 - Present',
      responsibilities: [
        'Architected and developed microservices-based applications using .NET 8, C#, and Azure, implementing dependency injection and SOLID principles',
        'Developed and tested SQL code within a C# framework, creating complex stored procedures, user-defined functions, and triggers to optimize performance',
        'Designed and developed responsive web applications using C#, .NET 8, HTML5, CSS3, and Angular 17, significantly enhancing user experience',
        'Implemented SOAP and RESTful services with Web API, utilizing Azure API Management for seamless front-end integration',
        'Migrated complex SQL Server stored procedures to C# using Entity Framework Core and LINQ, improving data manipulation efficiency',
        'Configured CI/CD pipelines using Azure DevOps and Jenkins for automated builds and deployments, reducing deployment time',
        'Developed Single Page Applications (SPAs) using Angular 17 with dependency injection and reactive forms',
        'Leveraged Azure Cloud Services including App Services, Azure Functions, and Azure SQL for scalable cloud-native development',
        'Implemented containerization with Docker and Kubernetes for microservices deployment and orchestration',
        'Performed comprehensive unit testing using NUnit and integration testing with Selenium'
      ],
      technologies: ['.NET 8', 'ASP.NET Core', 'C# 11', 'SQL Server 2022', 'Entity Framework Core 7.0', 'LINQ', 'Angular 17', 'TypeScript 4.9', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Azure DevOps', 'Azure Cloud Services', 'Docker', 'Kubernetes', 'REST APIs', 'Microservices']
    },
    {
      title: 'Software Developer Intern',
      company: 'JET Health Solutions',
      location: 'Fort Lauderdale, Florida',
      period: 'Aug 2023 - Dec 2023',
      responsibilities: [
        'Enhanced SQL performance by optimizing existing queries and implementing indexing strategies, resulting in 40% improved application response times',
        'Collaborated on a team project to design and develop a microservices-based web application using Angular 16 and .NET 7',
        'Implemented new features and resolved bugs in existing applications, utilizing Agile methodologies with Scrum',
        'Completed advanced training in Azure cloud technologies and DevOps practices, gaining hands-on experience with Azure services',
        'Developed RESTful APIs using ASP.NET Core Web API and implemented proper error handling and logging mechanisms',
        'Utilized Entity Framework Core with repository pattern for efficient data access and management',
        'Engaged in code reviews and contributed to the development of internal documentation',
        'Implemented responsive design using Bootstrap 5 and CSS Grid for optimal viewing across different devices'
      ],
      technologies: ['.NET 7', 'ASP.NET Core', 'C# 10', 'SQL Server 2019', 'Azure Cloud Services', 'Entity Framework Core', 'Angular 16', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Microservices', 'REST APIs', 'Azure DevOps', 'Git']
    },
    {
      title: 'Software Developer Intern',
      company: 'JET Health Solutions',
      location: 'Fort Lauderdale, Florida',
      period: 'May 2023 - Jul 2023',
      responsibilities: [
        'Developed and tested SQL code within a C# framework, creating stored procedures, functions, and views for optimal performance',
        'Led the creation of complex stored procedures and data extraction utilities using T-SQL, enhancing system efficiency by 25%',
        'Implemented dependency injection in .NET Core applications to ensure loose coupling and better testability',
        'Achieved advanced proficiency through organizational training in Object-Oriented Programming, .NET 6, and C# best practices',
        'Participated in team meetings regularly to align on project goals and progress within the Agile framework',
        'Completed essential training on C# 10, .NET 6, Angular 15, Entity Framework Core, LINQ, and Visual Studio 2022',
        'Assisted in implementing Docker containers for development environment standardization',
        'Gained initial exposure to Azure cloud services through mentored learning sessions'
      ],
      technologies: ['C# 10', '.NET 6', 'ASP.NET Core', 'SQL Server 2019', 'T-SQL', 'Visual Studio 2022', 'Angular 15', 'TypeScript', 'LINQ', 'Entity Framework Core', 'Docker', 'Azure fundamentals']
    },
    {
      title: 'Student Assistant - Grader/Tutor',
      company: 'Florida International University',
      location: 'Florida',
      period: 'Dec 2022 - Dec 2023',
      responsibilities: [
        'Conducted tutoring sessions to clarify Java programming concepts and improve student understanding',
        'Evaluated and graded assignments, offering constructive feedback to enhance coding skills',
        'Collaborated with course instructors to align tutoring sessions with curriculum standards'
      ],
      technologies: ['Java', 'Object-Oriented Programming', 'Academic Tutoring']
    }
  ];
}