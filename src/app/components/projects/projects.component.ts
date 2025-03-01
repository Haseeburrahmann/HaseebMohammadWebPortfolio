// app/components/projects/projects.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  imageUrl?: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects-container">
      <div class="container">
        <div class="section-header">
          <h2 class="fade-in">Featured Projects</h2>
          <div class="section-divider"></div>
        </div>
        
        <div class="projects-filter fade-in delay-1">
          <button 
            [class.active]="activeFilter === 'all'"
            (click)="setFilter('all')"
            class="filter-btn"
          >
            All Projects
          </button>
          <button 
            *ngFor="let tech of uniqueTechnologies" 
            [class.active]="activeFilter === tech"
            (click)="setFilter(tech)"
            class="filter-btn"
          >
            {{tech}}
          </button>
        </div>
        
        <div class="projects-grid">
          <div 
            *ngFor="let project of filteredProjects; let i = index" 
            class="project-card fade-in" 
            [class]="'delay-' + (i % 5 + 1)"
          >
            <div class="project-header" [style.background]="project.color">
              <div class="project-icon">
                <i [class]="project.icon"></i>
              </div>
              <h3 class="project-title">{{project.title}}</h3>
            </div>
            
            <div class="project-content">
              <p class="project-description">{{project.description}}</p>
              
              <div class="project-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  <li *ngFor="let achievement of project.achievements">
                    {{achievement}}
                  </li>
                </ul>
              </div>
              
              <div class="project-tech">
                <h4>Technologies Used</h4>
                <div class="tech-tags">
                  <span 
                    *ngFor="let tech of project.technologies" 
                    class="tech-tag"
                    [class.highlight]="activeFilter === tech"
                  >
                    {{tech}}
                  </span>
                </div>
              </div>
              
              <div class="project-actions">
                <button class="btn-view-details">
                  <i class="fas fa-info-circle"></i> More Details
                </button>
                
                <button class="btn-live-demo">
                  <i class="fas fa-external-link-alt"></i> Live Demo
                </button>
              </div>
            </div>
          </div>
          
          <!-- Empty state when no projects match the filter -->
          <div *ngIf="filteredProjects.length === 0" class="empty-state">
            <i class="fas fa-search"></i>
            <p>No projects match the selected filter.</p>
            <button (click)="setFilter('all')" class="btn-reset-filter">
              Show All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  activeFilter = 'all';
  
  projects: Project[] = [
    {
      title: 'Enterprise Cloud Migration Project',
      description: 'Led migration of legacy applications to Azure cloud services using microservices architecture.',
      technologies: ['Azure', 'Microservices', 'Azure DevOps', 'App Services', 'Container Instances'],
      achievements: [
        'Implemented Azure DevOps pipelines achieving 99.9% deployment success rate',
        'Utilized Azure App Services and Container Instances for scalable application hosting',
        'Reduced operational costs by 30% through efficient cloud resource management'
      ],
      color: 'linear-gradient(135deg, #00838f 0%, #26a69a 100%)',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Movie Recommendation System',
      description: 'Developed an AI-powered recommendation engine using machine learning algorithms.',
      technologies: ['Python', 'Azure Machine Learning', 'Matplotlib', 'Seaborn', 'Random Forest', 'K-means'],
      achievements: [
        'Implemented data visualization using Python libraries (Matplotlib, Seaborn)',
        'Achieved 85% prediction accuracy for user movie preferences',
        'Utilized Azure Machine Learning services for model deployment'
      ],
      color: 'linear-gradient(135deg, #673ab7 0%, #9c27b0 100%)',
      icon: 'fas fa-film'
    },
    {
      title: 'Store Management System',
      description: 'Architected and developed a full-stack application for inventory management and sales analytics.',
      technologies: ['.NET Core', 'Angular', 'Azure AD', 'SQL Server', 'Entity Framework Core'],
      achievements: [
        'Implemented real-time inventory tracking and sales analytics',
        'Led a team of 4 developers using Agile/Scrum methodology',
        'Integrated Azure AD for secure authentication and authorization'
      ],
      color: 'linear-gradient(135deg, #ff5722 0%, #ff9800 100%)',
      icon: 'fas fa-store'
    }
  ];
  
  get uniqueTechnologies(): string[] {
    const allTechnologies = this.projects.flatMap(project => project.technologies);
    // Get unique technologies and limit to most common ones to avoid too many filter buttons
    const techCount = allTechnologies.reduce((acc, tech) => {
      acc[tech] = (acc[tech] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    // Sort by frequency and take top 6
    return Object.entries(techCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(entry => entry[0]);
  }
  
  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    
    return this.projects.filter(project => 
      project.technologies.includes(this.activeFilter)
    );
  }
  
  setFilter(filter: string): void {
    this.activeFilter = filter;
  }
}