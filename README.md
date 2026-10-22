# 🍰 Sweet Tooth: Dessert Ordering Web App

A static dessert ordering website built with HTML5, CSS3, JavaScript/jQuery, and Bootstrap 5.

**Main feature:** Browse the dessert menu, select desserts using the ordering interface, add items to the cart, and see the cart total update automatically.

This project uses Docker Compose and Nginx Alpine to serve the website. You do not need to install Node.js or a separate web server on your computer.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Environment Configuration](#environment-configuration)
- [Docker Configuration and Ports](#docker-configuration-and-ports)
- [Verify the Application](#verify-the-application)
- [Useful Docker Commands](#useful-docker-commands)
- [Troubleshooting](#troubleshooting)
- [Known Limitations](#known-limitations)
- [Project Information](#project-information)

---

## Project Overview

Sweet Tooth is a web-based dessert ordering application that provides a simple interface for browsing desserts and managing a shopping cart.

### Main Features

- Browse the available dessert menu.
- Select desserts through the ordering interface.
- Add items to the cart.
- View the cart count and automatically updated total price.
- Run the website inside a Docker container using Nginx Alpine.

### Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and layout |
| JavaScript/jQuery | Client-side interactions |
| Bootstrap 5 | Responsive interface components |
| Docker | Containerization |
| Docker Compose | Application container configuration and lifecycle management |
| Nginx Alpine | Serves the static website |

---

## Prerequisites

Before starting, make sure you have:

- **Git:** To clone the repository. [Download Git](https://git-scm.com/)
- **Docker Desktop:** Installed and running. [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
- **Web browser:** To access and test the application.
- **Available host port:** Port `8080` must be available by default.
- **Internet connection:** Required to clone the repository and download Docker images during the initial setup.

### Start Docker Desktop First

1. Open Docker Desktop.
2. Wait until the Docker Engine has finished starting.
3. Open Terminal on macOS/Linux or PowerShell on Windows.
4. Verify that Docker is accessible:

```bash
docker info
```

If Docker displays system information without a daemon connection error, continue with the setup.

**Important:** Do not run Docker Compose commands while Docker Desktop is still starting. Doing so may cause Docker API or daemon connection errors.

### Docker Versions

Docker Engine and Docker Compose versions can differ depending on the operating system and Docker Desktop release.

Check the installed versions with:

```bash
docker --version
docker compose version
```

**Tested environment:** Record the exact versions used when testing this project.

- Operating system: macOS  (Apple Silicon)
- Docker Engine:  29.9.1, build dfc520d
- Docker Compose: v5.6.0
  
---

## Quick Start

Follow these steps in order.

### 1. Clone the repository

```bash
git clone -b chore/dockerize-project https://github.com/sheirenarnelia/SweetTooth.git
cd SweetTooth
```

These commands download the project files from the `chore/dockerize-project` branch and move into the project directory.

### 2. Create the environment configuration file

**macOS / Linux:**

```bash
cp .env.example .env
```

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

The `.env` file stores local configuration values for Docker Compose. The provided `.env.example` file is a template and must not contain real secrets.

### 3. Build and start the application

Make sure Docker Desktop is running and the Docker Engine is ready.

```bash
docker compose up --build -d
```

This command builds the application image if necessary, creates or updates the container, and starts it in detached mode.

### 4. Open the application

Visit the following URL in your browser:

**http://localhost:8080**

You should see the Sweet Tooth home page.

---

## Environment Configuration

The `.env.example` file provides sample configuration values. Copy it to `.env` before starting the application.

Example configuration:

```dotenv
APP_PORT=8080
CONTAINER_PORT=80
```

| Variable | Purpose | Default |
|---|---|---|
| `APP_PORT` | Host port used to access the website from your computer | `8080` |
| `CONTAINER_PORT` | Reference value for the web server's container port | `80` |

The container's Nginx web server listens on port `80`. Docker Compose defines how the host port maps to the container port.

**Important:** The actual behavior of these variables depends on how they are referenced in `compose.yaml`. In particular, changing `CONTAINER_PORT` will only affect the port mapping if the Compose configuration uses that variable.

### Environment File Safety

- Commit `.env.example` to the repository as a safe configuration template.
- Keep machine-specific settings in `.env`.
- Do not put passwords, API keys, access tokens, or other real secrets in `.env.example`.
- If `.env` contains private information, do not commit it to Git.

---

## Docker Configuration and Ports

The application is served by Nginx inside a Docker container.

| Setting | Value |
|---|---|
| Application URL | `http://localhost:8080` |
| Default host port | `8080` |
| Container web server port | `80` |
| Web server | Nginx Alpine |
| Container orchestration | Docker Compose |

The expected port mapping is:

```text
Your computer (host port 8080)
              |
              v
Docker container (port 80)
              |
              v
        Nginx Alpine
              |
              v
       Static website files
```

If port `8080` is already in use, configure another available host port through `APP_PORT`, provided that the variable is used by the port mapping in `compose.yaml`.

For example, if you change `APP_PORT` to `8081`, the application URL becomes `http://localhost:8081`.

---

## Verify the Application

After starting the application, perform the following checks.

| ID | Check | Command or Action | Expected Result |
|---|---|---|---|
| V-01 | Container status | `docker compose ps` | The application container is running. |
| V-02 | Website response | `curl -I http://localhost:8080` | An HTTP success response, normally `200 OK`. |
| V-03 | Main feature | Open the menu and add a dessert to the cart. | The cart count and total price update. |
| V-04 | Restart behavior | Run `docker compose restart` and reload the page. | The container starts again and the website remains accessible. |

Run these commands from the project directory containing `compose.yaml`.

On Windows, if `curl` behaves differently in PowerShell, you can open the application in your browser instead.

---

## Useful Docker Commands

Run the following commands from the project directory.

| Goal | Command |
|---|---|
| Check Docker version | `docker --version` |
| Check Docker Compose version | `docker compose version` |
| Verify Docker Engine connectivity | `docker info` |
| Build and start the application | `docker compose up --build -d` |
| Check container status | `docker compose ps` |
| View application logs | `docker compose logs` |
| Follow logs in real time | `docker compose logs -f sweettooth-web` |
| Restart the application | `docker compose restart` |
| Stop and remove containers | `docker compose down` |
| Stop and remove containers and locally built images | `docker compose down --rmi local` |

The service name `sweettooth-web` must match the service name defined in `compose.yaml`. If the service uses a different name, replace it in the logs command.

When following live logs, press `Ctrl + C` to stop displaying them. This does not stop the application container.

### Stop and Clean Up

To stop the application and remove its containers and Compose-created network:

```bash
docker compose down
```

To also remove locally built images associated with the Compose project:

```bash
docker compose down --rmi local
```

The second command is optional. It does not delete the project source files or the README.

---

## Troubleshooting

### 1. Docker API or daemon connection error

**Possible cause:** Docker Desktop is not running, or the Docker Engine has not finished starting.

**Solution:**

1. Open Docker Desktop.
2. Wait until the Docker Engine is fully running.
3. Run `docker info`.
4. Retry the Docker Compose command.

### 2. Port already allocated or address already in use

**Possible cause:** Another application is using host port `8080`.

**Solution:**

1. Open `.env`.
2. Change `APP_PORT=8080` to another available port, such as `APP_PORT=8081`.
3. Confirm that `compose.yaml` uses `${APP_PORT}` in the host-port mapping.
4. Recreate the application:

```bash
docker compose up --build -d
```

5. Open `http://localhost:8081`.

### 3. Website changes do not appear

**Possible cause:** The browser is displaying a cached version of the website.

**Solution:**

- Windows: Press `Ctrl + Shift + R`.
- macOS: Press `Cmd + Shift + R`.

If the website is copied into the Docker image during the build, rebuild the image after changing the source files:

```bash
docker compose up --build -d
```

### 4. Website does not open

**Solution:**

Check the container status:

```bash
docker compose ps
```

Inspect the application logs:

```bash
docker compose logs
```

Verify that:

- The container is running.
- Docker Desktop is ready.
- The configured host port matches the URL being opened.
- The host port is not being used by another application.

### 5. Environment variables do not take effect

**Possible cause:** The `.env` file is missing, the variable name is incorrect, or `compose.yaml` does not reference the variable.

**Solution:**

1. Confirm that `.env` exists in the project directory.
2. Compare its variable names with `.env.example`.
3. Inspect `compose.yaml` to confirm which variables are used.
4. Recreate the application after changing the configuration:

```bash
docker compose up --build -d
```

---

## Known Limitations

- The application is a static website and does not use a database.
- Cart data is managed on the client side and is not saved on a server. It may not persist after the page is reloaded.
- The project does not include a favicon file, so the browser or logs may show a harmless `favicon.ico` 404 error.
- The application requires Docker Desktop or another compatible Docker Engine environment to run using the provided Docker setup.

---

## Docker Project Files

| File | Purpose |
|---|---|
| `Dockerfile` | Defines how the application image is built using Nginx Alpine. |
| `compose.yaml` | Configures the application container and port mapping. |
| `.dockerignore` | Excludes unnecessary files from the Docker build context. |
| `.env.example` | Provides sample environment configuration values. |
| `.env` | Stores local configuration values used by Docker Compose. |

---

## Project Information

- **Project:** Sweet Tooth: Dessert Ordering Web App
- **Course:** Information Systems Agile Project Management with DevOps (IS 2026)
- **Lecturer:** Anggraini Dyah Ayu Sekarlangit, B.Sc., M.Sc.
- **Repository:** https://github.com/sheirenarnelia/SweetTooth
- **Branch:** `chore/dockerize-project`
GOOD LUCK!
---

**End of README**
