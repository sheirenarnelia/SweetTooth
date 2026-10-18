# 🎬 SCRIPT & PANDUAN AKSI REKAMAN VIDEO DEMO (WEEK 6)
> **Mata Kuliah:** Information Systems Agile Project Management with DevOps  
> **Dosen Pengampu:** Eka Parima Saragih, S.Kom., M.Kom.  
> **Proyek:** Sweet Tooth — Dessert Ordering Web App  
> **Target Durasi Total:** 12 – 15 Menit (Batas Maksimal Dosen: 20 Menit)  
> **Metode Rekaman:** **HYBRID** (Opening & Closing On-Cam Bareng; Scene Teknis Fullscreen Screen Record + Voice Over di laptop masing-masing PIC tanpa webcam).

---

## 👥 RANGKUMAN TUGAS & PERAN ANGGOTA

| No | Anggota | Peran / Jabatan | Metode Rekaman | Apa yang Ditampilkan di Layar? | Durasi |
|:--:|:---|:---|:---|:---|:--:|
| 1 | **Areta** | **Docs & Video Producer** | 🎥 **On-Cam Bareng** (Zoom/GMeet/HP) | Wajah seluruh anggota tim (Opening & Closing) | ~ 3 Menit |
| 2 | **Nisa** | **Orchestration Engineer** | 🖥️ **Screen Record + VO** (Laptop Nisa) | VS Code (`.dockerignore`, `.env.example`, `compose.yaml`) & Terminal (`down`) | ~ 2.5 Menit |
| 3 | **Sheiren** | **DevOps & Image Architect** | 🖥️ **Screen Record + VO** (Mac Sheiren) | VS Code (`Dockerfile`) & Terminal (`docker compose up --build -d`) | ~ 2.5 Menit |
| 4 | **Serina** | **QA & Verification Lead** | 🖥️ **Screen Record + VO** (Laptop Serina) | Terminal (`ps`, `logs`, `curl`) & Browser (`http://localhost:8080`, Add to Cart, Restart) | ~ 4 Menit |
| 5 | **James** | **Handover & PR Coordinator** | 🖥️ **Screen Record + VO** (Laptop James) | GitHub Repo (File `HANDOVER_LOG.md`, Pull Request Merged, Release Tag `week6-docker-v1`) | ~ 2.5 Menit |

---

## 🎬 SKRIP DETAIL: AKSI LAYAR & KATA DEMI KATA (SCENE-BY-SCENE)

---

### 📍 SCENE 1: PEMBUKAAN & PENGENALAN TIM
* **PIC:** Areta (Host) + Seluruh Anggota Tim
* **Metode:** 🎥 On-Cam Bareng (Semua wajah standby di kamera)
* **Durasi:** ~ 01:30 Menit

| Langkah | Aksi Nyata di Layar (Apa yang Dilakukan) | Apa yang Diucapkan (Skrip Kata demi Kata) |
| :---: | :--- | :--- |
| **1.1** | Areta menatap kamera utama, tersenyum, menyapa dosen dan membuka sesi. | **Areta:**<br>"Halo, selamat pagi/siang kepada Bapak Eka Parima Saragih, S.Kom., M.Kom., dan rekan-rekan sekalian. Kami dari Kelompok Sweet Tooth pada mata kuliah *Information Systems Agile Project Management with DevOps*. Hari ini kami akan mempresentasikan hasil implementasi tugas DevOps Week 6 kami. Sebelum masuk ke materi, kami akan memperkenalkan diri masing-masing beserta peran tugas kami." |
| **1.2** | Areta memperkenalkan dirinya sendiri. | **Areta:**<br>"Perkenalkan, saya **Areta**, bertindak sebagai *Documentation & Video Producer* yang memimpin produksi video dan dokumentasi panduan serah-terima." |
| **1.3** | Kamera/giliran beralih ke Sheiren. Sheiren tersenyum dan memperkenalkan diri. | **Sheiren:**<br>"Halo, saya **Sheiren Arnelia**, bertindak sebagai *DevOps & Image Architect*, bertanggung jawab merancang base Dockerfile dan build container image." |
| **1.4** | Giliran beralih ke Nisa. Nisa tersenyum dan memperkenalkan diri. | **Nisa:**<br>"Halo semuanya, saya **Nisa** sebagai *Orchestration & Config Engineer*, bertanggung jawab menyusun orkestrasi Docker Compose dan standarisasi file environment." |
| **1.5** | Giliran beralih ke Serina. Serina tersenyum dan memperkenalkan diri. | **Serina:**<br>"Halo semua, saya **Serina** selaku *QA & Verification Lead*, bertanggung jawab menguji kesehatan container, memverifikasi fitur web, dan menyusun laporan QA." |
| **1.6** | Giliran beralih ke James. James tersenyum dan memperkenalkan diri. | **James:**<br>"Halo semuanya, saya **James** sebagai *Handover & Pull Request Coordinator*, yang mengoordinasikan pengujian serah terima ke kelompok lain serta alur Pull Request di GitHub." |
| **1.7** | Areta kembali mengambil kendali, menyampaikan filosofi tugas, lalu mengoper ke Nisa. | **Areta:**<br>"Prinsip utama yang kami pegang pada tugas ini adalah: *'Move beyond it works on my laptop, make it reproducible for another person.'* Aplikasi kami adalah Sweet Tooth, yaitu web pemesanan dessert interaktif.<br><br>Untuk membuktikan bahwa sistem ini benar-benar *reproducible* dan berjalan di berbagai laptop anggota, kami akan mendemonstrasikan aspek teknisnya langsung dari laptop masing-masing PIC menggunakan screen recording. Penjelasan arsitektur konfigurasi akan dipaparkan langsung oleh Nisa." |

---

### 📍 SCENE 2: STRUKTUR REPOSITORI & FILE KONFIGURASI
* **PIC:** Nisa
* **Metode:** 🖥️ Fullscreen Screen Record + Voice Over (Di laptop Nisa, tanpa webcam)
* **Aplikasi:** VS Code (Font diperbesar `Ctrl + +`)
* **Durasi:** ~ 02:00 Menit

| Langkah | Aksi Nyata di Layar (Apa yang Dilakukan) | Apa yang Diucapkan (Skrip Kata demi Kata) |
| :---: | :--- | :--- |
| **2.1** | Buka VS Code di folder proyek `SweetTooth`. Tampilkan panel explorer di sebelah kiri. | **Nisa (Voice Over):**<br>"Terima kasih, Areta. Halo semuanya, saya Nisa. Di sini saya merekam langsung dari laptop saya untuk menjelaskan bagaimana struktur repositori dan file-file orkestrasi kami siapkan agar aman, terstandarisasi, dan siap dijalankan siapa saja." |
| **2.2** | Klik file **`.dockerignore`** di sidebar kiri.<br>Gunakan kursor mouse untuk menyorot baris `.git`, `evidence/`, `*.pdf`, dan `.DS_Store`. | **Nisa (Voice Over):**<br>"Pertama, kita buka file `.dockerignore`. Sebagai *best practice* DevOps, kita tidak boleh memasukkan file sampah, dokumen PDF yang besar, atau file sistem lokal seperti `.DS_Store` ke dalam image Docker. Dengan mengecualikan file-file ini, proses build menjadi jauh lebih cepat dan ukuran image tetap ramping." |
| **2.3** | Klik file **`.env.example`** di sidebar kiri.<br>Sorot baris `APP_PORT=8080` (atau 8085) dan `CONTAINER_PORT=80`. | **Nisa (Voice Over):**<br>"Kedua, kami menyediakan template `.env.example`. File ini mendokumentasikan variabel port host dan container port secara transparan tanpa menyimpan password atau credential rahasia apa pun. Pengguna lain cukup menyalinnya menjadi file `.env` di laptop mereka." |
| **2.4** | Klik file **`compose.yaml`** di sidebar kiri.<br>Sorot baris `services:`, `sweettooth-web:`, mapping `ports:`, dan `restart: unless-stopped`. | **Nisa (Voice Over):**<br>"Ketiga, kita buka file `compose.yaml`. Di sini kami mendefinisikan service `sweettooth-web`, yang mem-build image lokal, memberi nama container `sweettooth-app`, memetakan port host ke port 80 di container Nginx, serta menambahkan kebijakan restart `unless-stopped` agar container stabil.<br><br>Selanjutnya, desain Dockerfile dan eksekusi build container akan dipandu langsung dari laptop Sheiren." |

---

### 📍 SCENE 3: DESAIN DOCKERFILE & EKSEKUSI BUILD CONTAINER
* **PIC:** Sheiren
* **Metode:** 🖥️ Fullscreen Screen Record + Voice Over (Di Mac Sheiren, tanpa webcam)
* **Aplikasi:** VS Code & Terminal (Font diperbesar `Cmd + +`)
* **Durasi:** ~ 02:30 Menit

| Langkah | Aksi Nyata di Layar (Apa yang Dilakukan) | Apa yang Diucapkan (Skrip Kata demi Kata) |
| :---: | :--- | :--- |
| **3.1** | Buka VS Code di Mac Sheiren, lalu klik dan buka file **`Dockerfile`**. | **Sheiren (Voice Over):**<br>"Terima kasih, Nisa. Halo Pak Eka dan teman-teman, saya Sheiren selaku *DevOps & Image Architect*. Sekarang kita melihat langsung dari environment MacBook saya." |
| **3.2** | Sorot baris 1: `FROM nginx:alpine`.<br>Lalu sorot baris: `WORKDIR /usr/share/nginx/html` dan `COPY . /usr/share/nginx/html`. | **Sheiren (Voice Over):**<br>"Mari kita bedah file `Dockerfile` kami. Kami memilih base image resmi **`nginx:alpine`**. Alasan utamanya adalah ukurannya yang sangat ringan—hanya sekitar 20 sampai 25 Megabyte—sangat efisien untuk menyajikan website statis, serta memiliki celah keamanan yang sangat minim.<br><br>Semua file HTML, CSS, JS, dan gambar disalin ke direktori `/usr/share/nginx/html`, dan port 80 diekspos sebagai port standar web server." |
| **3.3** | Buka Terminal terintegrasi di VS Code (`Ctrl + ~`) atau buka aplikasi Terminal Mac. Layar terminal bersih (`clear`). | **Sheiren (Voice Over):**<br>"Sekarang kita akan membuktikan bahwa aplikasi ini dapat dibangun dan dijalankan hanya dengan satu perintah tunggal." |
| **3.4** | Ketik perlahan di terminal:<br>`docker compose up --build -d`<br>Lalu tekan **ENTER**. Biarkan log build berjalan beberapa detik sampai muncul tulisan `Started`. | **Sheiren (Voice Over):**<br>"Kita jalankan perintah `docker compose up --build -d`.<br><br>Seperti yang terlihat di terminal, Docker membaca konteks build, menyusun layer image, dan langsung menjalankan container `sweettooth-app` di background dengan status *Started*.<br><br>Untuk memvalidasi kesehatan runtime dan fungsionalitas fiturnya, saya serahkan ke laptop Serina." |

---

### 📍 SCENE 4: RUNTIME INSPECTION & DIAGNOSTIK TERMINAL
* **PIC:** Serina
* **Metode:** 🖥️ Fullscreen Screen Record + Voice Over (Di laptop Serina, tanpa webcam)
* **Aplikasi:** Terminal / PowerShell (Font diperbesar `Ctrl + +`)
* **Durasi:** ~ 02:00 Menit

| Langkah | Aksi Nyata di Layar (Apa yang Dilakukan) | Apa yang Diucapkan (Skrip Kata demi Kata) |
| :---: | :--- | :--- |
| **4.1** | Buka Terminal bersih di laptop Serina. | **Serina (Voice Over):**<br>"Terima kasih, Sheiren. Halo semuanya, saya Serina selaku *QA & Verification Lead*. Sekarang kita berada di laptop saya untuk memverifikasi kondisi container sebelum membuka browser." |
| **4.2** | Ketik: `docker compose ps` lalu tekan **Enter**.<br>Sorot baris container dengan mouse: kolom **STATUS** (`Up`) dan kolom **PORTS** (`8080->80`). | **Serina (Voice Over):**<br>"Langkah pertama, kita jalankan `docker compose ps`.<br>Bisa kita lihat di layar, container `sweettooth-app` berjalan normal dengan status **Up**, dan port host berhasil ter-mapping ke port 80 container tanpa ada konflik." |
| **4.3** | Ketik: `docker compose logs --tail=20` lalu tekan **Enter**.<br>Sorot tulisan *nginx worker process*. | **Serina (Voice Over):**<br>"Langkah kedua, kita periksa catatan log dengan `docker compose logs`. Terlihat Nginx master process dan worker process telah siap menerima trafik tanpa adanya pesan error." |
| **4.4** | Ketik: `curl -I http://localhost:8080` (atau port aktif) lalu tekan **Enter**.<br>Sorot tulisan **`HTTP/1.1 200 OK`**. | **Serina (Voice Over):**<br>"Langkah ketiga, kita uji respon HTTP baseline dari terminal menggunakan curl. Respon yang kembali adalah **HTTP/1.1 200 OK**. Ini membuktikan web server di dalam container sudah aktif sempurna." |

---

### 📍 SCENE 5: DEMONSTRASI LIVE FITUR WEB DI BROWSER
* **PIC:** Serina
* **Metode:** 🖥️ Fullscreen Screen Record + Voice Over (Di laptop Serina, tanpa webcam)
* **Aplikasi:** Web Browser (Google Chrome / Edge / Firefox)
* **Durasi:** ~ 03:00 Menit

| Langkah | Aksi Nyata di Layar (Apa yang Dilakukan) | Apa yang Diucapkan (Skrip Kata demi Kata) |
| :---: | :--- | :--- |
| **5.1** | Buka browser, ketik `http://localhost:8080` lalu tekan **Enter**.<br>Scroll perlahan ke bawah memperlihatkan banner dan tampilan home. | **Serina (Voice Over):**<br>"Sekarang kita buka web browser ke `http://localhost:8080`. Halaman utama Sweet Tooth tampil dengan utuh dan rapi, membuktikan seluruh stylesheet CSS dan aset gambar berhasil di-load dari container Nginx." |
| **5.2** | Klik menu navigasi **"Our Menu"** di header web (membuka `menu.html`). | **Serina (Voice Over):**<br>"Sekarang kita masuk ke pengujian fitur utama pemesanan dessert di halaman Our Menu." |
| **5.3** | Arahkan mouse ke salah satu kue (misal: **Biscoff Cheesecake**), lalu klik tombol **"Order Now"**.<br>Arahkan kursor ke panel keranjang belanja di sebelah kanan. | **Serina (Voice Over):**<br>"Kita coba pesan satu menu: Biscoff Cheesecake dengan mengklik tombol Order Now. Perhatikan di panel keranjang sebelah kanan: item langsung masuk ke daftar pesanan secara realtime." |
| **5.4** | Klik 2 kue lainnya (misal: **Red Velvet Slice** dan **Matcha Latte**).<br>Sorot bagian **Total Harga** (tertera Rp 120.000). | **Serina (Voice Over):**<br>"Kita tambahkan dua menu lainnya. Dapat kita lihat badge counter bertambah menjadi 3 item, rincian harga per kue tampil benar, dan total harga terakumulasi secara otomatis tanpa bug JavaScript.<br><br>Hasil ini membuktikan bahwa fungsionalitas interaktif web berjalan 100% di dalam Docker, persis seperti yang telah kami catat di dokumen `VERIFICATION.md`." |

---

### 📍 SCENE 6: UJI RESTART CONTAINER & SHUTDOWN SERVICE
* **PIC:** Serina & Nisa
* **Metode:** 🖥️ Fullscreen Screen Record + Voice Over (Split screen Terminal & Browser)
* **Durasi:** ~ 01:30 Menit

| Langkah | Aksi Nyata di Layar (Apa yang Dilakukan) | Apa yang Diucapkan (Skrip Kata demi Kata) |
| :---: | :--- | :--- |
| **6.1** | Tampilkan Terminal di sebelah kiri dan Browser di sebelah kanan.<br>Serina mengetik di terminal: `docker compose restart` lalu tekan **Enter**. | **Serina (Voice Over):**<br>"Untuk menguji ketahanan (*resilience*) container, kita lakukan restart menggunakan perintah `docker compose restart`. Dalam waktu kurang dari dua detik, container berhasil di-restart." |
| **6.2** | Serina mengklik tombol **Refresh (Reload)** pada browser `menu.html`. | **Serina (Voice Over):**<br>"Saat kita refresh browser, website langsung aktif kembali tanpa kehilangan koneksi. Selanjutnya, Nisa akan mendemonstrasikan proses shutdown." |
| **6.3** | Nisa mengetik di terminalnya:<br>`docker compose down`<br>Lalu tekan **Enter**. Tunjukkan tulisan `Removed`. | **Nisa (Voice Over):**<br>"Setelah selesai pengujian, pengguna cukup menjalankan satu perintah: `docker compose down`. Docker akan menghentikan container dan membersihkan alokasi port secara bersih sehingga tidak membebani memori laptop.<br><br>Selanjutnya, bukti pengujian serah terima oleh kelompok lain dan alur Git akan dijelaskan oleh James." |

---

### 📍 SCENE 7: HANDOVER VERIFICATION & GIT RELEASE TAG
* **PIC:** James
* **Metode:** 🖥️ Fullscreen Screen Record + Voice Over (Di laptop James, tanpa webcam)
* **Aplikasi:** Web Browser membuka GitHub & VS Code membuka `HANDOVER_LOG.md`
* **Durasi:** ~ 02:30 Menit

| Langkah | Aksi Nyata di Layar (Apa yang Dilakukan) | Apa yang Diucapkan (Skrip Kata demi Kata) |
| :---: | :--- | :--- |
| **7.1** | Buka dokumen **`HANDOVER_LOG.md`** di layar. | **James (Voice Over):**<br>"Terima kasih, Nisa. Halo semuanya, saya James selaku *Handover & Pull Request Coordinator*. Sekarang saya merekam langsung dari laptop saya." |
| **7.2** | Sorot tabel hasil verifikasi penguji eksternal (tunjukkan nama teman kelompok lain, OS laptopnya, dan kolom status yang semuanya *PASS*). | **James (Voice Over):**<br>"Sesuai instruksi Step 11, kami meminta satu rekan dari kelompok lain untuk melakukan *fresh clone* di laptopnya sendiri tanpa bantuan kami, murni hanya mengikuti langkah di `README.md`. Dan terbukti, teman penguji berhasil meng-clone repo, mem-build container, hingga menguji keranjang belanja dengan status 100% *PASSED*." |
| **7.3** | Buka browser ke halaman **GitHub Repositori SweetTooth**, lalu klik tab **Pull Requests**.<br>Buka PR `chore/dockerize-project` ke `main`. | **James (Voice Over):**<br>"Kami juga menerapkan alur kolaborasi Git yang disiplin. Seluruh pekerjaan dikerjakan di branch `chore/dockerize-project`. Kelima anggota kelompok—Sheiren, Nisa, Serina, Areta, dan saya sendiri—melakukan commit dari akun GitHub masing-masing sehingga kontribusi tercatat di GitHub Insights.<br><br>Setelah diverifikasi, kami membuka Pull Request ke branch `main`, melakukan review, dan menggabungkannya (*merged*)." |
| **7.4** | Klik menu **Releases / Tags** di GitHub. Sorot tag bertuliskan **`week6-docker-v1`**. | **James (Voice Over):**<br>"Terakhir, kami menandai rilis stabil ini dengan Git Tag resmi: **`week6-docker-v1`** sebagai bukti penyerahan proyek versi Week 6.<br><br>Saya kembalikan kepada Areta untuk sesi penutup." |

---

### 📍 SCENE 8: PENUTUP & KESIMPULAN TIM
* **PIC:** Areta (Host) + Seluruh Anggota Tim
* **Metode:** 🎥 On-Cam Bareng (Semua anggota on-cam kembali)
* **Durasi:** ~ 01:00 Menit

| Langkah | Aksi Nyata di Layar (Apa yang Dilakukan) | Apa yang Diucapkan (Skrip Kata demi Kata) |
| :---: | :--- | :--- |
| **8.1** | Areta memegang kendali bicara, semua anggota tersenyum menghadap kamera. | **Areta:**<br>"Terima kasih banyak, James. Sebagai penutup, seluruh panduan instalasi yang ramah pengguna, hasil verifikasi, serta tautan video demo ini telah kami rangkum rapi di `README.md` dan file laporan resmi kami `W6_Group##_SweetTooth.pdf`." |
| **8.2** | Areta menyampaikan kesimpulan penutup. | **Areta:**<br>"Proyek ini membuktikan bahwa dengan kontainerisasi Docker dan orkestrasi Compose, aplikasi Sweet Tooth kini dapat dijalankan secara konsisten, cepat, dan terisolasi di perangkat siapa pun tanpa lagi terkendala masalah 'it works on my laptop'." |
| **8.3** | Areta menutup salam. Semua anggota tersenyum dan melambaikan tangan bersama ke kamera sampai rekaman selesai. | **Areta & Tim:**<br>"Sekian presentasi dan demonstrasi dari kelompok kami. Terima kasih banyak atas perhatian Bapak Eka Parima Saragih dan teman-teman sekalian. Selamat pagi/siang dan salam sejahtera!"<br><br>*(Seluruh tim melambaikan tangan)* |

---

## 💡 TIPS PRAKTIS UNTUK OPERATOR LAPTOP (BESOK PAGI)

1. **Shortcuts Rekam Layar Bersih (Fullscreen):**
   * **Mac (Sheiren):** Tekan `Cmd + Shift + 5` ➔ Pilih *Record Entire Screen* ➔ Di *Options*, pilih Microphone yang aktif ➔ Klik *Record*.
   * **Windows (Nisa / Serina / James):** Tekan `Win + Alt + R` (otomatis mulai rekam layar dengan Game Bar bawaan).
2. **Keterbacaan Font:**
   * Di VS Code: Tekan `Ctrl + +` (Windows) atau `Cmd + +` (Mac) sebanyak **2–3 kali**.
   * Di Browser: Tekan `Ctrl + +` / `Cmd + +` hingga zoom level **110% atau 125%** agar tulisan menu dan harga kue terlihat besar dan jelas di video.
3. **Jika Keseleo Lidah / Salah Baca:**
   * **JANGAN STOP REKAMAN!** Cukup diam selama 3 detik, tarik nafas, lalu ulangi kalimat tersebut dari awal. Areta bisa dengan mudah memotong (*split & delete*) bagian yang salah saat mengedit di CapCut/Canva.
4. **Format Nama File Video (Kirim ke Areta):**
   * `01_opening_oncam.mp4`
   * `02_nisa_config.mp4`
   * `03_sheiren_build.mp4`
   * `04_serina_diagnostik.mp4`
   * `05_serina_livedemo.mp4`
   * `06_nisa_shutdown.mp4`
   * `07_james_handover.mp4`
   * `08_closing_oncam.mp4`
