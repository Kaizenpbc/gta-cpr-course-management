# GTA CPR Course Management System

A comprehensive course management system for GTA CPR, featuring multiple portals for different user roles and secure authentication.

## Features

- **Multiple Portal Access**
  - Organization Portal
  - Instructor Portal
  - Course Management Portal
  - System Admin Portal
  - Accounting Portal

- **Secure Authentication**
  - JWT-based authentication
  - Role-based access control
  - Protected routes

- **Modern Tech Stack**
  - React with TypeScript
  - Node.js backend
  - PostgreSQL database
  - Material-UI components

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Kaizenpbc/gta-cpr-course-management.git
cd gta-cpr-course-management
```

2. Install dependencies for both client and server:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:

Create a `.env` file in the server directory:
```env
PORT=9005
DB_USER=postgres
DB_PASSWORD=gtacpr
DB_HOST=localhost
DB_PORT=5432
DB_NAME=educational_system
JWT_SECRET=cpr_secret_key_2024
```

## Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```
The server will run on http://localhost:9005

2. Start the frontend development server:
```bash
cd client
npm start
```
The client will run on http://localhost:3000

## Development

### Available Scripts

In the client directory:
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

In the server directory:
- `npm run dev` - Runs the server in development mode with hot reload
- `npm run build` - Builds the TypeScript code
- `npm start` - Runs the compiled code

### Project Structure

```
gta-cpr-course-management/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.tsx       # Main application component
│   │   └── index.tsx     # Application entry point
│   └── package.json
│
└── server/                # Node.js backend
    ├── src/
    │   ├── routes/       # API routes
    │   ├── database/     # Database configuration
    │   └── index.ts      # Server entry point
    └── package.json
```

## Testing

For testing purposes, you can use the following credentials:
- Username: Michael or Coujoe
- Password: Any password will work (for development)
- Portal: Select any portal from the dropdown

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

For support, please contact the development team or create an issue in the GitHub repository. 