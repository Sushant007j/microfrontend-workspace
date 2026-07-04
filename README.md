# Enterprise Angular Micro Frontend Workspace

This workspace contains a Native Module Federation-based Angular 21 micro frontend setup with a shell host and three remotes: dashboard, products, and users.

## Architecture

- Shell host: orchestrates layout, navigation, auth, and shared state.
- Dashboard remote: displays aggregated metrics from shared services.
- Products remote: lists dummy products and updates the shared selected product state.
- Users remote: shows the logged user and selected product from shared state.
- Shared library: hosts models, services, guards, interceptors, pipes, and directives.

## Run locally

```bash
npm install
npm run start
```

Then open the shell at http://localhost:4200.

## Build

```bash
npm run build
```

## Test

```bash
npm run test -- --watch=false
```
