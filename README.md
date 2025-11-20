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
├── types/                         # TypeScript type definitions
│   ├── user.ts                   # User and profile types
│   ├── codeforces.ts             # Codeforces API data types
│   ├── api.ts                    # API request/response types
│   ├── search.ts                 # Search and filter types
│   └── common.ts                 # Common/shared types
│
├── public/                        # Static assets
│   ├── images/
│   │   ├── logo.svg              # Site logo
│   │   ├── icons/                # Icon set
│   │   └── backgrounds/          # Background images
│   ├── fonts/                    # Custom fonts
│   └── favicon.ico               # Site favicon
│
├── styles/                        # Global and component styles
│   ├── globals.css               # Global CSS imports and resets
│   ├── tailwind.css              # Tailwind directives
│   └── animations.css            # Custom animations
│
├── .env.local                    # Environment variables (local)
├── .env.example                  # Environment variables template
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
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
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.com
NEXT_PUBLIC_CODEFORCES_API_URL=https://codeforces.com/api

# Authentication (if implemented)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_SOCIAL_FEATURES=false

# Logging (optional)
NEXT_PUBLIC_LOG_LEVEL=info
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
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript compiler check
npm run format       # Format code with Prettier (if configured)
npm run analyze      # Analyze bundle size
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

```typescript
// User profile data structure
interface UserProfile {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  organization?: string;
  country?: string;
  contribution: number;
  friendOfCount: number;
  titlePhoto?: string;
  lastOnlineTime: number;
}
```

### Advanced Search & Filtering

Powerful search capabilities with multiple filter options:

```typescript
interface SearchFilters {
  handle: string;           // Codeforces handle
  organization: string;     // University/Company
  country: string;         // Country name
  rank: string;            // Codeforces rank (Expert, Candidate Master, etc.)
  minRating: number;       // Minimum rating filter
  maxRating: number;       // Maximum rating filter
  sortBy: 'rating' | 'handle' | 'country';
  limit: number;           // Results per page
  offset: number;          // Pagination offset
}
```

**Features:**
- Real-time search suggestions
- Multi-criteria filtering
- Saved search history
- Quick filters by rank and rating
- Export search results

### Peer Network Visualization

Discover and explore connections between users:

- **Organization Clusters**: Group users by universities/companies
- **Geographic Distribution**: Map view of users by country/region
- **Rating Comparisons**: Compare performance within peer groups
- **Connection Insights**: Analyze relationships and networks
- **Trend Analysis**: Identify rising stars and top performers

### Dashboard Analytics

Comprehensive analytics and performance tracking:

- **Progress Tracking**: Monitor rating progression over time
- **Contest Performance**: Analyze performance in recent contests
- **Peer Benchmarks**: Compare stats with similar users
- **Problem Statistics**: Track problem-solving patterns
- **Achievement Milestones**: Celebrate accomplishments
- **Custom Reports**: Generate personalized performance reports

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
| `SearchBar` | Search with real-time suggestions | `components/search/` |
| `RatingChart` | Interactive rating history visualization | `components/profile/` |
| `FilterPanel` | Advanced filtering sidebar | `components/search/` |
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

### Codeforces API Integration

The application integrates with the official Codeforces API to fetch competitive programming data:

```typescript
// Example API service structure
class CodeforcesService {
  async getUserProfile(handle: string): Promise<UserProfile>
  async getUserContestHistory(handle: string): Promise<Contest[]>
  async getUserRatingHistory(handle: string): Promise<RatingChange[]>
  async getUserSubmissions(handle: string): Promise<Submission[]>
  async getUserFriends(handle: string): Promise<User[]>
  async searchUsers(query: SearchFilters): Promise<User[]>
}
```

### Backend API Communication

- **RESTful API** design with axios client
- **Error handling** and retry mechanisms for failed requests
- **Request/response interceptors** for logging and authentication
- **Type-safe API responses** with TypeScript generics
- **Rate limiting** to comply with API quotas
- **Caching strategies** to minimize API calls

```typescript
// Example API call with error handling
try {
  const response = await codeforcesService.getUserProfile('tourist');
  // Handle successful response
} catch (error) {
  // Handle error appropriately
  console.error('Failed to fetch user profile:', error);
}
```

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

### Alternative Deployment Options

#### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t codeforcerpeersite .
docker run -p 3000:3000 --env-file .env.local codeforcerpeersite
```

#### Traditional Server Deployment

```bash
# Production build with optimizations
npm run build

# Start production server
npm start

# Use process manager for stability
npm install -g pm2
pm2 start "npm start" --name codeforcerpeersite
```

### Environment-Specific Builds

```bash
# Production build
npm run build

# Development build
NODE_ENV=development npm run build

# Staging build
NODE_ENV=staging npm run build
```

### Build Optimization

- **Image Optimization**: Next.js Image component with lazy loading and responsive sizes
- **Code Splitting**: Automatic chunk splitting for faster loads
- **Dynamic Imports**: Lazy-load non-critical components
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Performance Monitoring**: Core Web Vitals tracking with Vercel Analytics

---

## 🤝 Contributing Guide

We welcome contributions from developers of all skill levels! Please follow these guidelines to contribute effectively.

### Development Workflow

1. **Fork & Clone** the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/codeforcerpeersite-frontend.git
   cd codeforcerpeersite-frontend
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Follow code style guidelines**
   - Use TypeScript strictly with proper type definitions
   - Follow existing component patterns and naming conventions
   - Write clear, meaningful commit messages
   - Keep components small and focused

4. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   ```

5. **Submit a Pull Request**
   - Clear description of changes and motivation
   - Reference related issues (e.g., "Fixes #123")
   - Update documentation and types if needed
   - Ensure all checks pass

### Code Standards

| Aspect | Standard |
|--------|----------|
| **TypeScript** | Strict mode enabled, proper type definitions required |
| **Naming** | Descriptive variable and function names in camelCase |
| **Components** | Functional components with React hooks only |
| **Styling** | Tailwind CSS with consistent class ordering |
| **Imports** | Absolute imports using path aliases |
| **Documentation** | JSDoc comments for complex functions |

### Component Example

```typescript
// components/profile/UserCard.tsx
import { FC } from 'react';
import { UserProfile } from '@/types/user';

interface UserCardProps {
  user: UserProfile;
  onSelect?: (handle: string) => void;
}

export const UserCard: FC<UserCardProps> = ({ user, onSelect }) => {
  return (
    <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{user.handle}</h3>
      <p className="text-gray-600">Rating: {user.rating}</p>
      <button
        onClick={() => onSelect?.(user.handle)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View Profile
      </button>
    </div>
  );
};
```

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] TypeScript types are correct
- [ ] No console errors or warnings
- [ ] Changes are tested locally
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No unrelated changes included

---

## 🛠️ Troubleshooting

### Common Issues & Solutions

#### Build Failures

```bash
# Clear Next.js cache and reinstall dependencies
rm -rf .next node_modules
npm install
npm run build
```

**Common Causes:**
- Missing environment variables
- Incompatible Node.js version
- Corrupted node_modules cache

#### Environment Variables Not Working

- Ensure all variables are set in `.env.local`
- Restart dev server after changing variables (`npm run dev`)
- Check variable names for typos (must start with `NEXT_PUBLIC_` for client-side)
- Verify format: `KEY=value` (no spaces around `=`)

#### TypeScript Errors

```bash
# Run type checker to see all errors
npm run type-check

# Auto-fix some issues
npm run lint:fix
```

**Common Issues:**
- Missing type definitions
- Incorrect prop types
- Async/await usage errors

#### Port Already in Use

```bash
# Use a different port
npm run dev -- -p 3001

# Or kill the process using port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows (then taskkill)
```

#### API Connection Issues

- Verify backend server is running
- Check `NEXT_PUBLIC_API_BASE_URL` is correct
- Look for CORS issues in browser console
- Test API endpoint directly with curl/Postman

#### Module Not Found Errors

```bash
# Reinstall dependencies
npm install

# Clear cache
npm cache clean --force

# Check path aliases in tsconfig.json
```

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

### Monitoring & Metrics

- **Core Web Vitals**: LCP, FID, CLS tracking with Vercel Analytics
- **Error Tracking**: Sentry integration for production error monitoring
- **Analytics**: User behavior and feature usage tracking
- **Performance**: Lighthouse scores and bundle analysis

### Performance Checklist

```bash
# Analyze bundle size
npm run analyze

# Check performance
npm run build
npm start

# Lighthouse audit in Chrome DevTools (Ctrl+Shift+I)
```

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

## 📄 License & Attribution

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- **Codeforces API** for providing comprehensive competitive programming data
- **Next.js Team** for the excellent React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for seamless deployment experience
- **Community Contributors** for continuous improvements and feedback

---

## 🌐 Connect & Support

- **Report Issues**: [GitHub Issues](https://github.com/pankajkoree/codeforcerpeersite-frontend/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/pankajkoree/codeforcerpeersite-frontend/discussions)
- **Contributions**: PRs welcome! See [Contributing Guide](#-contributing-guide)
- **Discussions**: Start a conversation in GitHub Discussions

---

## 📞 Getting Help

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing GitHub Issues
3. Create a new issue with detailed information
4. Join community discussions for tips and advice

---

**Built with ❤️ for the Codeforces community**

*Star us on GitHub if you find this project helpful!* ⭐


## 📘 Project Overview

**CodeForcer Peer Site** is a comprehensive platform that connects Codeforces enthusiasts, allowing users to explore profiles, analyze coding statistics, and build a community of competitive programmers. The frontend provides an intuitive interface to interact with Codeforces data and peer networks.

### 🎯 Key Features

- 🔍 **Advanced User Search** - Filter Codeforces users by handle, organization, country, and rank
- 📊 **User Analytics** - Detailed profile insights with rating history and contest performance
- 🌐 **Peer Network** - Discover connections between users from same organizations/regions
- 📱 **Responsive Design** - Optimized experience across all devices
- ⚡ **Real-time Data** - Live updates from Codeforces API
- 🎨 **Modern UI/UX** - Clean, intuitive interface built with Tailwind CSS
- 🌓 **Dark Mode Support** - Theme preferences with persistent storage

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
│   │   ├── Modal.tsx             # Modal dialog
│   │   ├── Pagination.tsx        # Pagination controls
│   │   └── Badge.tsx             # Badge/tag component
│   ├── layout/
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Sidebar.tsx           # Collapsible sidebar
│   │   ├── Footer.tsx            # Footer section
│   │   └── Navigation.tsx        # Main navigation menu
│   ├── profile/
│   │   ├── UserCard.tsx          # User profile card
│   │   ├── RatingChart.tsx       # Rating history chart
│   │   ├── ContestHistory.tsx    # Contest performance table
│   │   └── ProfileHeader.tsx     # Profile header section
│   ├── search/
│   │   ├── SearchBar.tsx         # Search input with suggestions
│   │   ├── FilterPanel.tsx       # Advanced filter sidebar
│   │   ├── ResultsGrid.tsx       # Search results display
│   │   └── SortControls.tsx      # Sorting options
│   └── common/
│       ├── Loading.tsx           # Loading skeleton/spinner
│       ├── ErrorBoundary.tsx     # Error handling component
│       └── NotFound.tsx          # 404 page component
│
├── context/                       # React Context providers
│   ├── UserContext.tsx           # Global user state (profile, preferences)
│   ├── ThemeContext.tsx          # Theme management (dark/light mode)
│   ├── SearchContext.tsx         # Search state and filters
│   └── AnalyticsContext.tsx      # Analytics data caching
│
├── hooks/                         # Custom React hooks
│   ├── useUserData.ts            # Fetch and manage user profile data
│   ├── useSearch.ts              # Search functionality and filters
│   ├── useAnalytics.ts           # Analytics data processing
│   ├── usePagination.ts          # Pagination logic
│   ├── useLocalStorage.ts        # Local storage integration
│   └── useDebounce.ts            # Debounce hook for search input
│
├── lib/                           # Utilities and service layer
│   ├── api/
│   │   ├── client.ts             # Axios instance with interceptors
│   │   ├── codeforces.ts         # Codeforces API service
│   │   ├── users.ts              # User API endpoints
│   │   ├── peers.ts              # Peer network API endpoints
│   │   └── analytics.ts          # Analytics API endpoints
│   ├── utils/
│   │   ├── formatters.ts         # Data formatting utilities
│   │   ├── validators.ts         # Input validation functions
│   │   ├── calculations.ts       # Statistical calculations
│   │   └── helpers.ts            # General helper functions
│   ├── constants.ts              # App constants and configurations
│   └── errors.ts                 # Custom error handling
│
├── types/                         # TypeScript type definitions
│   ├── user.ts                   # User and profile types
│   ├── codeforces.ts             # Codeforces API data types
│   ├── api.ts                    # API request/response types
│   ├── search.ts                 # Search and filter types
│   └── common.ts                 # Common/shared types
│
├── public/                        # Static assets
│   ├── images/
│   │   ├── logo.svg              # Site logo
│   │   ├── icons/                # Icon set
│   │   └── backgrounds/          # Background images
│   ├── fonts/                    # Custom fonts
│   └── favicon.ico               # Site favicon
│
├── styles/                        # Global and component styles
│   ├── globals.css               # Global CSS imports and resets
│   ├── tailwind.css              # Tailwind directives
│   └── animations.css            # Custom animations
│
├── .env.local                    # Environment variables (local)
├── .env.example                  # Environment variables template
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.js                # Next.js configuration
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
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api.com
NEXT_PUBLIC_CODEFORCES_API_URL=https://codeforces.com/api

# Authentication (if implemented)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_SOCIAL_FEATURES=false

# Logging (optional)
NEXT_PUBLIC_LOG_LEVEL=info
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
npm run lint:fix     # Fix ESLint issues automatically
npm run type-check   # Run TypeScript compiler check
npm run format       # Format code with Prettier (if configured)
npm run analyze      # Analyze bundle size
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

```typescript
// User profile data structure
interface UserProfile {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  organization?: string;
  country?: string;
  contribution: number;
  friendOfCount: number;
  titlePhoto?: string;
  lastOnlineTime: number;
}
```

### Advanced Search & Filtering

Powerful search capabilities with multiple filter options:

```typescript
interface SearchFilters {
  handle: string;           // Codeforces handle
  organization: string;     // University/Company
  country: string;         // Country name
  rank: string;            // Codeforces rank (Expert, Candidate Master, etc.)
  minRating: number;       // Minimum rating filter
  maxRating: number;       // Maximum rating filter
  sortBy: 'rating' | 'handle' | 'country';
  limit: number;           // Results per page
  offset: number;          // Pagination offset
}
```

**Features:**
- Real-time search suggestions
- Multi-criteria filtering
- Saved search history
- Quick filters by rank and rating
- Export search results

### Peer Network Visualization

Discover and explore connections between users:

- **Organization Clusters**: Group users by universities/companies
- **Geographic Distribution**: Map view of users by country/region
- **Rating Comparisons**: Compare performance within peer groups
- **Connection Insights**: Analyze relationships and networks
- **Trend Analysis**: Identify rising stars and top performers

### Dashboard Analytics

Comprehensive analytics and performance tracking:

- **Progress Tracking**: Monitor rating progression over time
- **Contest Performance**: Analyze performance in recent contests
- **Peer Benchmarks**: Compare stats with similar users
- **Problem Statistics**: Track problem-solving patterns
- **Achievement Milestones**: Celebrate accomplishments
- **Custom Reports**: Generate personalized performance reports

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
| `SearchBar` | Search with real-time suggestions | `components/search/` |
| `RatingChart` | Interactive rating history visualization | `components/profile/` |
| `FilterPanel` | Advanced filtering sidebar | `components/search/` |
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

### Codeforces API Integration

The application integrates with the official Codeforces API to fetch competitive programming data:

```typescript
// Example API service structure
class CodeforcesService {
  async getUserProfile(handle: string): Promise<UserProfile>
  async getUserContestHistory(handle: string): Promise<Contest[]>
  async getUserRatingHistory(handle: string): Promise<RatingChange[]>
  async getUserSubmissions(handle: string): Promise<Submission[]>
  async getUserFriends(handle: string): Promise<User[]>
  async searchUsers(query: SearchFilters): Promise<User[]>
}
```

### Backend API Communication

- **RESTful API** design with axios client
- **Error handling** and retry mechanisms for failed requests
- **Request/response interceptors** for logging and authentication
- **Type-safe API responses** with TypeScript generics
- **Rate limiting** to comply with API quotas
- **Caching strategies** to minimize API calls

```typescript
// Example API call with error handling
try {
  const response = await codeforcesService.getUserProfile('tourist');
  // Handle successful response
} catch (error) {
  // Handle error appropriately
  console.error('Failed to fetch user profile:', error);
}
```

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

### Alternative Deployment Options

#### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t codeforcerpeersite .
docker run -p 3000:3000 --env-file .env.local codeforcerpeersite
```

#### Traditional Server Deployment

```bash
# Production build with optimizations
npm run build

# Start production server
npm start

# Use process manager for stability
npm install -g pm2
pm2 start "npm start" --name codeforcerpeersite
```

### Environment-Specific Builds

```bash
# Production build
npm run build

# Development build
NODE_ENV=development npm run build

# Staging build
NODE_ENV=staging npm run build
```

### Build Optimization

- **Image Optimization**: Next.js Image component with lazy loading and responsive sizes
- **Code Splitting**: Automatic chunk splitting for faster loads
- **Dynamic Imports**: Lazy-load non-critical components
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Performance Monitoring**: Core Web Vitals tracking with Vercel Analytics

---

## 🤝 Contributing Guide

We welcome contributions from developers of all skill levels! Please follow these guidelines to contribute effectively.

### Development Workflow

1. **Fork & Clone** the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/codeforcerpeersite-frontend.git
   cd codeforcerpeersite-frontend
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Follow code style guidelines**
   - Use TypeScript strictly with proper type definitions
   - Follow existing component patterns and naming conventions
   - Write clear, meaningful commit messages
   - Keep components small and focused

4. **Test your changes**
   ```bash
   npm run lint
   npm run type-check
   ```

5. **Submit a Pull Request**
   - Clear description of changes and motivation
   - Reference related issues (e.g., "Fixes #123")
   - Update documentation and types if needed
   - Ensure all checks pass

### Code Standards

| Aspect | Standard |
|--------|----------|
| **TypeScript** | Strict mode enabled, proper type definitions required |
| **Naming** | Descriptive variable and function names in camelCase |
| **Components** | Functional components with React hooks only |
| **Styling** | Tailwind CSS with consistent class ordering |
| **Imports** | Absolute imports using path aliases |
| **Documentation** | JSDoc comments for complex functions |

### Component Example

```typescript
// components/profile/UserCard.tsx
import { FC } from 'react';
import { UserProfile } from '@/types/user';

interface UserCardProps {
  user: UserProfile;
  onSelect?: (handle: string) => void;
}

export const UserCard: FC<UserCardProps> = ({ user, onSelect }) => {
  return (
    <div className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold">{user.handle}</h3>
      <p className="text-gray-600">Rating: {user.rating}</p>
      <button
        onClick={() => onSelect?.(user.handle)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View Profile
      </button>
    </div>
  );
};
```

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] TypeScript types are correct
- [ ] No console errors or warnings
- [ ] Changes are tested locally
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No unrelated changes included

---

## 🛠️ Troubleshooting

### Common Issues & Solutions

#### Build Failures

```bash
# Clear Next.js cache and reinstall dependencies
rm -rf .next node_modules
npm install
npm run build
```

**Common Causes:**
- Missing environment variables
- Incompatible Node.js version
- Corrupted node_modules cache

#### Environment Variables Not Working

- Ensure all variables are set in `.env.local`
- Restart dev server after changing variables (`npm run dev`)
- Check variable names for typos (must start with `NEXT_PUBLIC_` for client-side)
- Verify format: `KEY=value` (no spaces around `=`)

#### TypeScript Errors

```bash
# Run type checker to see all errors
npm run type-check

# Auto-fix some issues
npm run lint:fix
```

**Common Issues:**
- Missing type definitions
- Incorrect prop types
- Async/await usage errors

#### Port Already in Use

```bash
# Use a different port
npm run dev -- -p 3001

# Or kill the process using port 3000
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows (then taskkill)
```

#### API Connection Issues

- Verify backend server is running
- Check `NEXT_PUBLIC_API_BASE_URL` is correct
- Look for CORS issues in browser console
- Test API endpoint directly with curl/Postman

#### Module Not Found Errors

```bash
# Reinstall dependencies
npm install

# Clear cache
npm cache clean --force

# Check path aliases in tsconfig.json
```

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

### Monitoring & Metrics

- **Core Web Vitals**: LCP, FID, CLS tracking with Vercel Analytics
- **Error Tracking**: Sentry integration for production error monitoring
- **Analytics**: User behavior and feature usage tracking
- **Performance**: Lighthouse scores and bundle analysis

### Performance Checklist

```bash
# Analyze bundle size
npm run analyze

# Check performance
npm run build
npm start

# Lighthouse audit in Chrome DevTools (Ctrl+Shift+I)
```

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

## 📄 License & Attribution

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- **Codeforces API** for providing comprehensive competitive programming data
- **Next.js Team** for the excellent React framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for seamless deployment experience
- **Community Contributors** for continuous improvements and feedback

---

## 🌐 Connect & Support

- **Report Issues**: [GitHub Issues](https://github.com/pankajkoree/codeforcerpeersite-frontend/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/pankajkoree/codeforcerpeersite-frontend/discussions)
- **Contributions**: PRs welcome! See [Contributing Guide](#-contributing-guide)
- **Discussions**: Start a conversation in GitHub Discussions

---

## 📞 Getting Help

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing GitHub Issues
3. Create a new issue with detailed information
4. Join community discussions for tips and advice

---

**Built with ❤️ for the Codeforces community**

*Star us on GitHub if you find this project helpful!* ⭐