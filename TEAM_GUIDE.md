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

| Anggota | Peran / Jabatan | Tugas Utama & Deliverable | Konsep untuk Tabel 5.1 |
| :--- | :--- | :--- | :--- |
| **Sheiren (Aku)** | **DevOps & Image Architect** | • Analisis runtime (Step 3)<br>• Menulis `Dockerfile` (Nginx Alpine)<br>• Build & tagging Docker image (Step 6)<br>• Branching strategy `chore/dockerize-project` | Base image selection, Docker build context, layer caching, expose port. |
| **Nisa** | **Orchestration & Config Engineer** | • Menulis `.dockerignore` & `.env.example` (Step 5)<br>• Menulis file `compose.yaml` (Step 7)<br>• Menguji lifecycle container (`compose up`, `ps`, `logs`, `down`) | Container orchestration, port forwarding (host vs container), environment variables. |
| **Serina** | **QA & Verification Lead** | • Dokumentasi baseline lokal sebelum Docker (Step 1)<br>• Menjalankan pengujian fungsional V-01 s/d V-04 (Step 9)<br>• Mengambil screenshot bukti eksekusi untuk Section D, E, F laporan | Container healthcheck, verification matrix, runtime inspection (`docker ps`, `curl`). |
| **James** | **Handover & PR Coordinator** | • Koordinasi Handover Test ke **kelompok lain** (Step 11)<br>• Mencatat hasil form Handover Record (Section G)<br>• Mengelola Pull Request, peer review, merge ke `main`, & release tag `week6-docker-v1` | Handover reproducibility, Git PR workflow, semantic versioning & release tagging. |
| **Areta** | **Documentation & Video Producer** | • Memastikan `README.md` lengkap & rapi (Step 10)<br>• Menulis & memimpin video demonstrasi (maks 20 menit)<br>• Mengompilasi PDF Laporan Bukti (Section A–I) & paket ZIP | Developer experience (DevEx), handover runbooks, troubleshooting synthesis. |

---

## 🎬 SKENARIO PRAKTIK NYATA (BACA INI DULU BIAR TIDAK BINGUNG!)

Inti tugas dari dosen sebenarnya adalah **"Uji Coba Serah Terima (Handover Test)"**:
- **Kalian ber-5** adalah pembuat aplikasi.
- **File `README.md`** adalah satu-satunya buku petunjuk bagi orang luar.
- **Teman dari kelompok lain** bertindak sebagai orang awam yang disuruh menjalankan aplikasi Sweet Tooth di laptopnya **HANYA dengan membaca `README.md` tanpa bantuan langsung dari kalian**.

### Alur Kerja Praktis per Orang:

1. 👩‍💻 **Sheiren (Upload Kodingan):**
   - Kodingan Docker (`Dockerfile`, `compose.yaml`, `.dockerignore`, `README.md`) sudah selesai dibuat dan sudah dites jalan normal.
   - Sheiren tinggal buat branch baru dan push ke GitHub:
     ```bash
     git checkout -b chore/dockerize-project
     git add .
     git commit -m "feat: setup docker configuration and readme"
     git push -u origin chore/dockerize-project
     ```

2. 👩‍💻 **Nisa (Buka Pull Request):**
   - Buka GitHub repository di browser, klik tombol hijau **"Compare & pull request"**.
   - Ajukan penggabungan dari branch `chore/dockerize-project` ke branch `main`.

3. 👩‍💻 **Serina (Verifikasi Internal & Screenshot):**
   - Buka browser di `http://localhost:8085`.
   - Coba klik menu kue dan klik tombol *Order Now* sampai masuk ke keranjang belanja.
   - Ambil screenshot: Web berjalan, fitur keranjang belanja bertambah, dan terminal `docker compose ps` (kirim screenshot ke Areta).

4. 👨‍💻 **James (Koordinator Uji Coba ke Kelompok Lain):**
   - James menghubungi 1 orang teman sekelas dari kelompok lain (misal: Budi):
     > *"Halo Bud, kelompok kita boleh minta tolong jadi tester handover gak? Kamu tinggal clone repo kita terus ikutin langkah di README.md, nanti gantian aku yang tes repo kelompokmu."*
   - James kasih link repo GitHub ke Budi.
   - Budi mencoba menjalankan di laptopnya sendiri tanpa dibantu.
   - Setelah Budi sukses, Budi kirim 1 screenshot hasil web jalan di laptopnya ke James.
   - James mencatat data Budi di laporan: nama penguji, sistem operasi laptopnya (Windows/Mac), dan konfirmasi bahwa build sukses.
   - Budi memberi komentar "Approved / Verified" pada Pull Request di GitHub, lalu James klik **Merge PR** ke `main`.

5. 👩‍💻 **Areta (Video Demo & Laporan Akhir):**
   - **Rekam video demo singkat (maks. 20 menit):** Rekam layar laptop saat menjalankan `docker compose up -d`, buka browser `http://localhost:8085`, coba klik fitur keranjang, lalu ketik `docker compose down`. Sebutkan bahwa pengujian handover sukses dilakukan oleh teman kelompok lain.
   - **Susun Laporan PDF:** Masukkan semua screenshot dari Serina dan data penguji dari James ke format laporan Section A s/d I di bawah ini.
   - Cetak laporan PDF-nya dan kumpulkan ke meja Pak Eka.

---

## 🗺️ ROADMAP 12 LANGKAH KERJA

### 📌 Fase 1: Persiapan & Baseline (Hari ke-1)
- [ ] **Step 1: Baseline Lokal (PIC: Serina)**
  - Jalankan Sweet Tooth langsung di browser (tanpa Docker).
  - Ambil screenshot: Halaman Home, Halaman Menu, Fitur Tambah ke Keranjang.
  - Catat detail baseline: Teknologi (HTML5, CSS3, JavaScript/jQuery, Bootstrap 5), Web server lokal, Port standar.
- [ ] **Step 2: Git Branching (PIC: Sheiren)**
  - Pastikan branch `main` bersih.
  - Buat branch baru:
    ```bash
    git checkout -b chore/dockerize-project
    ```
  - Push branch ke remote: `git push -u origin chore/dockerize-project`.

---

### 📌 Fase 2: Dockerisasi Aplikasi (Hari ke-1 s/d 2)
- [ ] **Step 3 & 4: Runtime & Dockerfile (PIC: Sheiren)**
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
- [ ] **Step 5: File .dockerignore & .env.example (PIC: Nisa)**
  - Buat `.dockerignore` agar file `.git`, PDF, dan screenshot tidak ikut ter-copy ke dalam image.
  - Buat `.env.example` untuk dokumentasi port standar:
    ```env
    APP_PORT=8080
    CONTAINER_PORT=80
    ```
- [ ] **Step 6: Build & Tag Image (PIC: Sheiren)**
  - Jalankan build:
    ```bash
    docker build -t sweettooth/web:week6 .
    ```
  - Verifikasi: `docker image ls` (simpan screenshot hasil output berhasil).
- [ ] **Step 7: Docker Compose Setup (PIC: Nisa)**
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
- [ ] **Step 8: Inspect & Diagnostic (PIC: Serina & Nisa)**
  - Jalankan dan ambil screenshot output dari:
    - `docker compose ps`
    - `docker compose logs`
    - `docker inspect sweettooth-app`
- [ ] **Step 9: Functional Verification (PIC: Serina)**
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
