## Description

- [Structure](#structure)
- [Prerequisites](#prerequisites)
- [Supported Environments](#supported-environments)
  - [Development Environment](#development-environment)
  - [Docker Environment](#docker-environment)
- [Testing](#testing)
- [Benchmark test](#benchmark-test)

## Structure

- `src/` - main folder, where project code source is present
  - `config/`- file with environment configurations exporting
  - `controllers/` - connect models to controllers functions
  - `databases/` - TypeORM setting and connections
  - `dtos/` - Data transfer object settings
  - `entities/`
  - `exceptions/` - set exemptions class
  - `http/` - preset list of request for developing and testing purpose
  - `logs/`
  - `middlewares/`
  - `migrations/`
  - `routes/`
  - `services/`
  - `tests/` - unit tests
  - `util/`
  - `app.ts` - set app middlewares, routes, settings
  - `server.ts` - set server

## Prerequisites

To start work with project, you should install dependencies.

```bash
$ yarn install
```

## Supported Environments

### Development Environment

Fill in the .env.development.local environment file

```bash
# watch development mode
$ yarn run dev
```

### Docker environment

Run docker container

```bash
$docker run --name express -p 3000:3000 -e -d express
```

### Production Environment

Fill in the .env.production.local environment file

```bash
$ yarn run start
```

## Testing

Fill in the .env.test.local environment file

```bash
# unit tests
$ yarn run test
```

## Benchmark test

[Apache benchmark for docker](https://hub.docker.com/r/jordi/ab)
Result of 10000 requests is [benchmark.txt](https://github.com/kozulova/express-backend/blob/main/benchmark.txt)

```bash
$ docker pull jordi/ab
$ docker build -t express-backend .
$ docker run --name express-backend -p 3000:3000 -d express-backend
$ docker run --rm jordi/ab -k -c 100 -n 10000 http://172.17.0.1:3000/articles/
```
