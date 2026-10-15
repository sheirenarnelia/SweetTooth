# Base image menggunakan Nginx Alpine yang ringan dan aman
FROM nginx:alpine

# Set working directory ke direktori default web Nginx
WORKDIR /usr/share/nginx/html

# Bersihkan file template bawaan Nginx
RUN rm -rf ./*

# Salin seluruh aset aplikasi Sweet Tooth ke root server Nginx
COPY . /usr/share/nginx/html

# Expose port 80 untuk akses web
EXPOSE 80

# Jalankan Nginx di foreground
CMD ["nginx", "-g", "daemon off;"]
