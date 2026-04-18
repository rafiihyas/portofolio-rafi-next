---
title: "Sistem Billing TV Kabel"
slug: "billing-tv-kabel"
date: "2024-08-01"
image: "/assets/box-projects.svg"
tags: ["Laravel", "Tailwind CSS", "Dashboard", "Billing"]
description: "Aplikasi manajemen pelanggan dan tagihan TV kabel yang dilengkapi dengan multi-role dashboard untuk berbagai divisi kerja."
---

# Manajemen Tagihan Terpusat

Proyek ini saya kerjakan selama masa magang di PT. Visdat Teknik Utama. Tujuannya adalah untuk mempermudah perusahaan TV kabel lokal dalam mengelola data pelanggan, melacak status berlangganan, dan memproses tagihan bulanan.

## Antarmuka Multi-Role (RBAC)
Sistem ini membutuhkan antarmuka yang sangat spesifik tergantung siapa yang *login*. Saya mengembangkan UI khusus untuk masing-masing peran:
- **Admin/Operator:** Dashboard utama untuk melihat analitik pemasukan, menambah pelanggan baru, dan memantau status jaringan.
- **Teknisi:** Tampilan *mobile-friendly* untuk melihat daftar tugas perbaikan atau pemasangan baru di lapangan.
- **Kolektor:** Antarmuka khusus untuk mencatat pembayaran tagihan dari rumah ke rumah.
- **Pelanggan:** Portal sederhana untuk melihat tagihan bulan ini dan riwayat pembayaran.

Proyek ini dibangun sepenuhnya menggunakan **Laravel**, dan ini menjadi pengalaman berharga saya dalam memahami logika bisnis *subscription* (berlangganan) dan arsitektur *Role-Based Access Control*.