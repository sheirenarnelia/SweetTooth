# 🍰 Sweet Tooth: Dessert Ordering Web App

A dessert ordering website built with HTML5, CSS3, JavaScript/jQuery, and Bootstrap 5.

**Main feature:** Browse the dessert menu, add items to the cart, and see the total price update automatically.

This guide explains how to run the application on your own computer using Docker. You do not need to install a separate web server or Node.js.

---

## Prerequisites

Before running the Sweet Tooth application, make sure you have the following:

- **Git:** Required to clone the project repository. [Download Git](https://git-scm.com/)
- **Docker Desktop:** Must be installed and running. [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)
- **Web browser:** Required to access and test the application.
- **Available port:** Port `8080` must be free on your computer, unless you configure a different port.
- **Internet connection:** Required to clone the repository and download the necessary Docker image during the initial setup.

### Important: Start Docker Desktop First

Before running any Docker commands, open Docker Desktop and wait until the **Docker Engine is fully running**.

Do not execute `docker compose` commands while Docker Desktop is still starting up. Otherwise, you may encounter Docker API or daemon connection errors.

To verify that Docker is ready, open your terminal and run:

```bash
docker info
```

If the command displays Docker system information without a daemon connection error, you can proceed.

### Tested Environment

- **Operating systems:** Windows 11 and macOS
- **Docker Engine:** 27.x / 29.x
- **Docker Compose:** v2.x / v5.x

*Note: These are the intended tested-version ranges. Confirm the exact versions used during testing before claiming that each version has been verified.*

---

## Quick Start 

Follow these commands in order.

### 1. Clone the repository

```bash
git clone -b chore/dockerize-project https://github.com/sheirenarnelia/SweetTooth.git
cd SweetTooth
```

### 2. Create the environment configuration file

**macOS / Linux:**

```bash
cp .env.example .env
```

**Windows PowerShell:**

```powershell
copy .env.example .env
```

### 3. Build and start the application

Make sure Docker Desktop is running and the Docker Engine is ready before executing this command.

```bash
docker compose up --build -d
```

### 4. Open the application

Open your browser and visit:

**http://localhost:8080**

You should see the Sweet Tooth home page.

---

## Step-by-Step Guide

### Step 1: Clone the repository

Open Terminal on macOS/Linux or PowerShell on Windows and execute:

```bash
git clone -b chore/dockerize-project https://github.com/sheirenarnelia/SweetTooth.git
cd SweetTooth
```

### Step 2: Create your settings file
This copies the sample settings. It contains no secrets. Write this on terminal to duplicate the file config, or you can do copy-paste method in your source code software (for example: VS CODE)

This downloads the project files from the specified GitHub branch and moves you into the project directory.

### Step 2: Start Docker Desktop

Open Docker Desktop and wait until the Docker Engine is running.

Verify the installation with:

```bash
docker --version
docker compose version
docker info
```

The first two commands display the installed versions. The third checks whether the Docker Engine is accessible.

**Do not continue until Docker is ready.**

### Step 3: Create the environment file

Copy `.env.example` to `.env`.

- macOS / Linux: `cp .env.example .env`
- Windows PowerShell: `copy .env.example .env`

The `.env` file contains local configuration settings. The provided example does not contain secrets.

| Variable | Description | Default |
|---|---|---|
| `APP_PORT` | Port used to access the application from your computer | `8080` |
| `CONTAINER_PORT` | Reference value for the container's web server port | `80` |

The container serves the website through Nginx on port `80`. The host port is mapped to the container port by the Docker Compose configuration.

### Step 4: Build and start the application

Run:

```bash
docker compose up --build -d
```

This command:

- Builds the Docker image using the `Dockerfile`.
- Creates or recreates the application container if necessary.
- Starts the application in detached mode (`-d`), allowing the terminal to be used for other tasks.

The first build may take longer because Docker needs to download the required base image and build the application image.

### Step 5: Verify the application

Check the container status:

```bash
docker compose ps
```

The application container should show a running status.

Open:

http://localhost:8080

If the page loads successfully, the application is accessible through your browser.

### Step 6: Stop the application

To stop the application and remove its container and Compose-created network, run:

```bash
docker compose down
```

To also remove the locally built images associated with the Compose project, run:

```bash
docker compose down --rmi local
```

This second command is optional. It does not delete your source code.

---

## How to Check That It Works

| ID | Check | Command or Action | Expected Result |
|---|---|---|---|
| V-01 | Container is running | `docker compose ps` | Application container shows `Up` or an equivalent running status. |
| V-02 | Website responds | `curl -I http://localhost:8080` | HTTP response indicates success, normally `200 OK`. |
| V-03 | Main feature works | Open **Our Menu** and click **Order Now** on a dessert. | Cart count and total price increase. |
| V-04 | Restart works | Run `docker compose restart`, then reload the page. | Container returns to a running state and the website remains accessible. |

**Note:** Run the commands from the project directory containing `compose.yaml`.

---

## Useful Docker Commands

| Goal | Command |
|---|---|
| Check Docker version | `docker --version` |
| Check Docker Compose version | `docker compose version` |
| Check Docker Engine connectivity | `docker info` |
| Check container status | `docker compose ps` |
| View application logs | `docker compose logs` |
| Follow logs in real time | `docker compose logs -f sweettooth-web` |
| Restart the application | `docker compose restart` |
| Stop and remove containers | `docker compose down` |

Press `Ctrl + C` to stop following live logs. This does not stop the application container.

---

## What's in the Docker Setup?

| File | Purpose |
|---|---|
| `Dockerfile` | Defines how the application image is built using Nginx Alpine. |
| `compose.yaml` | Configures and manages the application container and port mapping. |
| `.dockerignore` | Excludes unnecessary files from the Docker build context. |
| `.env.example` | Provides sample environment configuration values. |
| `.env` | Stores local configuration values used by Docker Compose. |

---

## Troubleshooting

### 1. Docker API or daemon connection error

**Possible cause:** Docker Desktop is not running, or the Docker Engine has not finished starting.

**Solution:**

1. Open Docker Desktop.
2. Wait until the Docker Engine is fully running.
3. Run `docker info` to verify connectivity.
4. Retry the Docker Compose command.

### 2. Port already allocated or address already in use

**Possible cause:** Another application is using port `8080`.

**Solution:**

1. Open `.env`.
2. Change `APP_PORT=8080` to another available port, such as `APP_PORT=8081`.
3. Recreate the application using:

   ```bash
   docker compose up --build -d
   ```

4. Open `http://localhost:8081`.

### 3. Website changes do not appear

**Possible cause:** Your browser is displaying a cached version of the website.

**Solution:**

- Windows: Press `Ctrl + Shift + R`.
- macOS: Press `Cmd + Shift + R`.

### 4. Website does not open

**Solution:**

Check the container status:

```bash
docker compose ps
```

Then inspect the logs:

```bash
docker compose logs
```

Review the first relevant error message and verify that the configured host port matches the URL you are opening.



---

## Known Limitations

- The application is a static website and does not use a database.
- Cart data is not saved on a server and may not persist after the page is reloaded.
- The browser or logs may show a harmless `favicon.ico` 404 error because the project does not include a favicon file.

---

## Project Information

- **Project:** Sweet Tooth: Dessert Ordering Web App
- **Course:** Information Systems Agile Project Management with DevOps (IS 2026)
- **Lecturer:** Anggraini Dyah Ayu Sekarlangit, B.Sc., M.Sc.
- **Repository:** https://github.com/sheirenarnelia/SweetTooth
- **Branch:** `chore/dockerize-project`

---

**End of README**
