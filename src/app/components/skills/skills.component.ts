// app/components/skills/skills.component.ts
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-10 for skill proficiency
  description?: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-container">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Technical Skills</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="skills-tabs">
          <div class="tabs-navigation fade-in delay-1">
            <button 
              *ngFor="let category of skillCategories; let i = index" 
              [class.active]="activeTab === i"
              (click)="setActiveTab(i)"
              class="tab-button"
              [attr.aria-selected]="activeTab === i"
              [attr.aria-controls]="'tab-panel-' + i"
              role="tab"
            >
              <i [class]="category.icon" aria-hidden="true"></i>
              <span>{{category.name}}</span>
            </button>
          </div>
          
          <div class="tabs-content" role="tabpanel">
            <div *ngFor="let category of skillCategories; let i = index" 
                 class="tab-panel"
                 [class.active]="activeTab === i"
                 [id]="'tab-panel-' + i"
                 [attr.aria-hidden]="activeTab !== i">
              
              <div class="skills-grid">
                <div *ngFor="let skill of category.skills; let j = index" 
                     class="skill-card fade-in" 
                     [class]="'delay-' + (j % 5 + 1)">
                  <div class="skill-header">
                    <span class="skill-name">{{skill.name}}</span>
                    <span class="skill-level">{{skill.level * 10}}%</span>
                  </div>
                  
                  <div class="skill-bar-container" role="progressbar" 
                       [attr.aria-valuenow]="skill.level * 10" 
                       aria-valuemin="0" 
                       aria-valuemax="100"
                       [attr.aria-label]="skill.name + ' proficiency: ' + skill.level * 10 + '%'">
                    <div class="skill-bar" [style.--width.%]="skill.level * 10"></div>
                  </div>
                  
                  <div class="skill-badges">
                    <span *ngIf="skill.level >= 9" class="skill-badge expert">Expert</span>
                    <span *ngIf="skill.level >= 7 && skill.level < 9" class="skill-badge advanced">Advanced</span>
                    <span *ngIf="skill.level >= 5 && skill.level < 7" class="skill-badge intermediate">Intermediate</span>
                    <span *ngIf="skill.level < 5" class="skill-badge beginner">Beginner</span>
                  </div>
                  
                  <p *ngIf="skill.description" class="skill-description">{{skill.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  activeTab = 0;
  private debounceTimeout?: number;
  
  skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      icon: 'fas fa-code',
      skills: [
        { name: 'C# 11/10', level: 9, description: 'Primary language for enterprise development' },
        { name: 'JavaScript ES6+', level: 8, description: 'Modern frontend and backend development' },
        { name: 'TypeScript 4.9', level: 8, description: 'Type-safe JavaScript for large applications' },
        { name: 'Python', level: 7, description: 'Data analysis and machine learning projects' },
        { name: 'Java', level: 7, description: 'Object-oriented programming and tutoring' },
        { name: 'SQL/T-SQL', level: 9, description: 'Complex queries and database optimization' },
        { name: 'HTML5', level: 9, description: 'Semantic markup and web standards' },
        { name: 'CSS3', level: 8, description: 'Responsive design and animations' }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      icon: 'fas fa-layer-group',
      skills: [
        { name: '.NET 8/7/6', level: 9, description: 'Cross-platform enterprise applications' },
        { name: 'ASP.NET Core', level: 9, description: 'High-performance web APIs and applications' },
        { name: 'Entity Framework Core 7.0', level: 9, description: 'ORM and data access patterns' },
        { name: 'Angular 17/16/15', level: 8, description: 'Single Page Applications with reactive programming' },
        { name: 'React', level: 7, description: 'Component-based user interfaces' },
        { name: 'Bootstrap 5', level: 8, description: 'Responsive UI framework' },
        { name: 'jQuery', level: 8, description: 'DOM manipulation and AJAX' },
        { name: 'SASS', level: 7, description: 'CSS preprocessing and organization' },
        { name: 'Material Design', level: 7, description: 'Google\'s design system implementation' },
        { name: 'Tailwind CSS', level: 6, description: 'Utility-first CSS framework' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'Azure DevOps', level: 9, description: 'CI/CD pipelines and project management' },
        { name: 'Azure App Services', level: 9, description: 'Scalable web application hosting' },
        { name: 'Azure Functions', level: 8, description: 'Serverless computing solutions' },
        { name: 'Azure SQL', level: 8, description: 'Cloud database management' },
        { name: 'Azure API Management', level: 8, description: 'API gateway and management' },
        { name: 'Azure Storage', level: 7, description: 'Cloud storage solutions' },
        { name: 'Azure Kubernetes Service', level: 7, description: 'Container orchestration' },
        { name: 'Docker', level: 8, description: 'Containerization and deployment' },
        { name: 'Kubernetes', level: 7, description: 'Container orchestration and scaling' },
        { name: 'Jenkins', level: 7, description: 'Continuous integration and deployment' },
        { name: 'GitHub Actions', level: 7, description: 'Automated workflows and CI/CD' }
      ]
    },
    {
      name: 'Databases & Data',
      icon: 'fas fa-database',
      skills: [
        { name: 'SQL Server 2019/2022', level: 9, description: 'Complex stored procedures and optimization' },
        { name: 'Azure SQL Database', level: 9, description: 'Cloud database solutions' },
        { name: 'LINQ', level: 9, description: 'Language integrated queries' },
        { name: 'ADO.NET', level: 8, description: 'Direct database connectivity' },
        { name: 'T-SQL', level: 9, description: 'Advanced database programming' },
        { name: 'Performance Tuning', level: 8, description: 'Query optimization and indexing' }
      ]
    },
    {
      name: 'Architecture & Patterns',
      icon: 'fas fa-sitemap',
      skills: [
        { name: 'Microservices', level: 9, description: 'Distributed system architecture' },
        { name: 'REST APIs', level: 9, description: 'RESTful web service design' },
        { name: 'MVC Pattern', level: 9, description: 'Model-View-Controller architecture' },
        { name: 'Repository Pattern', level: 8, description: 'Data access abstraction' },
        { name: 'Dependency Injection', level: 9, description: 'Inversion of control pattern' },
        { name: 'SOLID Principles', level: 9, description: 'Object-oriented design principles' },
        { name: 'Factory Pattern', level: 8, description: 'Object creation patterns' },
        { name: 'Singleton Pattern', level: 8, description: 'Single instance patterns' },
        { name: 'N-Tier Architecture', level: 8, description: 'Multi-layered application design' }
      ]
    },
    {
      name: 'Testing & Tools',
      icon: 'fas fa-tools',
      skills: [
        { name: 'NUnit', level: 8, description: 'Unit testing framework for .NET' },
        { name: 'MSTest', level: 8, description: 'Microsoft testing framework' },
        { name: 'Selenium', level: 7, description: 'Automated web application testing' },
        { name: 'JMeter', level: 7, description: 'Performance and load testing' },
        { name: 'Postman', level: 8, description: 'API testing and documentation' },
        { name: 'Visual Studio 2022', level: 9, description: 'Primary IDE for .NET development' },
        { name: 'VS Code', level: 8, description: 'Lightweight development environment' },
        { name: 'Git', level: 9, description: 'Version control and collaboration' },
        { name: 'Agile/Scrum', level: 9, description: 'Project management methodologies' }
      ]
    }
  ];
  
  setActiveTab(index: number): void {
    this.activeTab = index;
    
    // Debounced skill bar animation
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    
    this.debounceTimeout = window.setTimeout(() => {
      this.initializeSkillBars();
    }, 50);
  }
  
  ngAfterViewInit(): void {
    // Initialize skill bars after view is initialized
    setTimeout(() => {
      this.initializeSkillBars();
    }, 100);
  }
  
  ngOnDestroy(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
  }
  
  private initializeSkillBars(): void {
    try {
      // Force a repaint of skill bars by accessing their offsetHeight
      const skillBars = document.querySelectorAll('.skill-bar');
      skillBars.forEach(bar => {
        const htmlElement = bar as HTMLElement;
        // Force reflow
        void htmlElement.offsetHeight;
      });
    } catch (error) {
      console.warn('Error initializing skill bars:', error);
    }
  }
}