<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# NestJS API with MongoDB and GraphQL

This is a NestJS application with MongoDB integration, GraphQL API, and JWT authentication.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB running on localhost:27017
- npm or yarn

## Installation

```bash
npm install
```

## Environment Configuration

1. Copy the environment template:
```bash
cp .env.example .env
```

2. Update the `.env` file with your configuration:
```env
# Application Configuration
NODE_ENV=development
PORT=3000

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/nest

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h

# GraphQL Configuration
GRAPHQL_PLAYGROUND=true
GRAPHQL_INTROSPECTION=true
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Application environment | `development` |
| `PORT` | Server port | `3000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/nest` |
| `JWT_SECRET` | JWT signing secret | `your-secret-key` |
| `JWT_EXPIRES_IN` | JWT token expiration | `24h` |
| `GRAPHQL_PLAYGROUND` | Enable GraphQL playground | `true` |
| `GRAPHQL_INTROSPECTION` | Enable GraphQL introspection | `true` |

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## MongoDB Connection

The application connects to MongoDB using the `MONGODB_URI` environment variable. Make sure MongoDB is running before starting the application.

## GraphQL Playground

Once the application is running, you can access the GraphQL Playground at:
`http://localhost:3000/graphql`

## Authentication

The application includes JWT-based authentication with the following features:

### User Registration
Users can register with:
- First Name
- Last Name
- Email (unique)
- Phone (unique)
- Password (hashed with bcrypt)

### User Login
Users can login using:
- Phone number
- Password

## Available GraphQL Operations

### Authentication Mutations

1. **Register new user**
```graphql
mutation {
  register(
    firstName: "John"
    lastName: "Doe"
    email: "john@example.com"
    phone: "0812345678"
    password: "password123"
  ) {
    user {
      _id
      firstName
      lastName
      email
      phone
      createdAt
    }
    access_token
  }
}
```

2. **Login user**
```graphql
mutation {
  login(phone: "0812345678", password: "password123") {
    user {
      _id
      firstName
      lastName
      email
      phone
      createdAt
    }
    access_token
  }
}
```

### User Queries

1. **Get all users**
```graphql
query {
  users {
    _id
    firstName
    lastName
    email
    phone
    createdAt
  }
}
```

2. **Get user by ID**
```graphql
query {
  user(id: "user_id_here") {
    _id
    firstName
    lastName
    email
    phone
    createdAt
  }
}
```

### User Mutations

1. **Create user**
```graphql
mutation {
  createUser(
    firstName: "Jane"
    lastName: "Doe"
    email: "jane@example.com"
    phone: "0898765432"
    password: "password123"
  ) {
    _id
    firstName
    lastName
    email
    phone
    createdAt
  }
}
```

2. **Update user**
```graphql
mutation {
  updateUser(
    id: "user_id_here"
    firstName: "Jane"
    lastName: "Smith"
    email: "jane.smith@example.com"
    phone: "0898765432"
  ) {
    _id
    firstName
    lastName
    email
    phone
    createdAt
  }
}
```

3. **Delete user**
```graphql
mutation {
  removeUser(id: "user_id_here") {
    _id
    firstName
    lastName
    email
    phone
    createdAt
  }
}
```

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds of 10
- **JWT Tokens**: Authentication tokens expire after 24 hours (configurable)
- **Unique Constraints**: Email and phone numbers must be unique
- **Input Validation**: All inputs are validated through GraphQL schema
- **Environment Variables**: Secure configuration management

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use a strong `JWT_SECRET`
3. Configure a production MongoDB instance
4. Set appropriate port and other environment variables
5. Consider using a process manager like PM2

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
# nestjs_graphql
