## Description

- [Structure](#structure)
- [Prerequisites](#prerequisites)
- [Supported Environments](#supported-environments)
  - [Development Environment](#development-environment)
- [Testing](#testing)

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
