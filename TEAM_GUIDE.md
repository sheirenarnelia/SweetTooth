# 📋 PANDUAN EKSEKUSI TIM & KONTROL SCOPE (DEVOPS WEEK 6)
> **Mata Kuliah:** Information Systems Agile Project Management with DevOps  
> **Dosen Pengampu:** Eka Parima Saragih, S.Kom., M.Kom.  
> **Prinsip Utama:** *"Move beyond 'it works on my laptop.' Make it reproducible for another person."*

---

## 🛑 ATURAN EMAS: JANGAN OUT OF SCOPE!

Tugas ini **BUKAN** tugas membuat aplikasi baru atau mempercantik tampilan UI/UX!  
Tujuan tugas ini murni **DevOps, Packaging, Reproducibility, dan Handover Verification**.

### ❌ DILARANG KERAS (OUT OF SCOPE):
1. **Dilarang membuat fitur baru** atau mengubah alur sistem Sweet Tooth yang sudah ada.
2. **Dilarang mendesain ulang CSS/HTML** dari awal. Gunakan apa yang sudah ada.
3. **Dilarang menambahkan backend/database baru yang rumit** jika aplikasi dasarnya sudah berjalan lancar.
4. **Dilarang meng-commit file rahasia/sensitif:** Jangan pernah commit file `.env` asli, password, atau credential. Gunakan `.env.example`.
5. **Dilarang mengunggah file sampah ke repository:** File `.DS_Store`, file PDF tugas (`PROJECT 2 - Web Design.pdf`), cache browser, dll. HARUS dimasukkan ke `.dockerignore` dan `.gitignore`.

### ✅ YANG HARUS DILAKUKAN (IN SCOPE):
1. Mengemas (*package*) proyek Sweet Tooth ke dalam container Docker (`Dockerfile`).
2. Menyiapkan orkestrasi praktis menggunakan Docker Compose (`compose.yaml`).
3. Membuktikan bahwa fitur utama (Katalog menu, keranjang belanja, form pemesanan) **tetap berfungsi 100%** di dalam container.
4. Menulis petunjuk serah terima (*handover*) di `README.md` yang mudah dijalankan orang awam.
5. Meminta **anggota dari kelompok lain** menguji proyek kalian dari *fresh clone*.
6. Merekam video demonstrasi (maksimal 20 menit) dan menyusun laporan bukti PDF (*Evidence Report*).

---

## 👥 PEMBAGIAN TUGAS & TANGGUNG JAWAB (5 ANGGOTA)

> 💡 **Catatan untuk Git:** Setiap anggota **WAJIB** melakukan commit atau Pull Request menggunakan akun GitHub masing-masing agar kontribusi tercatat di GitHub Insights.

| Anggota | Peran / Jabatan | Langkah Kerja Praktis (Step-by-Step) | Deliverable / Bukti | Konsep Laporan (Tabel 5.1) | Status |
| :--- | :--- | :--- | :--- | :--- | :-: |
| **Sheiren** | **DevOps & Image Architect** | **1.** Buka Docker Desktop di Mac<br>**2.** Jalankan `docker build -t sweettooth/web:week6 .`<br>**3.** Simpan screenshot terminal build sukses<br>**4.** Selesaikan invite 4 teman di GitHub | • `Dockerfile`<br>• Screenshot Build (Bab D) | Base image selection, Docker context, layer caching, expose port | ✅ **Selesai** |
| **Nisa** | **Orchestration Engineer** | **1.** Clone repo di laptop Nisa<br>**2.** Jalankan `docker compose up --build -d`<br>**3.** Pastikan container jalan di port 8080<br>**4.** Push commit file compose & env | • `compose.yaml`<br>• `.dockerignore`<br>• `.env.example` | Container orchestration, port forwarding, environment variables | ✅ **Selesai** |
| **Serina** | **QA & Verification Lead** | **1.** Clone/Pull repo & buka Docker Desktop<br>**2.** Jalankan `docker compose up --build -d`<br>**3.** Tes web `http://localhost:8080` & cart<br>**4.** Buat & push file `VERIFICATION.md` | • `VERIFICATION.md`<br>• Screenshot Uji (Bab F) | Container healthcheck, verification matrix, runtime inspection | ✅ **Selesai** |
| **Areta** | **Docs & Video Producer** | **1.** Rapikan panduan instalasi di `README.md`<br>**2.** Pimpin rekaman video demo (maks 20 mnt)<br>**3.** Sematkan link video ke `README.md` & push<br>**4.** Susun laporan PDF (Bab A–I) & cetak fisik | • `README.md`<br>• Link Video Demo<br>• File PDF Laporan | Developer experience (DevEx), handover runbooks, troubleshooting | ⏳ **Giliran Sekarang!** |
| **James** | **Handover & PR Coordinator** | **1.** Buat Pull Request di GitHub<br>**2.** Minta 1 teman kelompok lain tes web kita<br>**3.** Catat hasil uji di `HANDOVER_LOG.md` & push<br>**4.** Klik Merge PR & buat tag `week6-docker-v1` | • PR Merged di GitHub<br>• `HANDOVER_LOG.md`<br>• Tag `week6-docker-v1` | Handover reproducibility, Git PR workflow, release tagging | ⏸️ Antre (stlh Areta) |

---

## 🐙 PANDUAN DISTRIBUSI COMMIT GITHUB (AGAR TERCATAT DI GITHUB INSIGHTS)

> ⚠️ **PENTING DARI DOSEN (Tabel 5.1 & Bukti Kontribusi):**  
> Dosen pengampu akan memeriksa menu **Insights > Contributors** dan riwayat commit di GitHub. Tugas ini **TIDAK BOLEH** hanya di-push oleh 1 orang. Kelima anggota harus memiliki commit / aktivitas Pull Request dari akun GitHub masing-masing!

### 🔑 Aturan Akses Repo (Invite vs Kirim Link):
1. **Untuk 4 Teman Sekelompok (Nisa, Serina, James, Areta):**
   - **WAJIB DI-INVITE** sebagai **Collaborator** di GitHub oleh Sheiren (Owner Repo).
   - *Cara invite:* Buka repo GitHub > `Settings` > `Collaborators` > `Add people` > masukkan username GitHub mereka.
   - Setelah mereka menerima invite via email/notifikasi GitHub, mereka bisa langsung `git clone` dan `git push` ke branch tugas.
2. **Untuk Tester dari Kelompok Lain (Step 11 Handover):**
   - **CUKUP KIRIM LINK REPO** (Tidak perlu di-invite karena repositori ini berstatus **Public**).
   - Tester luar cukup melakukan `git clone` di laptopnya sendiri untuk membuktikan bahwa aplikasi bisa jalan murni dari petunjuk `README.md`.

---

### 💻 DETAIL PERINTAH & FILE COMMIT SETIAP ANGGOTA

Agar tidak bingung "siapa harus commit apa", berikut rincian pasti tugas file dan perintah Git untuk masing-masing anggota:

#### 1. 👩‍💻 Sheiren — DevOps & Image Architect
* **Status:** Inisialisasi awal repositori.
* **Tugas:** Menyiapkan branch dan base `Dockerfile`.
* **Perintah Git:**
  ```bash
  git checkout -b chore/dockerize-project
  git add Dockerfile
  git commit -m "feat(docker): setup multi-stage nginx alpine Dockerfile"
  git push -u origin chore/dockerize-project
  ```
* **Hasil di GitHub:** Akun Sheiren tercatat sebagai pembuat branch dan arsitek image Docker.

---

#### 2. 👩‍💻 Nisa — Orchestration & Config Engineer
* **Tugas:** Menyiapkan konfigurasi orkestrasi container dan variabel environment.
* **File yang di-commit:** `.dockerignore`, `.env.example`, `compose.yaml`.
* **Langkah di Laptop Nisa:**
  1. Clone repo dan pindah ke branch tugas:
     ```bash
     git clone https://github.com/sheirenarnelia/SweetTooth.git
     cd SweetTooth
     git checkout chore/dockerize-project
     ```
  2. Buka dan rapikan konfigurasi port/environment pada `compose.yaml` dan `.dockerignore`.
  3. Lakukan commit dan push dari akun GitHub Nisa:
     ```bash
     git add compose.yaml .dockerignore .env.example
     git commit -m "feat(orchestration): configure docker compose and environment variables"
     git push origin chore/dockerize-project
     ```
* **Hasil di GitHub:** Akun Nisa tercatat di GitHub Insights mengelola file orkestrasi Docker.

---

#### 3. 👩‍💻 Serina — QA & Verification Lead
* **Status:** ✅ **Selesai** (Commit `9ce0dca` — `VERIFICATION.md` dan screenshot bukti uji di folder `evidence/` telah di-push ke branch).
* **Tugas:** Menjalankan container di laptopnya sendiri, memverifikasi seluruh fungsi web berjalan lancar, dan meng-commit dokumen `VERIFICATION.md`.
* **File yang di-commit:** `VERIFICATION.md` (file baru di root direktori).
* **Langkah Detail di Laptop Serina:**
  1. **Buka Terminal & Ambil Kode Terbaru:**
     * *Opsi A (Jika Serina baru pertama kali clone):*
       ```bash
       git clone https://github.com/sheirenarnelia/SweetTooth.git
       cd SweetTooth
       git checkout chore/dockerize-project
       ```
     * *Opsi B (Jika Serina sudah punya foldernya):*
       ```bash
       cd SweetTooth
       git checkout chore/dockerize-project
       git pull origin chore/dockerize-project
       ```
  2. **Buka Docker Desktop di laptop Serina & Jalankan Container:**
     ```bash
     docker compose up --build -d
     ```
     *(Pastikan status container running tanpa error).*
  3. **Pengujian Fungsional & Simpan Screenshot:**
     * Buka browser ke `http://localhost:8080`.
     * Buka halaman Menu, klik tombol **Order Now** pada kue/minuman, pastikan item masuk keranjang belanja (*shopping cart*) dan total harga bertambah otomatis.
     * Ambil **Screenshot 1:** Tampilan web di browser dengan keranjang belanja aktif.
     * Buka terminal dan jalankan `curl -I http://localhost:8080` (untuk memastikan respon HTTP 200 OK).
     * Ambil **Screenshot 2:** Hasil curl di terminal.
     *(Kedua screenshot ini disimpan untuk diserahkan ke Areta bahan laporan Bab F).*
  4. **Buat File `VERIFICATION.md` di root folder:**
     Serina membuat file baru bernama `VERIFICATION.md` lalu salin template berikut:
     ```markdown
     # 🧪 Functional Verification Matrix & QA Report

     > **Tester / PIC QA:** Serina  
     > **Role:** QA & Verification Lead  
     > **Tanggal Pengujian:** 16 Oktober 2026  
     > **Branch:** chore/dockerize-project  

     ---

     ## 💻 Runtime & Environment Spesifikasi
     - **OS Host:** macOS / Windows 11 *(sesuaikan dengan laptop Serina)*
     - **Docker Engine:** Docker Desktop
     - **Compose Version:** v2.x
     - **Base Image:** `nginx:alpine`
     - **Container Port Mapping:** `8080 -> 80`
     - **Container Name:** `sweettooth-app`

     ---

     ## 📊 Matriks Verifikasi Fungsional (Tabel Bab F Laporan)

     | ID Test | Kriteria Pengujian | Prosedur / Langkah Uji | Hasil yang Diharapkan | Hasil Nyata (Actual Result) | Status |
     | :--- | :--- | :--- | :--- | :--- | :---: |
     | **V-01** | Container Lifecycle & Health | Jalankan `docker compose up --build -d` lalu cek `docker compose ps` | Container running di background tanpa restart mendadak | Container `sweettooth-app` status Up (healthy) port 8080 | ✅ **PASSED** |
     | **V-02** | HTTP Endpoint Baseline | Jalankan `curl -I http://localhost:8080` di terminal | Mengembalikan HTTP header status `200 OK` | Respon `HTTP/1.1 200 OK`, server nginx/alpine | ✅ **PASSED** |
     | **V-03** | Core Feature: Menu & Shopping Cart | Buka `http://localhost:8080/menu.html`, pilih kue (misal: Biscoff Cheesecake), klik *Order Now* | Item masuk ke dalam list keranjang, counter bertambah, harga total terhitung | Item berhasil masuk ke list pesanan, total harga terhitung akurat | ✅ **PASSED** |
     | **V-04** | Container Restart Resilience | Jalankan `docker compose restart`, refresh browser | Container hidup kembali dengan cepat dan web tetap dapat diakses | Web langsung dapat diakses normal kembali tanpa data error | ✅ **PASSED** |

     ---

     ## 📸 Bukti Pengujian (Screenshots)
     - Bukti tangkapan layar browser (V-03) dan respon curl (V-02) telah diarsipkan untuk dilampirkan pada **Bab F Evidence Report PDF**.
     ```
  5. **Lakukan Commit dan Push dari Akun GitHub Serina:**
     ```bash
     git add VERIFICATION.md
     git commit -m "docs(qa): add functional verification matrix and baseline results"
     git push origin chore/dockerize-project
     ```
* **Hasil di GitHub:** Akun Serina tercatat di GitHub Insights sebagai penanggung jawab penjaminan mutu (QA) dengan file `VERIFICATION.md`.

---

#### 4. 👩‍💻 Areta — Documentation & Video Producer
* **Status:** ⏳ **Giliran Sekarang** (Menyempurnakan `README.md`, video demo tim, dan penyusunan laporan PDF Bab A–I).
* **Tugas:** Menyempurnakan dokumen `README.md` (Runbook serah terima untuk orang awam) dan menyematkan link video demonstrasi.
* **File yang di-commit:** `README.md`.
* **Langkah di Laptop Areta:**
  1. Pull branch terbaru:
     ```bash
     git checkout chore/dockerize-project
     git pull origin chore/dockerize-project
     ```
  2. Buka `README.md`, lengkapi petunjuk langkah instalasi agar rapi dan mudah dibaca oleh tester luar.
  3. Tambahkan section link video demo (YouTube Unlisted / GDrive).
  4. Lakukan commit dan push dari akun GitHub Areta:
     ```bash
     git add README.md
     git commit -m "docs(readme): polish handover runbook and video demonstration link"
     git push origin chore/dockerize-project
     ```
* **Hasil di GitHub:** Akun Areta tercatat di GitHub Insights sebagai penanggung jawab dokumentasi dan DevEx.

---

#### 5. 👨‍💻 James — Handover & PR Coordinator
* **Tugas:** Mengelola Pull Request, koordinasi tester luar, mencatat log handover, melakukan merge PR, dan membuat git release tag.
* **File yang di-commit:** `HANDOVER_LOG.md`.
* **Langkah di Laptop / Akun James:**
  1. Buka GitHub, klik **Compare & pull request** dari `chore/dockerize-project` ke `main`.
  2. Hubungi 1 teman dari kelompok lain, beri link repo untuk di-clone dan diuji di laptopnya.
  3. Setelah tester luar sukses menguji, buat file `HANDOVER_LOG.md` berisi ringkasan nama tester, OS laptopnya, dan catatan hasil uji.
  4. Commit dan push file log tersebut:
     ```bash
     git add HANDOVER_LOG.md
     git commit -m "docs(handover): record external verification results from peer group"
     git push origin chore/dockerize-project
     ```
  5. James melakukan approval & klik tombol **Merge pull request** di website GitHub (nama James tercatat sebagai *Merger*).
  6. James membuat release tag di terminalnya:
     ```bash
     git checkout main
     git pull origin main
     git tag week6-docker-v1
     git push origin week6-docker-v1
     ```
* **Hasil di GitHub:** Akun James tercatat di GitHub mengelola PR review, merge to main, dan tagging versi rilis.

---

## 🗺️ ROADMAP 12 LANGKAH KERJA

### 📌 Fase 1: Persiapan & Baseline (Hari ke-1)
- [x] **Step 1: Baseline Lokal (PIC: Serina)**
  - Jalankan Sweet Tooth langsung di browser (tanpa Docker).
  - Ambil screenshot: Halaman Home, Halaman Menu, Fitur Tambah ke Keranjang.
  - Catat detail baseline: Teknologi (HTML5, CSS3, JavaScript/jQuery, Bootstrap 5), Web server lokal, Port standar.
- [x] **Step 2: Git Branching (PIC: Sheiren)**
  - Pastikan branch `main` bersih.
  - Buat branch baru:
    ```bash
    git checkout -b chore/dockerize-project
    ```
  - Push branch ke remote: `git push -u origin chore/dockerize-project`.

---

### 📌 Fase 2: Dockerisasi Aplikasi (Hari ke-1 s/d 2)
- [x] **Step 3 & 4: Runtime & Dockerfile (PIC: Sheiren)**
  - Base runtime: `nginx:alpine` (ringan, ~25MB, resmi, aman).
  - Buat file `Dockerfile` di root folder:
    ```dockerfile
    FROM nginx:alpine
    WORKDIR /usr/share/nginx/html
    RUN rm -rf ./*
    COPY . /usr/share/nginx/html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    ```
  - Lakukan commit di branch tugas.
- [x] **Step 5: File .dockerignore & .env.example (PIC: Nisa)**
  - Buat `.dockerignore` agar file `.git`, PDF, dan screenshot tidak ikut ter-copy ke dalam image.
  - Buat `.env.example` untuk dokumentasi port standar:
    ```env
    APP_PORT=8080
    CONTAINER_PORT=80
    ```
- [x] **Step 6: Build & Tag Image (PIC: Sheiren)**
  - Jalankan build:
    ```bash
    docker build -t sweettooth/web:week6 .
    ```
  - Verifikasi: `docker image ls` (simpan screenshot hasil output berhasil).
- [x] **Step 7: Docker Compose Setup (PIC: Nisa)**
  - Buat file `compose.yaml`:
    ```yaml
    services:
      sweettooth-web:
        build: .
        container_name: sweettooth-app
        ports:
          - "8080:80"
        restart: unless-stopped
    ```
  - Uji jalankan: `docker compose up --build -d`.
  - Simpan screenshot output terminal.

---

### 📌 Fase 3: Verifikasi & Troubleshooting (Hari ke-3)
- [x] **Step 8: Inspect & Diagnostic (PIC: Serina & Nisa)**
  - Jalankan dan ambil screenshot output dari:
    - `docker compose ps`
    - `docker compose logs`
    - `docker inspect sweettooth-app`
- [x] **Step 9: Functional Verification (PIC: Serina)**
  - Uji minimal 3 fitur di browser via `http://localhost:8080`:
    - **V-01:** Container status running.
    - **V-02:** Health endpoint / HTTP 200 via `curl -I http://localhost:8080`.
    - **V-03:** Live test fitur Sweet Tooth (buka menu, klik *Order Now* pada slice cake, pastikan keranjang bertambah dan total harga terhitung).
    - **V-04:** Uji restart container `docker compose restart`.
  - Simpan semua screenshot bukti verifikasi untuk Bab F laporan!

---

### 📌 Fase 4: Handover Test & Peer Review (Hari ke-4)
- [ ] **Step 10: Finalisasi README.md (PIC: Areta)**
  - Pastikan `README.md` sudah berisi petunjuk instalasi yang tidak membingungkan.
- [ ] **Step 11: Handover Test ke Kelompok Lain (PIC: James)**
  - **Cari 1 teman dari KELOMPOK LAIN** untuk jadi tester.
  - Minta dia:
    1. Melakukan `git clone` dari branch `chore/dockerize-project` ke folder bersih/laptop dia.
    2. Menjalankan `docker compose up --build -d`.
    3. Membuka `http://localhost:8080` dan mencoba fitur keranjang belanja.
    4. Menjalankan `docker compose down`.
  - Isi tabel **Handover Record**:
    - *Verifier Name:* (Nama teman kelompok lain)
    - *Device / OS:* (Contoh: Windows 11 / MacBook Air M2)
    - *Fresh clone completed:* Yes
    - *Image build successful:* Yes
    - *App start successful:* Yes
    - *Core function verified:* Yes
    - *Feedback / Problems found:* (Catat jika ada kendala port/instruksi).
- [ ] **Step 12: Pull Request & Release Tag (PIC: James)**
  - Buat PR di GitHub dari `chore/dockerize-project` ke `main`.
  - Minta teman kelompok lain melakukan review/komentar di PR tersebut.
  - Merge PR ke branch `main`.
  - Buat tag rilis:
    ```bash
    git tag week6-docker-v1
    git push origin week6-docker-v1
    ```

---

### 📌 Fase 5: Video & Laporan PDF (Hari ke-5)
- [ ] **Perekaman Video Demonstrasi (PIC: Areta & Seluruh Tim)**
  - Durasi: **Maksimal 20 Menit**.
  - Urutan Skenario Video (sesuai Bagian 4.1):
    1. Intro aplikasi Sweet Tooth & fitur utama yang dipilih (Areta / Sheiren).
    2. Menunjukkan file repositori (`Dockerfile`, `compose.yaml`, `.dockerignore`) tanpa mengekspos password/key (Nisa).
    3. Menjalankan command build & compose up di terminal (Sheiren / Nisa).
    4. Menampilkan status container (`docker ps`) dan cuplikan log (`docker compose logs`) (Serina).
    5. Membuka browser pada `http://localhost:8080` dan mendemonstrasikan fitur live: Add to cart, ganti metode delivery/payment (Serina / Sheiren).
    6. Menjalankan perintah stop container (`docker compose down`) (Nisa).
    7. Menyebutkan siapa teman luar kelompok yang melakukan uji serah terima *fresh handover* (James).
  - Unggah video ke YouTube (Unlisted) atau Google Drive dan salin link-nya.

- [ ] **Penyusunan Evidence Report PDF (PIC: Areta)**
  - Format penamaan file PDF: **`W6_Group##_SweetTooth.pdf`**.
  - Struktur Laporan (harus ada Section A sampai I):
    - **A. Group identity:** Anggota, NIM, Judul proyek, Link repo GitHub, Link video demo.
    - **B. Project baseline:** Stack, normal start command, port, dependensi, bukti baseline.
    - **C. Container design:** Image name, base image (`nginx:alpine`), port mapping (`8080:80`).
    - **D. Build evidence:** Build command & screenshot output sukses.
    - **E. Runtime evidence:** Command run, service status, logs, host URL.
    - **F. Functional verification:** Tabel hasil cek V-01 s/d V-04 + screenshot.
    - **G. Handover result:** Nama verifier eksternal, OS, langkah yang diuji, hasil cek.
    - **H. Troubleshooting reflection:** 1 masalah nyata yang dihadapi (misal: port 8080 bentrok, cache browser, atau .DS_Store masuk build), akar masalah, solusi, dan pelajaran yang didapat.
    - **I. Contributions:** Pernyataan pemahaman dan Tabel 5.1 individual contribution.

- [ ] **Final Submission (PIC: Areta & James)**
  - Buat file `.zip` berisi repository (tanpa node_modules / tanpa export docker image raksasa).
  - Upload file ZIP dan PDF Laporan ke link GDrive yang diberikan dosen di Discord.
  - **PENTING (Halaman 6):** **Cetak (Print FISIK) HANYA file laporan PDF-nya** dan taruh di meja dosen pengampu (**Pak Eka Parima Saragih, S.Kom., M.Kom.**).

---

## 💡 TEMPLATE REFLEKSI TROUBLESHOOTING (UNTUK SECTION H)

Bila selama pengerjaan tim tidak mengalami kendala parah, kalian bisa menggunakan salah satu skenario nyata berikut untuk bahan Section H:
* **Kasus A (Port Conflict):**
  * *Problem:* Port 8080 sudah terpakai oleh proses lain di laptop.
  * *Root Cause:* Konflik alokasi port TCP host.
  * *Diagnostic:* `docker compose up` mengeluarkan error `port is already allocated`.
  * *Solution:* Memetakan port alternatif via `.env` atau `compose.yaml` (misal `8081:80`).
  * *Lesson Learned:* Selalu gunakan parameter konfigurasi port yang dinamis agar tidak kaku di satu port.
* **Kasus B (Browser Caching):**
  * *Problem:* Perubahan script/gambar tidak langsung muncul saat web diakses di browser.
  * *Root Cause:* Nginx static file caching dan agresivitas cache browser.
  * *Solution:* Lakukan hard reload (`Ctrl+Shift+R`) atau restart container tanpa cache (`--no-cache`).
