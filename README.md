## Project

This application runs a cronjob in the background checking if there are new tweets added to the database. If it finds 10 new tweets, it performs two tasks: 1) informs that 10 more new tweets were found and 2) it adds these new tweets in a bull queue and stores them in the redis and when reaches 10 tweets it makes console.log of queued tweets

## Running the app

- Clone the repository `git clone git@github.com:caleb-freitas/nestjs-schedule-queue.git`

- Go to the folder that was cloned: `cd nestjs-schedule-queue`

- Add database credentials to [.example.env.dev](./.example.env.dev) file and rename it to `.env.dev`

- Run `docker-compose up` to start the application

- Make 10 consecutive requests and check your terminal :p

## Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nest](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bull](https://optimalbits.github.io/bull/)
- [Redis](https://redis.io/)
