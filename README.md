# 🛡️ eGarant - Digital Warranty & Invoice Management System

eGarant is a modern Next.js 15 application that helps users store, organize, and manage their product warranties and invoices digitally. The system provides a comprehensive solution for tracking purchase history, warranty periods, and seller information.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components)
- **Database:** MySQL with Prisma ORM
- **Authentication:** JWT using [`jose`](https://github.com/panva/jose)
- **State Management:** Zustand
- **Validation:** Zod
- **Middleware:** JWT-based authentication
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI + Custom components
- **File Storage:** Pinata IPFS integration
- **Email:** Nodemailer for notifications
- **Tables:** TanStack React Table
- **Date Handling:** date-fns + React DatePicker

---

## ✨ Features

### 🔐 Authentication & Security

- Secure JWT-based authentication system
- User registration with email verification
- Password reset functionality
- Protected routes with middleware
- Secure password hashing with bcrypt

### 📦 Invoice & Warranty Management

- Add and manage product invoices with detailed information
- Track warranty periods for individual products
- Store invoice images using IPFS (Pinata)
- Comprehensive product tracking with quantities and prices
- Seller information management

### 📊 Dashboard & Analytics

- Overview dashboard with key metrics
- Total invoice count and product statistics
- Financial summaries in RSD (Serbian Dinar)
- Quick access to profile and invoice management

### 🎨 User Interface

- Fully responsive design with Tailwind CSS 4
- Modern UI components built with Radix UI
- Dark/light theme support
- Interactive data tables with filtering and sorting
- Form validation with real-time feedback
- Toast notifications with Sonner

### 🔧 Technical Features

- TypeScript for type safety
- Server-side rendering with Next.js 15
- Optimized database queries with Prisma
- Client-side state management with Zustand
- Form validation powered by Zod
- API route protection via middleware

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── (homepage)/        # Homepage components
│   ├── (protected)/       # Protected routes
│   │   ├── invoices/      # Invoice management
│   │   └── profile/       # User profile
│   ├── login/             # Authentication pages
│   ├── register/          # User registration
│   └── forgot-password/   # Password recovery
├── actions/               # Server actions
│   ├── auth/             # Authentication actions
│   ├── invoices/         # Invoice CRUD operations
│   ├── profile/          # Profile management
│   └── sellers/          # Seller management
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components
│   ├── layout/          # Layout components
│   ├── modals/          # Modal components
│   └── table/           # Data table components
├── lib/                 # Utility libraries
├── prisma/              # Database schema and migrations
├── store/               # Zustand state management
├── types/               # TypeScript type definitions
└── hooks/               # Custom React hooks
```

---

## 🗄️ Database Schema

The application uses a MySQL database with the following main entities:

- **Users**: User accounts with authentication data
- **Sellers**: Store and seller information
- **Invoices**: Invoice records with product details stored as JSON
- **Products**: Individual products with warranty information

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MySQL database
- Pinata account for IPFS storage

### Installation

**Clone the repository**

**Install dependencies**

**Environment Setup**  
Create a `.env.local` file with:

**Database Setup**

**Run Development Server**

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

---

## 🌐 Deployment

The application is built with Next.js 15 and can be deployed to:

- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

Make sure to set up all environment variables in your deployment platform.

---

## 📝 License

This project is licensed under the MIT License.

---

## 📧 Contact

For questions or feedback, reach out to [aleksandar@e-seo.info](mailto:aleksandar@e-seo.info)

---

## 🤝 Contributing

1.  Fork the repository
2.  Create a feature branch
3.  Make your changes
4.  Add tests if applicable
5.  Submit a pull request

---

_Built with ❤️ using Next.js 15 and modern web technologies_

```
npm run dev
```

```
npx prisma generate
npx prisma db push
```

```
DATABASE_URL="mysql://user:password@localhost:3306/db"
JWT_SECRET="your-jwt-secret"
PINATA_API_KEY="your-pinata-api-key"
PINATA_SECRET_KEY="your-pinata-secret"
EMAIL_SERVER="your-email-server-config"
```

```
npm install
```

```
git clone <repository-url>
cd frontend
```
