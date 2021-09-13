# DFZ Service - WebStack

## Screenshots

![Screenshot](screenshot_animated.gif?raw=true "Desktop Screenshots")

## Description

Built mostly as experimentation with GraphQL. Not Deployment ready yet ;)

Designed for use in workshops, for management of webstore, workshop jobs, parts, communication between employees.

Will be building a Gatsby/Next.js Webstore to go within this stack (Recreation of DFZStoreAngular).

## Features

- GraphQL API
- Job Management
- Automatic Updates - Live Job overview
- Parts Management
- Auth0 Authentication using RBAC

## Currently in development

- User Administration
- Messaging system
- Attachment uploads system (PDF & Images with generated thumbnails)
- Re-Styling
- Moving UI state into redux, make it user configurable

## Todos (Not in any particular order)

- Move to MobX
- Per-Employee Calendars
- Clock In/Out System
- Push Notifications
- Generate Printable cards with QR codes to identify machines in storage
- Dockerization
- User Activity Logging

## Live Demo

[https://workshop.dufferz.dev](https://workshop.dufferz.dev)

Test user: `testuser@testuser.dev`

Password: `sGgNEw+FK%2GxpCG`

Test user has scopes asides from delete applied. User Signup is disabled.

## Starting

It is possible to use an SSH tunnel for access from different devices (Otherwise Auth0 moans a lot)

```bash
    ssh -N -L 127.0.0.1:3000:127.0.0.1:3000 user@yourserversip
```

## License

Released under MIT License.
