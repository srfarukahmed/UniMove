# UniMove Frontend

A frontend-only React + TypeScript implementation of the **UniMove Smart University Shuttle Management System**.

## Run

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Demo login

The frontend uses local demo authentication so every screen can be tested without a backend.

- Student: `student@unimove.edu` / any password
- Admin: `admin@unimove.edu` / any password

Select the role on the login screen before signing in.

## Included frontend features

### Student
Dashboard, shuttle search, route details, schedule, trip details, seat reservation, reservation management, QR boarding pass, bus tracking, notifications, feedback, issue reporting and profile management.

### Admin
Dashboard, student CRUD, driver CRUD, bus CRUD, route CRUD, stop CRUD, schedules, trips, reservations, waiting list, live tracking, QR boarding verification, maintenance CRUD, incidents, notification management, reports, analytics, settings and profile.

## Integration-ready pieces

- Axios API client and service files
- JWT header interceptor
- role-based protected routes
- Socket context placeholder for backend Socket.IO
- Leaflet/OpenStreetMap live map
- QR pass generation
- Recharts analytics
- responsive light/dark theme

The current UI uses realistic mock data so it is fully navigable as a standalone frontend. Replace mock data calls with the service layer when the Node/Express backend is available.

## Vercel Deployment

Framework preset: Vite

Build command:
```
npm run build
```

Output directory:
```
dist
```

Environment variables:
```
VITE_API_BASE_URL=your_backend_api_url
VITE_SOCKET_URL=your_socket_server_url
```

The included vercel.json enables SPA routing so direct navigation to React routes works after deployment.
