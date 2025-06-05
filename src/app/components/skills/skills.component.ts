// app/components/skills/skills.component.ts - Unified Design System Applied
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
  color: string;
}

interface Skill {
  name: string;
  level: number; // 1-10 for skill proficiency
  experience: string; // e.g., "2+ years", "Professional"
  description?: string;
  category: 'expert' | 'advanced' | 'intermediate' | 'learning';
}

interface SkillSummary {
  icon: string;
  number: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="skills-section">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Technical Skills</h2>
          <div class="section-divider"></div>
          <p class="section-subtitle fade-in delay-1">
            Comprehensive expertise across modern development technologies and frameworks
          </p>
        </div>
        
        <!-- Skills Summary -->
        <div class="skills-summary fade-in delay-1">
          <div class="grid grid-4 gap-md">
            <div class="summary-card card card-sm" *ngFor="let summary of skillsSummary">
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
        
        <!-- Skills Categories Tabs -->
        <div class="skills-tabs fade-in delay-2">
          <div class="tabs-navigation">
            <button 
              *ngFor="let category of skillCategories; let i = index" 
              [class.active]="activeTab === i"
              (click)="setActiveTab(i)"
              class="tab-button btn"
              [class]="activeTab === i ? 'btn-primary' : 'btn-secondary'"
              type="button"
              [attr.aria-selected]="activeTab === i"
              [attr.aria-controls]="'tab-panel-' + i"
              role="tab">
              <i [class]="category.icon" aria-hidden="true"></i>
              <span class="tab-label">{{ category.name }}</span>
              <span class="skills-count tag tag-accent">{{ category.skills.length }}</span>
            </button>
          </div>
          
          <div class="tabs-content" role="tabpanel">
            <div *ngFor="let category of skillCategories; let i = index" 
                 class="tab-panel"
                 [class.active]="activeTab === i"
                 [id]="'tab-panel-' + i"
                 [attr.aria-hidden]="activeTab !== i">
              
              <!-- Category Header -->
              <div class="category-header card" *ngIf="activeTab === i">
                <div class="card-body">
                  <div class="category-info">
                    <div class="category-icon" [style.background]="category.color">
                      <i [class]="category.icon"></i>
                    </div>
                    <div class="category-details">
                      <h3 class="category-title">{{ category.name }}</h3>
                      <p class="category-description">{{ category.description }}</p>
                      <div class="category-stats">
                        <span class="stat-item">
                          <i class="fas fa-code"></i>
                          {{ category.skills.length }} Technologies
                        </span>
                        <span class="stat-item">
                          <i class="fas fa-star"></i>
                          {{ getExpertSkillsCount(category.skills) }} Expert Level
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Skills Grid -->
              <div class="skills-grid">
                <div *ngFor="let skill of category.skills; let j = index" 
                     class="skill-card card card-sm fade-in" 
                     [class]="'delay-' + (j % 6 + 1)">
                  <div class="card-body">
                    <div class="skill-header">
                      <div class="skill-main">
                        <h4 class="skill-name">{{ skill.name }}</h4>
                        <span class="skill-experience">{{ skill.experience }}</span>
                      </div>
                      <div class="skill-level-display">
                        <span class="skill-percentage">{{ skill.level * 10 }}%</span>
                        <span class="skill-category tag" [class]="getSkillCategoryClass(skill.category)">
                          {{ skill.category | titlecase }}
                        </span>
                      </div>
                    </div>
                    
                    <div class="skill-progress">
                      <div class="progress-bar-container" 
                           role="progressbar" 
                           [attr.aria-valuenow]="skill.level * 10" 
                           aria-valuemin="0" 
                           aria-valuemax="100"
                           [attr.aria-label]="skill.name + ' proficiency: ' + skill.level * 10 + '%'">
                        <div class="progress-bar" 
                             [style.width.%]="skill.level * 10"
                             [style.background]="getSkillProgressColor(skill.category)"></div>
                      </div>
                    </div>
                    
                    <p class="skill-description" *ngIf="skill.description">
                      {{ skill.description }}
                    </p>
                    
                    <!-- Skill level indicators -->
                    <div class="skill-indicators">
                      <div class="indicator-dots">
                        <span *ngFor="let dot of [1,2,3,4,5]; let d = index" 
                              class="indicator-dot"
                              [class.filled]="d < getCeilValue(skill.level / 2)"
                              [title]="getSkillLevelTitle(skill.level)"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Skills Certification/Learning Section -->
        <div class="skills-footer fade-in delay-6">
          <div class="learning-section card">
            <div class="card-body">
              <h3 class="learning-title">
                <i class="fas fa-graduation-cap"></i>
                Continuous Learning
              </h3>
              <p class="learning-description">
                Always expanding my technical expertise through hands-on projects, professional development, 
                and staying current with industry best practices and emerging technologies.
              </p>
              <div class="learning-actions">
                <a href="#projects" class="btn btn-primary">
                  <i class="fas fa-project-diagram"></i>
                  View Projects
                </a>
                <a href="#experience" class="btn btn-secondary">
                  <i class="fas fa-briefcase"></i>
                  See Experience
                </a>
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
  
  skillsSummary: SkillSummary[] = [
    {
      icon: 'fas fa-code',
      number: '20+',
      label: 'Technologies',
      description: 'Modern tech stack'
    },
    {
      icon: 'fas fa-star',
      number: '8',
      label: 'Expert Level',
      description: 'Advanced proficiency'
    },
    {
      icon: 'fas fa-project-diagram',
      number: '6',
      label: 'Categories',
      description: 'Diverse skill areas'
    },
    {
      icon: 'fas fa-clock',
      number: '2+',
      label: 'Years',
      description: 'Professional experience'
    }
  ];
  
  skillCategories: SkillCategory[] = [
    {
      name: 'Backend Development',
      icon: 'fas fa-server',
      description: 'Enterprise-grade backend technologies and frameworks for scalable applications',
      color: 'linear-gradient(135deg, #00838f, #26a69a)',
      skills: [
        { name: 'C# 11/10', level: 9, experience: '2+ years', description: 'Primary language for enterprise development', category: 'expert' },
        { name: '.NET 8/7/6', level: 9, experience: '2+ years', description: 'Cross-platform enterprise applications', category: 'expert' },
        { name: 'ASP.NET Core', level: 9, experience: '2+ years', description: 'High-performance web APIs and applications', category: 'expert' },
        { name: 'Entity Framework Core', level: 9, experience: '2+ years', description: 'ORM and data access patterns', category: 'expert' },
        { name: 'LINQ', level: 9, experience: '2+ years', description: 'Language integrated queries', category: 'expert' },
        { name: 'Microservices', level: 8, experience: '1+ years', description: 'Distributed system architecture', category: 'advanced' },
        { name: 'REST APIs', level: 9, experience: '2+ years', description: 'RESTful web service design', category: 'expert' },
        { name: 'Dependency Injection', level: 9, experience: '2+ years', description: 'Inversion of control patterns', category: 'expert' }
      ]
    },
    {
      name: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      description: 'Modern frontend frameworks and technologies for responsive user interfaces',
      color: 'linear-gradient(135deg, #e91e63, #ff5722)',
      skills: [
        { name: 'Angular 17/16/15', level: 8, experience: '2+ years', description: 'Single Page Applications with reactive programming', category: 'advanced' },
        { name: 'TypeScript 4.9', level: 8, experience: '2+ years', description: 'Type-safe JavaScript for large applications', category: 'advanced' },
        { name: 'JavaScript ES6+', level: 8, experience: '2+ years', description: 'Modern frontend and backend development', category: 'advanced' },
        { name: 'HTML5', level: 9, experience: '2+ years', description: 'Semantic markup and web standards', category: 'expert' },
        { name: 'CSS3', level: 8, experience: '2+ years', description: 'Responsive design and animations', category: 'advanced' },
        { name: 'Bootstrap 5', level: 8, experience: '2+ years', description: 'Responsive UI framework', category: 'advanced' },
        { name: 'React', level: 7, experience: '1 year', description: 'Component-based user interfaces', category: 'intermediate' },
        { name: 'SASS/SCSS', level: 7, experience: '1+ years', description: 'CSS preprocessing and organization', category: 'intermediate' }
      ]
    },
    {
      name: 'Database & Data',
      icon: 'fas fa-database',
      description: 'Database design, optimization, and data management technologies',
      color: 'linear-gradient(135deg, #2196f3, #21cbf3)',
      skills: [
        { name: 'SQL Server 2019/2022', level: 9, experience: '2+ years', description: 'Complex stored procedures and optimization', category: 'expert' },
        { name: 'Azure SQL Database', level: 9, experience: '2+ years', description: 'Cloud database solutions', category: 'expert' },
        { name: 'T-SQL', level: 9, experience: '2+ years', description: 'Advanced database programming', category: 'expert' },
        { name: 'Database Optimization', level: 8, experience: '2+ years', description: 'Query optimization and indexing', category: 'advanced' },
        { name: 'Data Modeling', level: 8, experience: '2+ years', description: 'Relational database design', category: 'advanced' },
        { name: 'MongoDB', level: 6, experience: '6 months', description: 'NoSQL document database', category: 'learning' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      description: 'Cloud platforms, containerization, and DevOps practices for scalable deployment',
      color: 'linear-gradient(135deg, #ff9800, #ffc107)',
      skills: [
        { name: 'Azure DevOps', level: 9, experience: '2+ years', description: 'CI/CD pipelines and project management', category: 'expert' },
        { name: 'Azure App Services', level: 9, experience: '2+ years', description: 'Scalable web application hosting', category: 'expert' },
        { name: 'Azure Functions', level: 8, experience: '1+ years', description: 'Serverless computing solutions', category: 'advanced' },
        { name: 'Docker', level: 8, experience: '1+ years', description: 'Containerization and deployment', category: 'advanced' },
        { name: 'Kubernetes', level: 7, experience: '1 year', description: 'Container orchestration and scaling', category: 'intermediate' },
        { name: 'Azure API Management', level: 8, experience: '1+ years', description: 'API gateway and management', category: 'advanced' },
        { name: 'CI/CD Pipelines', level: 9, experience: '2+ years', description: 'Automated deployment workflows', category: 'expert' }
      ]
    },
    {
      name: 'Architecture & Patterns',
      icon: 'fas fa-sitemap',
      description: 'Software architecture principles and design patterns for maintainable code',
      color: 'linear-gradient(135deg, #673ab7, #9c27b0)',
      skills: [
        { name: 'SOLID Principles', level: 9, experience: '2+ years', description: 'Object-oriented design principles', category: 'expert' },
        { name: 'MVC Pattern', level: 9, experience: '2+ years', description: 'Model-View-Controller architecture', category: 'expert' },
        { name: 'Repository Pattern', level: 8, experience: '2+ years', description: 'Data access abstraction', category: 'advanced' },
        { name: 'Factory Pattern', level: 8, experience: '1+ years', description: 'Object creation patterns', category: 'advanced' },
        { name: 'Domain-Driven Design', level: 7, experience: '1 year', description: 'Business-focused architecture', category: 'intermediate' },
        { name: 'Clean Architecture', level: 7, experience: '1 year', description: 'Layered application design', category: 'intermediate' }
      ]
    },
    {
      name: 'Testing & Tools',
      icon: 'fas fa-tools',
      description: 'Testing frameworks, development tools, and quality assurance practices',
      color: 'linear-gradient(135deg, #4caf50, #8bc34a)',
      skills: [
        { name: 'Visual Studio 2022', level: 9, experience: '2+ years', description: 'Primary IDE for .NET development', category: 'expert' },
        { name: 'Git', level: 9, experience: '2+ years', description: 'Version control and collaboration', category: 'expert' },
        { name: 'NUnit', level: 8, experience: '2+ years', description: 'Unit testing framework for .NET', category: 'advanced' },
        { name: 'Postman', level: 8, experience: '2+ years', description: 'API testing and documentation', category: 'advanced' },
        { name: 'Selenium', level: 7, experience: '1 year', description: 'Automated web application testing', category: 'intermediate' },
        { name: 'VS Code', level: 8, experience: '2+ years', description: 'Lightweight development environment', category: 'advanced' },
        { name: 'Agile/Scrum', level: 9, experience: '2+ years', description: 'Project management methodologies', category: 'expert' }
      ]
    }
  ];
  
  setActiveTab(index: number): void {
    this.activeTab = index;
    
    // Debounced skill progress animation
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    
    this.debounceTimeout = window.setTimeout(() => {
      this.animateSkillBars();
    }, 100);
  }
  
  ngAfterViewInit(): void {
    // Initialize skill bars after view is ready
    setTimeout(() => {
      this.animateSkillBars();
    }, 200);
  }
  
  ngOnDestroy(): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
  }
  
  getSkillCategoryClass(category: string): string {
    const categoryClasses = {
      'expert': 'tag-primary',
      'advanced': 'tag-secondary',
      'intermediate': 'tag-accent',
      'learning': 'tag-muted'
    };
    return categoryClasses[category as keyof typeof categoryClasses] || 'tag-secondary';
  }
  
  getSkillProgressColor(category: string): string {
    const colors = {
      'expert': 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
      'advanced': 'linear-gradient(90deg, var(--secondary-color), var(--accent-color))',
      'intermediate': 'linear-gradient(90deg, var(--accent-color), var(--warning-color))',
      'learning': 'linear-gradient(90deg, var(--warning-color), var(--info-color))'
    };
    return colors[category as keyof typeof colors] || colors.advanced;
  }
  
  getSkillLevelTitle(level: number): string {
    if (level >= 9) return 'Expert Level';
    if (level >= 7) return 'Advanced Level';
    if (level >= 5) return 'Intermediate Level';
    return 'Learning';
  }
  
  getExpertSkillsCount(skills: Skill[]): number {
    return skills.filter(skill => skill.category === 'expert').length;
  }
  
  getCeilValue(value: number): number {
    return Math.ceil(value);
  }
  
  private animateSkillBars(): void {
    try {
      // Animate progress bars with staggered delay
      const progressBars = document.querySelectorAll('.tab-panel.active .progress-bar');
      progressBars.forEach((bar, index) => {
        const htmlElement = bar as HTMLElement;
        htmlElement.style.animationDelay = `${index * 0.1}s`;
        // Force reflow to restart animation
        void htmlElement.offsetHeight;
        htmlElement.classList.add('animate-progress');
      });
    } catch (error) {
      console.warn('Error animating skill bars:', error);
    }
  }
}