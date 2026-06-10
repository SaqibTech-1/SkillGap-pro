# SkillGap Pro - Angular Architecture Documentation

## Project Overview

**SkillGap Pro** is a skill gap analysis platform that helps students, freshers, and professionals analyze their skills against career roles and become job-ready. This document outlines the complete Angular architecture for converting the existing static HTML project.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Modules Architecture](#modules-architecture)
3. [Components Breakdown](#components-breakdown)
4. [Services Architecture](#services-architecture)
5. [Routing Structure](#routing-structure)
6. [Data Models](#data-models)
7. [State Management](#state-management)
8. [UI Components Library](#ui-components-library)
9. [Feature Modules](#feature-modules)
10. [Shared Module](#shared-module)
11. [Core Module](#core-module)
12. [Assets Organization](#assets-organization)
13. [Environment Configuration](#environment-configuration)
14. [Third-Party Libraries](#third-party-libraries)
15. [Build & Deployment](#build--deployment)

---

## Project Structure

```
skillgap-pro-angular/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   └── error.interceptor.ts
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── storage.service.ts
│   │   │   │   └── theme.service.ts
│   │   │   └── core.module.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── navbar/
│   │   │   │   ├── footer/
│   │   │   │   ├── loader/
│   │   │   │   ├── toast/
│   │   │   │   ├── back-to-top/
│   │   │   │   ├── auth-modal/
│   │   │   │   ├── skill-chip/
│   │   │   │   ├── donut-chart/
│   │   │   │   ├── feature-card/
│   │   │   │   ├── role-card/
│   │   │   │   ├── testimonial-card/
│   │   │   │   ├── resource-card/
│   │   │   │   ├── team-card/
│   │   │   │   ├── value-card/
│   │   │   │   ├── contact-info-card/
│   │   │   │   ├── counter-card/
│   │   │   │   ├── glass-card/
│   │   │   │   └── page-hero/
│   │   │   ├── directives/
│   │   │   │   └── aos.directive.ts
│   │   │   ├── pipes/
│   │   │   │   └── safe-html.pipe.ts
│   │   │   └── shared.module.ts
│   │   ├── features/
│   │   │   ├── home/
│   │   │   │   ├── components/
│   │   │   │   │   ├── hero/
│   │   │   │   │   ├── stats-bar/
│   │   │   │   │   ├── features-section/
│   │   │   │   │   ├── career-categories/
│   │   │   │   │   ├── skill-preview/
│   │   │   │   │   └── why-choose-us/
│   │   │   │   ├── testimonials-preview/
│   │   │   │   └── home-routing.module.ts
│   │   │   │   └── home.module.ts
│   │   │   ├── about/
│   │   │   │   ├── components/
│   │   │   │   │   ├── intro-banner/
│   │   │   │   │   ├── our-story/
│   │   │   │   │   ├── mission-vision/
│   │   │   │   │   ├── industry-problems/
│   │   │   │   │   ├── achievement-stats/
│   │   │   │   │   ├── future-goals/
│   │   │   │   │   └── cta-banner/
│   │   │   │   ├── about-routing.module.ts
│   │   │   │   └── about.module.ts
│   │   │   ├── analyze/
│   │   │   │   ├── components/
│   │   │   │   │   ├── analyze-hero/
│   │   │   │   │   ├── analyze-form/
│   │   │   │   │   ├── result-dashboard/
│   │   │   │   │   ├── profession-selection/
│   │   │   │   │   ├── suggested-skills/
│   │   │   │   │   ├── learning-resources/
│   │   │   │   │   ├── analysis-history/
│   │   │   │   │   └── cta-section/
│   │   │   │   ├── analyze-routing.module.ts
│   │   │   │   └── analyze.module.ts
│   │   │   ├── how-it-works/
│   │   │   │   ├── components/
│   │   │   │   │   ├── workflow-hero/
│   │   │   │   │   ├── step-by-step/
│   │   │   │   │   ├── profession-matching/
│   │   │   │   │   ├── dashboard-explanation/
│   │   │   │   │   ├── report-generation/
│   │   │   │   │   └── career-growth/
│   │   │   │   ├── how-it-works-routing.module.ts
│   │   │   │   └── how-it-works.module.ts
│   │   │   ├── profile/
│   │   │   │   ├── components/
│   │   │   │   │   ├── profile-banner/
│   │   │   │   │   ├── user-info/
│   │   │   │   │   ├── analysis-history/
│   │   │   │   │   ├── downloaded-reports/
│   │   │   │   │   ├── career-progress/
│   │   │   │   │   └── cta-section/
│   │   │   │   ├── profile-routing.module.ts
│   │   │   │   └── profile.module.ts
│   │   │   ├── team/
│   │   │   │   ├── components/
│   │   │   │   │   ├── team-hero/
│   │   │   │   │   ├── founder-section/
│   │   │   │   │   ├── core-team/
│   │   │   │   │   ├── team-values/
│   │   │   │   │   ├── work-culture/
│   │   │   │   │   └── join-us-cta/
│   │   │   │   ├── team-routing.module.ts
│   │   │   │   └── team.module.ts
│   │   │   ├── testimonials/
│   │   │   │   ├── components/
│   │   │   │   │   ├── testimonials-hero/
│   │   │   │   │   ├── student-stories/
│   │   │   │   │   ├── career-transformations/
│   │   │   │   │   ├── video-grid/
│   │   │   │   │   ├── community-trust/
│   │   │   │   │   └── cta-section/
│   │   │   │   ├── testimonials-routing.module.ts
│   │   │   │   └── testimonials.module.ts
│   │   │   └── contact/
│   │   │       ├── components/
│   │   │       │   ├── contact-hero/
│   │   │       │   ├── contact-info/
│   │   │       │   ├── contact-form/
│   │   │       │   ├── faq-accordion/
│   │   │       │   └── map-social/
│   │   │       ├── contact-routing.module.ts
│   │   │       └── contact.module.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.component.html
│   └── app.component.scss
├── assets/
│   ├── images/
│   │   ├── analysis-dashboard.png
│   │   ├── career-dashboard.png
│   │   ├── history-timeline.png
│   │   ├── measure-progress.png
│   │   └── real-time-analysis.png
│   ├── logo/
│   │   ├── skillgap-favicon.png
│   │   └── skillgap-logo.png
│   ├── team/
│   │   └── muhammad-saqib.webp
│   └── icons/
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── styles/
│   └── _variables.scss
├── index.html
├── main.ts
└── angular.json
```

---

## Modules Architecture

### Total Modules: **11**

| Module | Type | Purpose |
|--------|------|---------|
| `AppModule` | Root | Main application module |
| `CoreModule` | Core | Singleton services, guards, interceptors |
| `SharedModule` | Shared | Reusable components, directives, pipes |
| `HomeModule` | Feature | Landing page components |
| `AboutModule` | Feature | About page components |
| `AnalyzeModule` | Feature | Skill analysis functionality |
| `HowItWorksModule` | Feature | How it works page |
| `ProfileModule` | Feature | User profile and history |
| `TeamModule` | Feature | Team page |
| `TestimonialsModule` | Feature | Testimonials page |
| `ContactModule` | Feature | Contact page |

---

## Components Breakdown

### Total Components: **42**

#### Shared Components (14)
| Component | Path | Purpose |
|-----------|------|---------|
| `NavbarComponent` | `shared/components/navbar/` | Navigation bar with theme toggle and auth buttons |
| `FooterComponent` | `shared/components/footer/` | Site footer with links and newsletter |
| `LoaderComponent` | `shared/components/loader/` | Page loading animation |
| `ToastComponent` | `shared/components/toast/` | Notification toast system |
| `BackToTopComponent` | `shared/components/back-to-top/` | Scroll to top button |
| `AuthModalComponent` | `shared/components/auth-modal/` | Login/Signup modal |
| `SkillChipComponent` | `shared/components/skill-chip/` | Skill tag display |
| `DonutChartComponent` | `shared/components/donut-chart/` | Circular progress chart |
| `FeatureCardComponent` | `shared/components/feature-card/` | Feature highlight card |
| `RoleCardComponent` | `shared/components/role-card/` | Career role card |
| `TestimonialCardComponent` | `shared/components/testimonial-card/` | User testimonial display |
| `ResourceCardComponent` | `shared/components/resource-card/` | Learning resource card |
| `TeamCardComponent` | `shared/components/team-card/` | Team member card |
| `PageHeroComponent` | `shared/components/page-hero/` | Page hero section |

#### Home Page Components (6)
| Component | Path | Purpose |
|-----------|------|---------|
| `HeroComponent` | `features/home/components/hero/` | Main hero section with CTA |
| `StatsBarComponent` | `features/home/components/stats-bar/` | Statistics display |
| `FeaturesSectionComponent` | `features/home/components/features-section/` | Features grid |
| `CareerCategoriesComponent` | `features/home/components/career-categories/` | Career role cards |
| `SkillPreviewComponent` | `features/home/components/skill-preview/` | Dashboard preview |
| `WhyChooseUsComponent` | `features/home/components/why-choose-us/` | Value proposition |

#### About Page Components (6)
| Component | Path | Purpose |
|-----------|------|---------|
| `IntroBannerComponent` | `features/about/components/intro-banner/` | Page introduction |
| `OurStoryComponent` | `features/about/components/our-story/` | Company story |
| `MissionVisionComponent` | `features/about/components/mission-vision/` | Mission and vision |
| `IndustryProblemsComponent` | `features/about/components/industry-problems/` | Problem statements |
| `AchievementStatsComponent` | `features/about/components/achievement-stats/` | Achievement stats |
| `FutureGoalsComponent` | `features/about/components/future-goals/` | Roadmap timeline |

#### Analyze Page Components (7)
| Component | Path | Purpose |
|-----------|------|---------|
| `AnalyzeHeroComponent` | `features/analyze/components/analyze-hero/` | Analysis page hero |
| `AnalyzeFormComponent` | `features/analyze/components/analyze-form/` | Skill input form |
| `ResultDashboardComponent` | `features/analyze/components/result-dashboard/` | Analysis results |
| `ProfessionSelectionComponent` | `features/analyze/components/profession-selection/` | Role selection cards |
| `SuggestedSkillsComponent` | `features/analyze/components/suggested-skills/` | Skill suggestions |
| `LearningResourcesComponent` | `features/analyze/components/learning-resources/` | Resource links |
| `AnalysisHistoryComponent` | `features/analyze/components/analysis-history/` | History list |

#### How It Works Page Components (6)
| Component | Path | Purpose |
|-----------|------|---------|
| `WorkflowHeroComponent` | `features/how-it-works/components/workflow-hero/` | Page hero |
| `StepByStepComponent` | `features/how-it-works/components/step-by-step/` | Timeline steps |
| `ProfessionMatchingComponent` | `features/how-it-works/components/profession-matching/` | Matching algorithm |
| `DashboardExplanationComponent` | `features/how-it-works/components/dashboard-explanation/` | Widget explanations |
| `ReportGenerationComponent` | `features/how-it-works/components/report-generation/` | PDF report info |
| `CareerGrowthComponent` | `features/how-it-works/components/career-growth/` | 90-day roadmap |

#### Profile Page Components (6)
| Component | Path | Purpose |
|-----------|------|---------|
| `ProfileBannerComponent` | `features/profile/components/profile-banner/` | User profile header |
| `UserInfoComponent` | `features/profile/components/user-info/` | Account details |
| `AnalysisHistoryComponent` | `features/profile/components/analysis-history/` | History timeline |
| `DownloadedReportsComponent` | `features/profile/components/downloaded-reports/` | Reports grid |
| `CareerProgressComponent` | `features/profile/components/career-progress/` | Progress chart |
| `AchievementsComponent` | `features/profile/components/achievements/` | Achievement badges |

#### Team Page Components (5)
| Component | Path | Purpose |
|-----------|------|---------|
| `TeamHeroComponent` | `features/team/components/team-hero/` | Page hero |
| `FounderSectionComponent` | `features/team/components/founder-section/` | Founder profile |
| `CoreTeamComponent` | `features/team/components/core-team/` | Team members |
| `TeamValuesComponent` | `features/team/components/team-values/` | Company values |
| `WorkCultureComponent` | `features/team/components/work-culture/` | Culture gallery |

#### Testimonials Page Components (5)
| Component | Path | Purpose |
|-----------|------|---------|
| `TestimonialsHeroComponent` | `features/testimonials/components/testimonials-hero/` | Page hero |
| `StudentStoriesComponent` | `features/testimonials/components/student-stories/` | Student testimonials |
| `CareerTransformationsComponent` | `features/testimonials/components/career-transformations/` | Career switch stories |
| `VideoGridComponent` | `features/testimonials/components/video-grid/` | Video stories |
| `CommunityTrustComponent` | `features/testimonials/components/community-trust/` | Trust stats |

#### Contact Page Components (5)
| Component | Path | Purpose |
|-----------|------|---------|
| `ContactHeroComponent` | `features/contact/components/contact-hero/` | Page hero |
| `ContactInfoComponent` | `features/contact/components/contact-info/` | Contact methods |
| `ContactFormComponent` | `features/contact/components/contact-form/` | Contact form |
| `FaqAccordionComponent` | `features/contact/components/faq-accordion/` | FAQ section |
| `MapSocialComponent` | `features/contact/components/map-social/` | Map and social links |

---

## Services Architecture

### Core Services (3)

| Service | Path | Purpose |
|---------|------|---------|
| `AuthService` | `core/services/auth.service.ts` | User authentication, session management |
| `StorageService` | `core/services/storage.service.ts` | LocalStorage wrapper for data persistence |
| `ThemeService` | `core/services/theme.service.ts` | Light/dark theme management |

### Feature Services (1)

| Service | Path | Purpose |
|---------|------|---------|
| `AnalysisService` | `features/analyze/services/analysis.service.ts` | Skill analysis logic, matching algorithm |

---

## Routing Structure

### App Routes (7)

```typescript
// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'analyze', component: AnalyzeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'team', component: TeamComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
```

---

## Data Models

```typescript
// models/role.model.ts
export interface Role {
  name: string;
  skills: string[];
  icon: string;
  color: string;
  averageSalary: string;
  demand: 'High' | 'Medium' | 'Growing';
}

// models/user.model.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Student' | 'Job Seeker' | 'Fresher' | 'Professional';
  createdAt: Date;
}

// models/analysis.model.ts
export interface Analysis {
  id: string;
  userId: string;
  role: string;
  skills: string[];
  strongSkills: string[];
  missingSkills: string[];
  improvementAreas: string[];
  recommendations: string[];
  score: number;
  date: Date;
}

// models/report.model.ts
export interface Report {
  id: string;
  analysisId: string;
  userId: string;
  downloadUrl: string;
  createdAt: Date;
}
```

---

## State Management

### LocalStorage Keys

| Key | Purpose |
|-----|---------|
| `sgp_users` | Registered users array |
| `sgp_session` | Current user session |
| `sgp_reports_{email}` | User's analysis history |
| `sgp_theme` | User's theme preference |

### State Management Approach

- **LocalStorage** for client-side persistence (no backend)
- **BehaviorSubject** for reactive state in services
- **Component-level state** for UI interactions

---

## UI Components Library

### Reusable UI Patterns

| Pattern | Components | Description |
|---------|------------|-------------|
| **Cards** | `GlassCardComponent`, `FeatureCardComponent`, `RoleCardComponent`, `TestimonialCardComponent`, `ResourceCardComponent`, `TeamCardComponent`, `ValueCardComponent`, `ContactInfoCardComponent`, `CounterCardComponent` | Glass-morphism styled cards |
| **Charts** | `DonutChartComponent` | Circular progress visualization |
| **Navigation** | `NavbarComponent`, `BackToTopComponent` | Site navigation |
| **Feedback** | `ToastComponent`, `LoaderComponent` | User notifications |
| **Forms** | `AuthModalComponent`, `ContactFormComponent` | Form handling |
| **Hero Sections** | `PageHeroComponent` | Page headers |

---

## Feature Modules

### 1. HomeModule
- **Route**: `/`
- **Components**: Hero, StatsBar, FeaturesSection, CareerCategories, SkillPreview, WhyChooseUs, TestimonialsPreview
- **Lazy Loaded**: No (default route)

### 2. AboutModule
- **Route**: `/about`
- **Components**: IntroBanner, OurStory, MissionVision, IndustryProblems, AchievementStats, FutureGoals, CtaBanner
- **Lazy Loaded**: Yes

### 3. AnalyzeModule
- **Route**: `/analyze`
- **Components**: AnalyzeHero, AnalyzeForm, ResultDashboard, ProfessionSelection, SuggestedSkills, LearningResources, AnalysisHistory, CtaSection
- **Guards**: AuthGuard
- **Lazy Loaded**: Yes

### 4. HowItWorksModule
- **Route**: `/how-it-works`
- **Components**: WorkflowHero, StepByStep, ProfessionMatching, DashboardExplanation, ReportGeneration, CareerGrowth
- **Lazy Loaded**: Yes

### 5. ProfileModule
- **Route**: `/profile`
- **Components**: ProfileBanner, UserInfo, AnalysisHistory, DownloadedReports, CareerProgress, Achievements, CtaSection
- **Guards**: AuthGuard
- **Lazy Loaded**: Yes

### 6. TeamModule
- **Route**: `/team`
- **Components**: TeamHero, FounderSection, CoreTeam, TeamValues, WorkCulture, JoinUsCta
- **Lazy Loaded**: Yes

### 7. TestimonialsModule
- **Route**: `/testimonials`
- **Components**: TestimonialsHero, StudentStories, CareerTransformations, VideoGrid, CommunityTrust, CtaSection
- **Lazy Loaded**: Yes

### 8. ContactModule
- **Route**: `/contact`
- **Components**: ContactHero, ContactInfo, ContactForm, FaqAccordion, MapSocial
- **Lazy Loaded**: Yes

---

## Shared Module

### Components (14)
- Navbar, Footer, Loader, Toast, BackToTop, AuthModal
- SkillChip, DonutChart, FeatureCard, RoleCard
- TestimonialCard, ResourceCard, TeamCard, ValueCard, PageHero

### Directives (1)
- `AosDirective` - For scroll animations

### Pipes (1)
- `SafeHtmlPipe` - For HTML content rendering

---

## Core Module

### Services (3)
- `AuthService` - Authentication logic
- `StorageService` - LocalStorage abstraction
- `ThemeService` - Theme management

### Guards (1)
- `AuthGuard` - Protects authenticated routes

### Interceptors (1)
- `ErrorInterceptor` - Global error handling

---

## Assets Organization

```
assets/
├── images/
│   ├── analysis-dashboard.png
│   ├── career-dashboard.png
│   ├── history-timeline.png
│   ├── measure-progress.png
│   └── real-time-analysis.png
├── logo/
│   ├── skillgap-favicon.png
│   └── skillgap-logo.png
├── team/
│   └── muhammad-saqib.webp
└── icons/
    └── (custom SVG icons if needed)
```

---

## Environment Configuration

```typescript
// environments/environment.ts
export const environment = {
  production: false,
  appName: 'SkillGap Pro',
  version: '1.0.0',
  localStoragePrefix: 'sgp_'
};

// environments/environment.prod.ts
export const environment = {
  production: true,
  appName: 'SkillGap Pro',
  version: '1.0.0',
  localStoragePrefix: 'sgp_'
};
```

---

## Third-Party Libraries

| Library | Purpose |
|---------|---------|
| `@angular/forms` | Reactive forms |
| `@angular/router` | Routing |
| `bootstrap` | CSS framework |
| `bootstrap-icons` | Icons |
| `aos` | Scroll animations |
| `html2canvas` | PDF generation |
| `jspdf` | PDF export |
| `@ng-bootstrap/ng-bootstrap` | Bootstrap components |

---

## Build & Deployment

### Build Commands
```bash
ng build                    # Development build
ng build --prod            # Production build
ng build --prod --output-path=docs  # Build to docs folder
```

### Deployment
- **Static Hosting**: GitHub Pages, Netlify, Vercel
- **Output Directory**: `docs/` (for GitHub Pages)

---

## Summary

| Metric | Count |
|--------|-------|
| **Total Modules** | 11 |
| **Total Components** | 42 |
| **Total Services** | 4 |
| **Total Routes** | 7 |
| **Total Data Models** | 4 |
| **Shared Components** | 14 |
| **Feature Components** | 28 |

This architecture provides a clean, modular, and scalable structure for the Angular conversion of SkillGap Pro, maintaining all existing functionality while following Angular best practices.