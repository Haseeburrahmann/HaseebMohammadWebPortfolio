// app/components/projects/projects.component.ts - Horizontal scrolling design
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  color: string;
  icon: string;
  category: 'web-app' | 'machine-learning' | 'data-viz' | 'full-stack';
  status: 'completed' | 'in-progress';
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCategory {
  name: string;
  icon: string;
  projects: Project[];
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
          <p class="section-subtitle fade-in delay-1">
            Explore my portfolio of innovative solutions across different technologies
          </p>
        </div>
        
        <div class="projects-tabs">
          <div class="tabs-navigation fade-in delay-1">
            <button 
              *ngFor="let category of projectCategories; let i = index" 
              [class.active]="activeTab === i"
              (click)="setActiveTab(i)"
              class="tab-button"
              type="button"
            >
              <i [class]="category.icon" aria-hidden="true"></i>
              <span>{{category.name}}</span>
              <div class="project-count">{{category.projects.length}}</div>
            </button>
          </div>
          
          <div class="tabs-content fade-in delay-2">
            <div *ngFor="let category of projectCategories; let i = index" 
                 class="tab-panel"
                 [class.active]="activeTab === i">
              
              <!-- Navigation arrows for mobile -->
              <div class="scroll-controls">
                <button class="scroll-btn scroll-left" (click)="scrollProjects('left')" type="button">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button class="scroll-btn scroll-right" (click)="scrollProjects('right')" type="button">
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
              
              <div class="projects-wrapper">
                <div class="projects-row" #projectsRow>
                  <div *ngFor="let project of category.projects; let j = index" 
                       class="project-card" 
                       [class]="'delay-' + (j + 1)"
                       [style.animation-delay]="(j * 0.1) + 's'">
                    
                    <div class="project-image" [style.background]="project.color">
                      <div class="project-icon">
                        <i [class]="project.icon" aria-hidden="true"></i>
                      </div>
                      <div class="project-overlay">
                        <div class="project-status" [class]="project.status">
                          {{project.status === 'completed' ? 'Completed' : 'In Progress'}}
                        </div>
                      </div>
                    </div>
                    
                    <div class="project-info">
                      <h3 class="project-title">{{project.title}}</h3>
                      <p class="project-description">{{project.description}}</p>
                      
                      <div class="project-tech">
                        <div class="tech-tags">
                          <span *ngFor="let tech of project.technologies.slice(0, 4)" 
                                class="tech-tag">{{tech}}</span>
                          <span *ngIf="project.technologies.length > 4" 
                                class="tech-tag more">+{{project.technologies.length - 4}}</span>
                        </div>
                      </div>
                      
                      <div class="project-actions">
                        <button (click)="viewProject(project)" class="btn-view" type="button">
                          <i class="fas fa-eye"></i>
                          Details
                        </button>
                        <button [disabled]="!project.githubUrl" class="btn-github" type="button">
                          <i class="fab fa-github"></i>
                          Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Progress indicators -->
              <div class="scroll-indicators" *ngIf="category.projects.length > 0">
                <div *ngFor="let project of category.projects; let k = index"
                     class="indicator"
                     [class.active]="k === 0">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  activeTab = 0;
  
  projectCategories: ProjectCategory[] = [
    {
      name: 'All Projects',
      icon: 'fas fa-th-large',
      projects: [
        {
          title: 'Store Management System',
          description: 'Full-stack application for efficient store operations with inventory control, sales tracking, and CRM capabilities.',
          technologies: ['C#', '.NET 7', 'SQL Server 2022', 'Entity Framework Core', 'Angular 16', 'TypeScript', 'Bootstrap 5'],
          achievements: [
            'Developed core features for inventory control and sales tracking',
            'Led development team using Scrum framework',
            'Created intuitive UI for efficient store operations'
          ],
          color: 'linear-gradient(135deg, #ff5722 0%, #ff9800 100%)',
          icon: 'fas fa-store',
          category: 'full-stack',
          status: 'completed'
        },
        {
          title: 'Movie Recommendation System',
          description: 'AI-powered recommendation engine using machine learning algorithms and data visualization techniques.',
          technologies: ['Python', '.NET 8', 'Azure Services', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
          achievements: [
            'Implemented Random Forest and K-means clustering algorithms',
            'Enhanced prediction accuracy through model tuning',
            'Achieved 85% prediction accuracy for user preferences'
          ],
          color: 'linear-gradient(135deg, #673ab7 0%, #9c27b0 100%)',
          icon: 'fas fa-film',
          category: 'machine-learning',
          status: 'completed'
        },
        {
          title: 'Data Visualization Dashboard',
          description: 'Advanced data visualization project for large-scale graphs with optimized performance and interactive features.',
          technologies: ['JavaScript', 'TypeScript', 'D3.js', 'HTML5', 'CSS3', 'Chart.js', 'Node.js'],
          achievements: [
            'Designed advanced data visualization techniques',
            'Reduced time complexity for large datasets',
            'Built reusable visualization components'
          ],
          color: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
          icon: 'fas fa-chart-line',
          category: 'data-viz',
          status: 'completed'
        },
        {
          title: 'Enterprise Microservices Platform',
          description: 'Scalable microservices platform with .NET 8, Azure cloud services, and comprehensive CI/CD pipelines.',
          technologies: ['.NET 8', 'C# 11', 'Azure App Services', 'Docker', 'Kubernetes', 'Azure DevOps', 'SQL Server'],
          achievements: [
            'Architected microservices using SOLID principles',
            'Implemented CI/CD pipelines with 99.9% success rate',
            'Achieved 40% improvement in system scalability'
          ],
          color: 'linear-gradient(135deg, #00838f 0%, #26a69a 100%)',
          icon: 'fas fa-cloud',
          category: 'web-app',
          status: 'completed'
        },
        {
          title: 'AI Analytics Platform',
          description: 'Machine learning platform for processing large datasets and generating business insights with predictive modeling.',
          technologies: ['Python', 'TensorFlow', 'Pandas', 'Azure ML', 'SQL Server', 'Power BI', 'Jupyter'],
          achievements: [
            'Developed ML models with 90% accuracy',
            'Processed datasets with millions of records',
            'Reduced manual analysis time by 70%'
          ],
          color: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
          icon: 'fas fa-brain',
          category: 'machine-learning',
          status: 'completed'
        },
        {
          title: 'Interactive Sales Dashboard',
          description: 'Dynamic dashboard transforming complex sales data into actionable insights with real-time analytics.',
          technologies: ['React', 'D3.js', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket', 'Express.js'],
          achievements: [
            'Built real-time dashboard with live updates',
            'Implemented complex interactive charts',
            'Improved decision-making speed by 50%'
          ],
          color: 'linear-gradient(135deg, #ff9800 0%, #ffc107 100%)',
          icon: 'fas fa-chart-bar',
          category: 'data-viz',
          status: 'completed'
        }
      ]
    },
    {
      name: 'Full Stack',
      icon: 'fas fa-layers',
      projects: [
        {
          title: 'Store Management System',
          description: 'Full-stack application for efficient store operations with inventory control, sales tracking, and CRM capabilities.',
          technologies: ['C#', '.NET 7', 'SQL Server 2022', 'Entity Framework Core', 'Angular 16', 'TypeScript'],
          achievements: [
            'Developed core features for inventory control and sales tracking',
            'Led development team using Scrum framework',
            'Created intuitive UI for efficient store operations'
          ],
          color: 'linear-gradient(135deg, #ff5722 0%, #ff9800 100%)',
          icon: 'fas fa-store',
          category: 'full-stack',
          status: 'completed'
        }
      ]
    },
    {
      name: 'Machine Learning',
      icon: 'fas fa-brain',
      projects: [
        {
          title: 'Movie Recommendation System',
          description: 'AI-powered recommendation engine using machine learning algorithms and data visualization techniques.',
          technologies: ['Python', '.NET 8', 'Azure Services', 'Scikit-learn', 'Pandas', 'Matplotlib'],
          achievements: [
            'Implemented Random Forest and K-means clustering algorithms',
            'Enhanced prediction accuracy through model tuning',
            'Achieved 85% prediction accuracy for user preferences'
          ],
          color: 'linear-gradient(135deg, #673ab7 0%, #9c27b0 100%)',
          icon: 'fas fa-film',
          category: 'machine-learning',
          status: 'completed'
        },
        {
          title: 'AI Analytics Platform',
          description: 'Machine learning platform for processing large datasets and generating business insights.',
          technologies: ['Python', 'TensorFlow', 'Pandas', 'Azure ML', 'SQL Server', 'Power BI'],
          achievements: [
            'Developed ML models with 90% accuracy',
            'Processed datasets with millions of records',
            'Reduced manual analysis time by 70%'
          ],
          color: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)',
          icon: 'fas fa-brain',
          category: 'machine-learning',
          status: 'completed'
        }
      ]
    },
    {
      name: 'Data Visualization',
      icon: 'fas fa-chart-bar',
      projects: [
        {
          title: 'Data Visualization Dashboard',
          description: 'Advanced data visualization project for large-scale graphs with optimized performance.',
          technologies: ['JavaScript', 'TypeScript', 'D3.js', 'HTML5', 'CSS3', 'Chart.js'],
          achievements: [
            'Designed advanced data visualization techniques',
            'Reduced time complexity for large datasets',
            'Built reusable visualization components'
          ],
          color: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
          icon: 'fas fa-chart-line',
          category: 'data-viz',
          status: 'completed'
        },
        {
          title: 'Interactive Sales Dashboard',
          description: 'Dynamic dashboard transforming complex sales data into actionable insights.',
          technologies: ['React', 'D3.js', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket'],
          achievements: [
            'Built real-time dashboard with live updates',
            'Implemented complex interactive charts',
            'Improved decision-making speed by 50%'
          ],
          color: 'linear-gradient(135deg, #ff9800 0%, #ffc107 100%)',
          icon: 'fas fa-chart-bar',
          category: 'data-viz',
          status: 'completed'
        }
      ]
    }
  ];
  
  ngAfterViewInit(): void {
    // Initialize scroll indicators or any other setup
  }
  
  setActiveTab(index: number): void {
    this.activeTab = index;
    
    // Add stagger animation to project cards
    setTimeout(() => {
      const cards = document.querySelectorAll('.tab-panel.active .project-card');
      cards.forEach((card, i) => {
        const htmlCard = card as HTMLElement;
        htmlCard.style.animationDelay = `${i * 0.1}s`;
        card.classList.remove('animate-in');
        void htmlCard.offsetWidth; // Force reflow
        card.classList.add('animate-in');
      });
    }, 50);
  }
  
  scrollProjects(direction: 'left' | 'right'): void {
    const projectsRow = document.querySelector('.tab-panel.active .projects-row') as HTMLElement;
    if (projectsRow) {
      const scrollAmount = 350; // Width of one project card
      const currentScroll = projectsRow.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      projectsRow.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }
  
  viewProject(project: Project): void {
    const modal = `
🚀 ${project.title}

📝 Description:
${project.description}

✨ Key Achievements:
${project.achievements.map(achievement => `• ${achievement}`).join('\n')}

🛠️ Technologies:
${project.technologies.join(', ')}

📊 Status: ${project.status === 'completed' ? 'Completed ✅' : 'In Progress 🔄'}

🔗 Links coming soon!
    `;
    
    alert(modal);
  }
}