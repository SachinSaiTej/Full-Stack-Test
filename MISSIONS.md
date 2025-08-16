# Full Stack Developer Assessment

## Missions

### 1. Create a new route: `/api/creations/recent`
Goal: Add a new API endpoint to return the 5 most recently created NFTs.
- Use NestJS in `apps/api`
- Add a new controller method: `GET /api/creations/recent`
- Return only `id`, `name`, `image`, and `createdAt`
- Use Prisma to query the database

### 2. Add user email to `/api/users`
Goal: Extend the users API to return user emails.
- Modify the existing `GET /api/users` route
- Make suere the email is included in the returned data
- If the email field is missing in schema, add a migration

### 3. Create a new page `/explore/recent`
Goal: Display the 5 most recent NFTs using the new API route
- Create a new page in the `web` app
- Fetch data from `http://localhost:3002/api/creations/recent/`
- Display each NFT in a responsive grid (2-3 cards per row)
- Each card should include:
    - Image
    - Name
    - Created Date

## Submission Instructions
1. Push your code to a public GitHub repository.
2. Include a brief README with:
    - Your name
    - Any assumptions
    - Feature completed
    - Instructions to run the app
3. Share the GitHub link with us.

Your submission should take around 4-5 hours. Please manage your time accordingly. Thank you.