# Online Training Feature

## Purpose
The Online Training feature showcases various online fitness training programs, packages, and services offered by the trainer.

## Directory Structure
```
online-training/
├── components/
│   ├── OnlineTrainingPage.tsx    # Main page component
│   └── index.ts                 # Component exports
├── context/                     # State management (if needed)
├── hooks/                       # Custom hooks (if needed)
├── helpers/
│   └── constants.ts            # Feature constants
├── services/                    # API services (if needed)
├── context.md                  # This documentation file
└── index.tsx                   # Feature entry point
```

## Components

### OnlineTrainingPage
Main component for the online training programs page.

**Props:** None

**Usage:**
```tsx
import { OnlineTrainingPage } from '@/features/online-training';

<OnlineTrainingPage />
```

## State Management
Currently, this feature does not require complex state management. If needed in the future, add Context/Reducer pattern here.

## API Integration
Future API endpoints:
- GET `/api/training-programs` - Fetch available training programs
- GET `/api/training-programs/:id` - Fetch specific program details
- POST `/api/training-programs/enroll` - Enroll in a program

## Dependencies
- React
- React Router (for navigation)
- Tailwind CSS (for styling)

## Future Enhancements
- Training program cards with pricing
- Program comparison table
- Enrollment forms
- Video previews
- Program filtering and search
- Testimonials from online clients
- FAQ section
