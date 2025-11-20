# CodeForcer Peer Site — Frontend


## 📘 Project Overview

**CodeForcer Peer Site** is a comprehensive platform that connects Codeforces enthusiasts, allowing users to explore profiles, analyze coding statistics, and build a community of competitive programmers. The frontend provides an intuitive interface to interact with Codeforces data and peer networks.


[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-brightgreen)](https://codeforcerpeersite-frontend.vercel.app)  
![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)  
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)  
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)  
![React Hot Toast](https://img.shields.io/badge/React--Hot--Toast-Latest-FF6B6B?logo=react)  
![JWT](https://img.shields.io/badge/JWT-Auth-000000?logo=jsonwebtokens)  
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-13AA52?logo=mongodb)  
![Framer Motion](https://img.shields.io/badge/Framer--Motion-Animations-0055FF?logo=framer)  
![Tabler Icons](https://img.shields.io/badge/Tabler--Icons-UI-339AF0?logo=tabler)  
![FireCMS](https://img.shields.io/badge/FireCMS-CMS-FFA500?logo=firebase) 

### 🎯 Key Features

- 🔍 **Advanced User Search** - Filter Codeforces users by handle, organization, country, and rank
- 📊 **User Analytics** - Detailed profile insights with rating history and contest performance
- 🌐 **Peer Network** - Discover connections between users from same organizations/regions
- 📱 **Responsive Design** - Optimized experience across all devices
- ⚡ **Real-time Data** - Live updates from Codeforces API
- 🎨 **Modern UI/UX** - Clean, intuitive interface built with Tailwind CSS

---

## 🚀 Tech Stack & Architecture

### Core Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 15.0 | React framework with App Router |
| **TypeScript** | 5.0 | Type-safe development |
| **React** | 19 | UI library |
| **Tailwind CSS** | 3.4 | Utility-first styling |
| **Axios** | Latest | HTTP client for API calls |
| **React Context** | Built-in | State management |
| **[React Hot Toast](https://react-hot-toast.com/)** | Latest | Toast notifications |
| **[JWT](https://jwt.io/)** | Latest | Authentication tokens |
| **[Mongoose](https://mongoosejs.com/)** | Latest | MongoDB ODM |
| **[Framer Motion](https://www.framer.com/motion/)** | Latest | Smooth animations |
| **[Tabler Icons](https://tabler-icons.io/)** | Latest | Icon library |
| **[FireCMS](https://neat.firecms.co/)** | Latest | Headless CMS |

### Project Structure

```
codeforcerpeersite-frontend/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                # Root layout with global providers
│   ├── page.tsx                  # Homepage landing page
│   ├── profile/
│   │   ├── [handle]/             # Dynamic user profile routes
│   │   ├── page.tsx              # Profile list/search page
│   │   └── components/           # Profile-specific UI components
│   ├── peers/
│   │   ├── page.tsx              # Peer discovery page
│   │   ├── [id]/                 # Individual peer details
│   │   └── components/           # Peer network components
│   └── dashboard/
│       ├── page.tsx              # Analytics dashboard
│       └── components/           # Dashboard-specific components
│
├── components/                    # Reusable UI components
│   ├── ui/
│   │   ├── Button.tsx            # Button component
│   │   ├── Card.tsx              # Card container
│   │   ├── Input.tsx             # Input field
│   │   ├── Label.tsx             # Label
│   │---Loader.tsx                # loading  
│   │---NeatBackground.tsx        #background animation
│   ├── layout/
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Footer section
│   │   └── Navigation.tsx        # Main navigation menu
│   ├── profile/
│   │   ├── UserCard.tsx          # User profile card
│   │   └── ProfileHeader.tsx     # Profile header section
│
│
├── context/                       # React Context providers
│   ├── UserContext.tsx           # Global user state (profile, preferences)
│   ├── SearchContext.tsx         # Search state and filters
│   └── AnalyticsContext.tsx      # Analytics data caching
│
├── hooks/                         # Custom React hooks
│   ├── useCFUsers.ts            # Fetch and manage user profile data
│
├── lib/                           # Utilities and service layer
│   ├── api/
│   │   ├── api.ts           
│   ├── codeforce/
│   │   ├── fetchBatch.ts         # fetching data batch wise
│   ├── react-query/
│   │   ├── reactQuery.ts
│   ├── user/
│   │   ├── user.ts               # getting user profile
│   └── utils.ts                  # tailwind merger
│
├── public/                        # Static assets
│   ├── logo.svg
│
├── styles/                        # Global and component styles
│   ├── globals.css               # Global CSS imports and resets
│
├── .env.example                  # Environment variables template
├── components.json               # external prebuilt component
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Locked dependency versions
└── README.md                      # Project documentation
```

---

## 🔧 Local Development Setup

### Prerequisites

- **Node.js** 18.17 or later ([Download](https://nodejs.org/))
- **npm** 9.x or **yarn** 1.22+ (comes with Node.js)
- **Git** for version control ([Download](https://git-scm.com/))
- A code editor (VS Code recommended)

### Installation & Setup

#### Step 1: Clone the Repository

```bash
git clone https://github.com/pankajkoree/codeforcerpeersite-frontend.git
cd codeforcerpeersite-frontend
```

#### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

#### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.example`):

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://your-backend-api.com
```

#### Step 4: Start Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Create optimized production build
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
```

---

## 📊 Core Features Deep Dive

### User Profile System

The profile system provides comprehensive information about competitive programmers:

- **Comprehensive Profiles**: Display user rating, max rating, rank, organization, and country
- **Contest History**: Visualize rating changes over time with interactive charts
- **Problem Analysis**: Show solved problems count by difficulty and tags
- **Achievement Badges**: Recognize milestones and special accomplishments
- **Ranking Information**: Current and historical rank data
- **Organization Details**: University or company affiliation


### Peer Network Visualization

Discover and explore connections between users:

- **Organization Clusters**: Group users by universities/companies
- **Geographic Distribution**: Map view of users by country/region
- **Rating Comparisons**: Compare performance within peer groups
- **Connection Insights**: Analyze relationships and networks
- **Trend Analysis**: Identify rising stars and top performers



---

## 🎨 UI/UX Design System

### Component Architecture

- **Modular Design**: Reusable, self-contained components
- **Responsive Grid**: Flexbox and CSS Grid for adaptive layouts
- **Consistent Typography**: Tailwind's type scale with custom fonts
- **Color System**: Accessible color palette with dark mode support
- **Accessibility**: WCAG 2.1 compliant components

### Key Components

| Component | Purpose | Location |
|-----------|---------|----------|
| `UserCard` | Display user information | `components/profile/` |
| `Pagination` | Server-side pagination | `components/ui/` |
| `Header` | Navigation and branding | `components/layout/` |
| `LoadingSkeletons` | Placeholder during data load | `components/common/` |

### Design Principles

- **Consistency**: Unified design language across all pages
- **Clarity**: Clear hierarchy and intuitive navigation
- **Performance**: Optimized rendering and smooth animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Responsiveness**: Mobile-first approach with breakpoints

---

## 🔌 API Integration

### Backend API Communication

- **RESTful API** design with axios client
- **Error handling** and retry mechanisms for failed requests
- **Request/response interceptors** for logging and authentication
- **Type-safe API responses** with TypeScript generics
- **Rate limiting** to comply with API quotas
- **Caching strategies** to minimize API calls


### Interceptor Features

- Automatic token injection for authenticated requests
- Centralized error handling and logging
- Request/response transformation
- Automatic retry on timeout
- Response caching for performance

---

## 🚀 Deployment

### Vercel Deployment (Recommended)

Vercel is optimized for Next.js and provides seamless deployment:

1. **Push code to GitHub repository**
   ```bash
   git push origin main
   ```

2. **Connect repository to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project" and import your repository
   - Configure build settings (usually auto-detected)

3. **Configure environment variables in Vercel dashboard**
   - Go to Settings → Environment Variables
   - Add all variables from `.env.local`
   - Deploy from staging first if needed

4. **Deploy automatically on git push**
   - Each push to main triggers automatic deployment
   - Preview deployments for pull requests



### Build Optimization

- **Image Optimization**: Next.js Image component with lazy loading and responsive sizes
- **Code Splitting**: Automatic chunk splitting for faster loads
- **Dynamic Imports**: Lazy-load non-critical components
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Performance Monitoring**: Core Web Vitals tracking with Vercel Analytics

---



## 📈 Performance & Optimization

### Implemented Optimizations

- **Static Generation (SSG)**: Pre-rendered pages where possible for instant load
- **Incremental Static Regeneration (ISR)**: Automatic page updates without rebuilding
- **Dynamic Imports**: Lazy-load components to reduce initial bundle size
- **Image Optimization**: WebP format with responsive sizes and lazy loading
- **Code Splitting**: Automatic chunk splitting for faster loads
- **Caching Strategy**: Efficient client-side and server-side caching
- **CSS Optimization**: Unused CSS removal with PurgeCSS



---

## 🔮 Roadmap & Future Enhancements

### 🎯 Short Term (v1.1)

- [ ] Dark mode toggle implementation with persistent storage
- [ ] Enhanced search with fuzzy matching algorithm
- [ ] User comparison tool for head-to-head analysis
- [ ] Mobile app PWA support with offline capability
- [ ] Advanced filtering presets and saved searches

### 🚀 Medium Term (v1.2)

- [ ] Real-time notifications for contest reminders
- [ ] Advanced analytics with machine learning insights
- [ ] Social features (following, messaging, friend groups)
- [ ] Custom problem sets and personalized training plans
- [ ] Achievement system with milestones and badges

### 🔭 Long Term (v2.0)

- [ ] Integrated code editor for practice problems
- [ ] Virtual contests and peer competitions
- [ ] AI-powered performance recommendations
- [ ] Global leaderboards and achievements
- [ ] Community forums and discussion boards
- [ ] Mobile native applications (iOS/Android)

---


### Acknowledgments

- **Codeforces API** for providing comprehensive competitive programming data
- **Next.js Team** for the excellent React framework
- **Tailwind CSS** for the utility-first CSS framework
- **NEAT** for too beautiful animation
- **JWT** for providing security in the authentication
- **Axios** for seamless api integration
- **Tabler icons** for free svg icons


---

**Built with ❤️ for the Codeforces community**

*Star us on GitHub if you find this project helpful!* ⭐
