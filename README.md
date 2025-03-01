# Haseeb Mohammad Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional experience as a Full Stack Developer with expertise in .NET Core, Azure Cloud Services, and modern web technologies.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Features

- **Single Page Application**: Smooth scrolling between sections with animated transitions
- **Dark/Light Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first approach that works on all devices
- **Interactive UI Components**: 
  - Animated skill bars
  - Interactive project cards
  - Timeline-based experience display
  - Dynamic contact form

## Deployment

This project is deployed on GitHub Pages at: https://haseeburrahmann.github.io/HaseebMohammadWebPortfolio/

### Deployment Steps

```bash
# Build with correct base href
ng build --configuration production --base-href="https://haseeburrahmann.github.io/HaseebMohammadWebPortfolio/"

# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/haseeb-portfolio/browser
