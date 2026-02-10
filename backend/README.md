# Innovation & Entrepreneurship API (Backend)

## Quick Start
```bash
cp .env.example .env
# Edit .env if needed
npm install
npm run seed
npm run dev
```
API: `http://localhost:5000`

## Auth
- `POST /api/auth/register` {name,email,password,role?}
- `POST /api/auth/login` {email,password}

## Ideas
- `GET /api/ideas` (Bearer token)
- `GET /api/ideas/me` (Bearer token)
- `POST /api/ideas` (Bearer token)
- `PUT /api/ideas/:id` (Bearer token)
- `DELETE /api/ideas/:id` (Bearer token owner/admin)

## Events
- `GET /api/events`
- `POST/PUT/DELETE` require mentor/admin token

## Metrics
- `GET /api/metrics` (Bearer token)
```json
{
  "totalIdeas": 3,
  "inReview": 1,
  "approved": 1,
  "incubating": 1,
  "eventsUpcoming": 2,
  "totalFunds": 200000
}
```
