# Full-Stack Todo Application

A complete full-stack Todo application with authentication using Next.js, Express, and JSON file-based storage.

## Features

- **Authentication**: User signup/login with bcrypt password hashing
- **Todo Management**: Add, delete, toggle complete/incomplete todos
- **User Isolation**: Each user only sees their own todos
- **Validation**: Zod validation for all inputs
- **Security**: Hashed passwords, sanitized inputs, proper error handling
- **Responsive UI**: Clean, modern interface with Tailwind CSS

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- NextAuth.js (Credentials Provider)
- TypeScript
- Tailwind CSS
- Axios
- Zod (validation)

### Backend
- Node.js + Express
- bcryptjs (password hashing)
- UUID (unique IDs)
- Zod (validation)
- CORS
- JSON file storage

## Project Structure

```
todo-app/
├── backend/
│   ├── data/
│   │   ├── users.json          # User data storage
│   │   └── todos.json          # Todo data storage
│   ├── routes/
│   │   ├── auth.js             # Auth routes (signup, login)
│   │   └── todos.js            # Todo CRUD routes
│   ├── utils/
│   │   ├── db.js               # Database utilities
│   │   └── validation.js       # Zod validation schemas
│   ├── server.js               # Express server entry
│   ├── package.json
│   └── .env
│
└── frontend/
    ├── app/
    │   ├── api/auth/[...nextauth]/
    │   │   └── route.ts        # NextAuth API route
    │   ├── dashboard/
    │   │   └── page.tsx        # Dashboard (protected)
    │   ├── login/
    │   │   └── page.tsx        # Login page
    │   ├── signup/
    │   │   └── page.tsx        # Signup page
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx            # Home (redirects)
    ├── components/
    │   ├── DashboardClient.tsx # Todo management UI
    │   └── SessionProvider.tsx # NextAuth session provider
    ├── lib/
    │   └── auth.ts             # NextAuth configuration
    ├── types/
    │   └── next-auth.d.ts      # TypeScript types
    ├── middleware.ts           # Route protection
    ├── package.json
    └── .env.local
```

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Clone/Create Project

```bash
# Navigate to project directory
cd todo-app
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

Dependencies installed:
- express
- cors
- dotenv
- bcryptjs
- uuid
- zod

### Step 3: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

Dependencies installed:
- next
- next-auth
- react
- react-dom
- axios
- zod
- tailwindcss
- typescript

### Step 4: Environment Configuration

Backend `.env` (already created):
```env
PORT=5000
NODE_ENV=development
```

Frontend `.env.local` (already created):
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**Important**: Change `NEXTAUTH_SECRET` to a secure random string for production.

### Step 5: Start the Backend Server

```bash
cd backend
npm run dev
```

Server will start on `http://localhost:5000`

You should see:
```
=================================
🚀 Server running on port 5000
📁 Environment: development
🔗 API URL: http://localhost:5000/api
=================================
```

### Step 6: Start the Frontend

Open a new terminal:

```bash
cd frontend
npm run dev
```

Frontend will start on `http://localhost:3000`

### Step 7: Access the Application

Open your browser and navigate to:
- `http://localhost:3000` - Home (redirects to login or dashboard)
- `http://localhost:3000/login` - Login page
- `http://localhost:3000/signup` - Signup page
- `http://localhost:3000/dashboard` - Todo dashboard (protected)

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Authenticate user
- `GET /api/auth/user/:id` - Get user by ID

### Todos
- `GET /api/todos?userId=:id` - Get user's todos
- `POST /api/todos` - Create new todo
- `PATCH /api/todos/:id` - Update todo (toggle complete)
- `DELETE /api/todos/:id` - Delete todo

## Validation Rules

### Signup
- **Name**: Minimum 3 characters, maximum 100
- **Email**: Valid email format
- **Password**: Minimum 6 characters, must contain at least one number

### Login
- **Email**: Valid email format
- **Password**: Required

### Todo
- **Text**: Required, minimum 1 character, maximum 500

## Example Data

### users.json
```json
[
  {
    "id": "uuid-string",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "$2a$10$...",
    "createdAt": "2024-01-15T10:00:00.000Z"
  }
]
```

### todos.json
```json
[
  {
    "id": "uuid-string",
    "text": "Buy groceries",
    "completed": false,
    "userId": "user-uuid",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

## Testing the Application

1. **Sign Up**: Create a new account at `/signup`
2. **Login**: Sign in at `/login`
3. **Add Todos**: Use the input field to add new todos
4. **Complete Todos**: Click the checkbox to mark as complete
5. **Delete Todos**: Click the trash icon to remove
6. **Sign Out**: Click the sign out button to logout

## Common Issues & Solutions

### Issue: "Cannot find module"
**Solution**: Run `npm install` in both backend and frontend directories.

### Issue: "Port already in use"
**Solution**: Change the port in `.env` file or kill the process using the port.

### Issue: "NEXTAUTH_SECRET missing"
**Solution**: Make sure `.env.local` exists in frontend with NEXTAUTH_SECRET set.

### Issue: CORS errors
**Solution**: Backend CORS is configured for `http://localhost:3000`. Ensure both servers are running.

## Development Commands

### Backend
```bash
npm run dev      # Start with nodemon (auto-restart)
npm start        # Start with node
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

## Security Features

- ✅ Passwords hashed with bcrypt (10 salt rounds)
- ✅ Input validation with Zod
- ✅ Sanitized user inputs
- ✅ Protected routes with NextAuth middleware
- ✅ User isolation - users can only access their own data
- ✅ Error handling without exposing sensitive information

## Production Considerations

1. **Change NEXTAUTH_SECRET** to a secure random string
2. **Use HTTPS** for all API calls
3. **Add rate limiting** to prevent brute force attacks
4. **Use a production database** (PostgreSQL, MongoDB) instead of JSON files
5. **Add CSRF protection**
6. **Set up proper logging**
7. **Use environment-specific configurations**

## License

MIT
