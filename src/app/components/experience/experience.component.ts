// app/components/experience/experience.component.ts - Unified Design System Applied
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'internship' | 'part-time';
  responsibilities: string[];
  keyAchievements: string[];
  technologies: string[];
  isExpanded?: boolean;
}

interface ExperienceSummary {
  icon: string;
  number: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Professional Experience</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle fade-in delay-1">
            {{ getTotalExperience() }} of hands-on software development experience building enterprise solutions
          </p>
        </div>
        
        <!-- Experience Summary Stats -->
        <div class="experience-summary fade-in delay-1">
          <div class="grid grid-4 gap-md">
            <div class="summary-card card card-sm" *ngFor="let summary of experienceSummary">
              <div class="card-body text-center">
                <div class="summary-icon">
                  <i [class]="summary.icon"></i>
                </div>
                <div class="summary-number">{{ summary.number }}</div>
                <div class="summary-label">{{ summary.label }}</div>
                <div class="summary-description">{{ summary.description }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Experience Cards Grid -->
        <div class="experience-grid fade-in delay-2">
          <div *ngFor="let job of workExperience; let i = index" 
               class="experience-card card"
               [class.expanded]="job.isExpanded"
               [class]="'fade-in delay-' + (i + 3)">
            
            <!-- Card Header - Always Visible -->
            <div class="card-header" (click)="toggleExpanded(i)">
              <div class="job-info">
                <h3 class="job-title">{{ job.title }}</h3>
                <h4 class="company-info">{{ job.company }}</h4>
                <div class="job-meta">
                  <span class="job-period tag tag-primary">{{ job.period }}</span>
                  <span class="job-type tag" [class]="getJobTypeClass(job.type)">{{ getJobTypeLabel(job.type) }}</span>
                </div>
              </div>
              <div class="expand-control">
                <button class="expand-btn btn-icon" 
                        [attr.aria-expanded]="job.isExpanded"
                        [attr.aria-label]="job.isExpanded ? 'Collapse details' : 'Expand details'">
                  <i class="fas fa-chevron-right" 
                     [class.expanded]="job.isExpanded"></i>
                </button>
              </div>
            </div>
            
            <!-- Expandable Content -->
            <div class="card-content" [class.expanded]="job.isExpanded">
              <div class="content-wrapper">
                <div class="experience-details">
                  <!-- Key Achievements -->
                  <div class="achievements-section">
                    <h5 class="subsection-title">
                      <i class="fas fa-star"></i>
                      Key Achievements
                    </h5>
                    <ul class="achievements-list">
                      <li *ngFor="let achievement of job.keyAchievements">
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Technologies -->
                  <div class="technologies-section">
                    <h5 class="subsection-title">
                      <i class="fas fa-code"></i>
                      Technologies Used
                    </h5>
                    <div class="tech-grid">
                      <span *ngFor="let tech of job.technologies.slice(0, 8)" 
                            class="tag tech-tag">
                        {{ tech }}
                      </span>
                      <span *ngIf="job.technologies.length > 8" 
                            class="tag tech-tag tag-accent">
                        +{{ job.technologies.length - 8 }} more
                      </span>
                    </div>
                  </div>
                  
                  <!-- Full Responsibilities (only when expanded) -->
                  <div class="responsibilities-section" *ngIf="job.isExpanded">
                    <h5 class="subsection-title">
                      <i class="fas fa-tasks"></i>
                      All Responsibilities
                    </h5>
                    <ul class="responsibilities-list">
                      <li *ngFor="let responsibility of job.responsibilities">
                        {{ responsibility }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Career Progression Timeline -->
        <div class="career-timeline fade-in delay-6">
          <h3 class="timeline-title">Career Progression</h3>
          <div class="timeline-container">
            <div class="timeline-line"></div>
            <div class="timeline-items">
              <div *ngFor="let job of workExperience; let i = index" 
                   class="timeline-item"
                   [class]="'fade-in delay-' + (i + 7)">
                <div class="timeline-dot"></div>
                <div class="timeline-content card card-sm">
                  <div class="card-body">
                    <div class="timeline-period">{{ job.period }}</div>
                    <h4 class="timeline-role">{{ job.title }}</h4>
                    <p class="timeline-company">{{ job.company }}</p>
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
      type: 'full-time',
      keyAchievements: [
        'Architected microservices-based applications using .NET 8 and Azure with SOLID principles',
        'Improved application performance by 40% through SQL optimization and indexing strategies',
        'Implemented CI/CD pipelines with 99.9% success rate using Azure DevOps and Jenkins'
      ],
      responsibilities: [
        'Architected and developed microservices-based applications using .NET 8, C#, and Azure, implementing dependency injection and SOLID principles',
        'Enhanced SQL performance by optimizing existing queries and implementing indexing strategies, resulting in 40% improved application response times',
        'Designed and developed responsive web applications using C#, .NET 8, HTML5, CSS3, and Angular 17, significantly enhancing user experience',
        'Implemented SOAP and RESTful services with Web API, utilizing Azure API Management for seamless front-end integration',
        'Migrated complex SQL Server stored procedures to C# using Entity Framework Core and LINQ, improving data manipulation efficiency',
        'Configured CI/CD pipelines using Azure DevOps and Jenkins for automated builds and deployments, reducing deployment time',
        'Developed Single Page Applications (SPAs) using Angular 17 with dependency injection and reactive forms',
        'Leveraged Azure Cloud Services including App Services, Azure Functions, and Azure SQL for scalable cloud-native development',
        'Implemented containerization with Docker and Kubernetes for microservices deployment and orchestration',
        'Performed comprehensive unit testing using NUnit and integration testing with Selenium'
      ],
      technologies: ['.NET 8', 'ASP.NET Core', 'C# 11', 'SQL Server 2022', 'Entity Framework Core 7.0', 'LINQ', 'Angular 17', 'TypeScript 4.9', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Azure DevOps', 'Azure Cloud Services', 'Docker', 'Kubernetes', 'REST APIs', 'Microservices'],
      isExpanded: false
    },
    {
      title: 'Software Developer Intern',
      company: 'JET Health Solutions',
      location: 'Fort Lauderdale, Florida',
      period: 'Aug 2023 - Dec 2023',
      type: 'internship',
      keyAchievements: [
        'Enhanced SQL performance resulting in 40% improved application response times',
        'Collaborated on microservices-based web application using Angular 16 and .NET 7',
        'Implemented responsive design using Bootstrap 5 and CSS Grid for cross-device compatibility'
      ],
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
      technologies: ['.NET 7', 'ASP.NET Core', 'C# 10', 'SQL Server 2019', 'Azure Cloud Services', 'Entity Framework Core', 'Angular 16', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Microservices', 'REST APIs', 'Azure DevOps', 'Git'],
      isExpanded: false
    },
    {
      title: 'Software Developer Intern',
      company: 'JET Health Solutions',
      location: 'Fort Lauderdale, Florida',
      period: 'May 2023 - Jul 2023',
      type: 'internship',
      keyAchievements: [
        'Enhanced system efficiency by 25% through complex stored procedures and data extraction utilities',
        'Implemented dependency injection in .NET Core applications for better testability',
        'Completed comprehensive training in OOP, .NET 6, and C# best practices'
      ],
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
      technologies: ['C# 10', '.NET 6', 'ASP.NET Core', 'SQL Server 2019', 'T-SQL', 'Visual Studio 2022', 'Angular 15', 'TypeScript', 'LINQ', 'Entity Framework Core', 'Docker', 'Azure fundamentals'],
      isExpanded: false
    },
    {
      title: 'Student Assistant - Grader/Tutor',
      company: 'Florida International University',
      location: 'Florida',
      period: 'Dec 2022 - Dec 2023',
      type: 'part-time',
      keyAchievements: [
        'Conducted effective tutoring sessions improving student understanding of Java concepts',
        'Provided constructive feedback through assignment evaluation and grading',
        'Collaborated with instructors to align tutoring with curriculum standards'
      ],
      responsibilities: [
        'Conducted tutoring sessions to clarify Java programming concepts and improve student understanding',
        'Evaluated and graded assignments, offering constructive feedback to enhance coding skills',
        'Collaborated with course instructors to align tutoring sessions with curriculum standards'
      ],
      technologies: ['Java', 'Object-Oriented Programming', 'Academic Tutoring'],
      isExpanded: false
    }
  ];
  
  experienceSummary: ExperienceSummary[] = [
    {
      icon: 'fas fa-calendar-alt',
      number: '2+',
      label: 'Years Experience',
      description: 'Professional development'
    },
    {
      icon: 'fas fa-building',
      number: '2',
      label: 'Organizations',
      description: 'Tech & Education'
    },
    {
      icon: 'fas fa-project-diagram',
      number: '6+',
      label: 'Major Projects',
      description: 'Enterprise solutions'
    },
    {
      icon: 'fas fa-code',
      number: '15+',
      label: 'Technologies',
      description: 'Modern tech stack'
    }
  ];
  
  toggleExpanded(index: number): void {
    // Close all other cards first for cleaner UX
    this.workExperience.forEach((job, i) => {
      if (i !== index) {
        job.isExpanded = false;
      }
    });
    
    // Toggle the clicked card
    this.workExperience[index].isExpanded = !this.workExperience[index].isExpanded;
  }
  
  getJobTypeClass(type: string): string {
    const typeClasses = {
      'full-time': 'tag-primary',
      'internship': 'tag-secondary',
      'part-time': 'tag-accent'
    };
    return typeClasses[type as keyof typeof typeClasses] || 'tag-secondary';
  }
  
  getJobTypeLabel(type: string): string {
    const typeLabels = {
      'full-time': 'Full-time',
      'internship': 'Internship',
      'part-time': 'Part-time'
    };
    return typeLabels[type as keyof typeof typeLabels] || type;
  }
  
  getTotalExperience(): string {
    return '2+ years';
  }
}