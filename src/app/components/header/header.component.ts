// app/components/header/header.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 50"
              width="120"
              height="30"
            >
              <!-- Definitions -->
              <defs>
                <linearGradient
                  id="compactLogoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#00838f" />
                  <stop offset="100%" stop-color="#26a69a" />
                </linearGradient>
              </defs>

              <!-- Main Logo Group -->
              <g>
                <!-- Brackets and HM monogram -->
                <g transform="translate(5, 5)">
                  <!-- Left Bracket -->
                  <path
                    d="M5,5 L0,20 L5,35"
                    fill="none"
                    stroke="#00838f"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <!-- Right Bracket -->
                  <path
                    d="M185,5 L190,20 L185,35"
                    fill="none"
                    stroke="#26a69a"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <!-- H letter -->
                  <path
                    d="M20,10 L20,30 M20,20 L35,20 M35,10 L35,30"
                    stroke="url(#compactLogoGradient)"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />

                  <!-- M letter stylized to connect with the H -->
                  <path
                    d="M40,10 L40,30 M40,10 L50,25 L60,10 M60,10 L60,30"
                    stroke="url(#compactLogoGradient)"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill="none"
                  />
                </g>

                <!-- Name -->
                <g transform="translate(75, 12)">
                  <!-- Haseeb -->
                  <text
                    x="0"
                    y="10"
                    font-family="'Poppins', sans-serif"
                    font-size="14"
                    font-weight="600"
                    fill="#00838f"
                  >
                    Haseeb
                  </text>

                  <!-- Mohammad -->
                  <text
                    x="0"
                    y="28"
                    font-family="'Poppins', sans-serif"
                    font-size="14"
                    font-weight="600"
                    fill="#26a69a"
                  >
                    Mohammad
                  </text>
                </g>

                <!-- Decorative dots -->
                <circle cx="70" cy="20" r="1.5" fill="#00838f">
                  <animate
                    attributeName="r"
                    values="1.5;2;1.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="70" cy="30" r="1.5" fill="#26a69a">
                  <animate
                    attributeName="r"
                    values="1.5;2;1.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </div>

          <button
            class="mobile-menu-toggle"
            (click)="toggleMobileMenu()"
            [attr.aria-expanded]="isMobileMenuOpen"
            [class.active]="isMobileMenuOpen"
          >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="sr-only">Toggle menu</span>
          </button>

          <nav [class.open]="isMobileMenuOpen">
            <ul>
              <li *ngFor="let item of navItems; let i = index">
                <a
                  [href]="'#' + item.id"
                  class="nav-link"
                  [class.active]="activeSection === item.id"
                  (click)="closeMenu($event)"
                >
                  <i [class]="item.icon"></i>
                  <span>{{ item.label }}</span>
                </a>
              </li>
            </ul>
          </nav>

          <div class="header-actions">
            <button class="theme-toggle-btn" (click)="toggleTheme()">
              <i class="fas" [ngClass]="isDarkTheme ? 'fa-sun' : 'fa-moon'"></i>
            </button>

            <a href="assets/resume.pdf" target="_blank" class="resume-btn">
              <i class="fas fa-file-download"></i>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Progress bar on top of the page while scrolling -->
    <div class="scroll-progress-container">
      <div class="scroll-progress-bar" [style.width.%]="scrollProgress"></div>
    </div>

    <!-- Mobile menu overlay -->
    <div
      class="mobile-menu-overlay"
      [class.active]="isMobileMenuOpen"
      (click)="closeMenu($event)"
    ></div>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  scrollProgress = 0;
  isDarkTheme = false;

  navItems = [
    { label: 'Home', id: 'home', icon: 'fas fa-home' },
    { label: 'About', id: 'about', icon: 'fas fa-user' },
    { label: 'Experience', id: 'experience', icon: 'fas fa-briefcase' },
    { label: 'Skills', id: 'skills', icon: 'fas fa-code' },
    { label: 'Projects', id: 'projects', icon: 'fas fa-project-diagram' },
    { label: 'Contact', id: 'contact', icon: 'fas fa-envelope' },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Add background when scrolled
    this.isScrolled = window.scrollY > 50;

    // Update active section based on scroll position
    this.updateActiveSection();

    // Update scroll progress bar
    this.updateScrollProgress();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Prevent body scrolling when menu is open
    if (this.isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeMenu(event: Event): void {
    // Get the clicked element
    const clickedElement = event.target as HTMLElement;

    // Find if the click was on or within a nav-link
    const navLink = clickedElement.closest('.nav-link');
    const isOverlay = clickedElement.classList.contains('mobile-menu-overlay');

    // Close mobile menu when clicking a nav link or the overlay
    if (this.isMobileMenuOpen && (navLink || isOverlay)) {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('no-scroll');
    }

    // Handle smooth scrolling for nav links
    if (navLink) {
      event.preventDefault();

      const targetId = navLink.getAttribute('href')?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Add small delay to ensure menu is closed before scrolling
          setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }, 10);
        }
      }
    }
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme');

    // Save theme preference
    localStorage.setItem(
      'portfolio-theme',
      this.isDarkTheme ? 'dark' : 'light'
    );
  }

  private updateActiveSection(): void {
    // Get all section elements
    const sections = this.navItems
      .map((item) => document.getElementById(item.id))
      .filter((section) => section !== null) as HTMLElement[];

    if (sections.length === 0) return;

    // Get the position and dimensions
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    // Find the current section
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        this.activeSection = section.id;
        return;
      }
    }

    // If we're at the very top of the page
    if (window.scrollY < 50) {
      this.activeSection = 'home';
    }
  }

  private updateScrollProgress(): void {
    const scrollTop = window.scrollY;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    this.scrollProgress = (scrollTop / scrollHeight) * 100;
  }

  ngOnInit(): void {
    // Handle theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.body.classList.add('dark-theme');
    }

    // Initialize sections after DOM is fully loaded
    window.addEventListener('load', () => {
      this.updateActiveSection();
      this.updateScrollProgress();
    });

    // Also set a longer timeout as backup
    setTimeout(() => {
      this.updateActiveSection();
      this.updateScrollProgress();
    }, 300);
  }
}
