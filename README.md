# 🍰 Sweet Tooth: Dessert Ordering Web App

A dessert ordering website built with HTML5, CSS3, JavaScript/jQuery, and Bootstrap 5.

**Main feature:** browse the dessert menu, add items to the cart, and see the total price update.

This guide lets anyone run the app on their own laptop using only Docker. You don't need to install a web server or any other tools.

---

## What You Need

- **Git**: https://git-scm.com/
- **Docker Desktop**, installed and **running**: https://www.docker.com/products/docker-desktop/
- A web browser
- Port **8080** free on your computer

**Tested with:** Docker `___` and Docker Compose `___`
**Tested on:** Windows 11 (PowerShell) and macOS

---

## Quick Start

```bash
git clone -b chore/dockerize-project https://github.com/sheirenarnelia/SweetTooth.git
cd SweetTooth
cp .env.example .env
docker compose up --build -d
```

Then open **http://localhost:8080**.

*(Windows PowerShell: use `copy .env.example .env` instead of `cp`.)*

The detailed steps are below.

---

## Step-by-Step Guide

### Step 1: Clone the repository
```bash
git clone -b chore/dockerize-project https://github.com/sheirenarnelia/SweetTooth.git
cd SweetTooth
```

### Step 2: Create your settings file
This copies the sample settings. It contains no secrets.

- **Mac / Linux:** `cp .env.example .env`
- **Windows (PowerShell):** `copy .env.example .env`

| Variable | What it means | Default |
| :--- | :--- | :--- |
| `APP_PORT` | The port on your laptop | `8080` |
| `CONTAINER_PORT` | For reference only. The container always uses port 80 | `80` |

### Step 3: Build and start the app
```bash
docker compose up --build -d
```
The first run takes about a minute. When it finishes, you should see:
```
Container sweettooth-app   Started
```

### Step 4: Open the app
Go to **http://localhost:8080**. You should see the Sweet Tooth home page.

| | Port |
| :--- | :---: |
| Your laptop (host) | `8080` |
| Inside the container | `80` (Nginx) |

### Step 5: Stop and clean up

Stop the app and remove its container and network:
```bash
docker compose down
```
You should see the container and network being removed.

(Optional) Also delete the built image to free disk space:
```bash
docker compose down --rmi local
```
---

## How to Check That It Works

| ID | Check | How | Expected result |
| :---: | :--- | :--- | :--- |
| **V-01** | Container is running | `docker compose ps` | Status shows `Up` |
| **V-02** | Website responds | `curl -I http://localhost:8080` | `HTTP/1.1 200 OK` |
| **V-03** | Main feature works | Open **Our Menu**, click **Order Now** on a dessert | The cart count and total price go up |
| **V-04** | Restart works | `docker compose restart`, then reload the page | Container comes back as `Up`, and the site still opens |

---

## Useful Commands

| Goal | Command |
| :--- | :--- |
| See container status | `docker compose ps` |
| See all logs | `docker compose logs` |
| Follow logs live (Ctrl+C to exit) | `docker compose logs -f sweettooth-web` |
| Stop and clean up | `docker compose down` |

---

## What's in the Docker Setup

| File | What it does |
| :--- | :--- |
| `Dockerfile` | Packages the website into an Nginx Alpine image |
| `compose.yaml` | Starts the app with one command and sets the port |
| `.dockerignore` | Keeps junk files (Git data, PDFs, screenshots) out of the image |
| `.env.example` | Sample settings. Copy it to `.env` |

---

## Troubleshooting

**`port is already allocated` or `address already in use`**
Another program is using port 8080. Open `.env`, change `APP_PORT=8080` to another number (for example `8081`), and run `docker compose up -d` again. Then open `http://localhost:8081` instead.

**The page looks old or changes don't show**
Your browser saved an old copy. Hard reload with **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac).

**`Cannot connect to the Docker daemon`**
Docker Desktop isn't running. Open it, wait until it says it's running, then try again.

**The page doesn't open at all**
Run `docker compose ps`. If the container isn't `Up`, run `docker compose logs` and read the first error message.

---

## Known Limitations

- This is a static website with no database. The cart is not saved on a server.
- The browser may show a harmless `favicon.ico` 404 message in the logs because the site has no favicon file.

---

## Project Info

- **Course:** Information Systems Agile Project Management with DevOps (IS 2026)
- **Lecturer:** Eka Parima Saragih, S.Kom., M.Kom.
- **Repository:** https://github.com/sheirenarnelia/SweetTooth
- **Branch:** `chore/dockerize-project`
