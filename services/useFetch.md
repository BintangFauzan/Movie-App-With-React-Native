# Penjelasan Custom Hook `useFetch`

Custom hook `useFetch` adalah hook reusable di React/React Native yang digunakan untuk melakukan proses pengambilan data (fetching) secara asinkronus, serta mengelola state terkait data, loading, dan error. Berikut penjelasan setiap bagian/fungsinya:

---

## 1. Import
```typescript
import { useEffect, useState } from "react";
```
Mengimpor hook bawaan React yang digunakan untuk mengelola state (`useState`) dan efek samping (`useEffect`).

---

## 2. Deklarasi Hook
```typescript
const useFetch = <T>(fetchFunction : () => Promise<T>, autoFetch = true) => { ... }
```
- **<T>**: Menggunakan generic agar hook ini bisa digunakan untuk berbagai tipe data.
- **fetchFunction**: Fungsi async yang akan dipanggil untuk mengambil data.
- **autoFetch**: Jika `true`, data akan otomatis di-fetch saat komponen mount.

---

## 3. State Management
```typescript
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<T | null>(null);
```
- **data**: Menyimpan hasil data dari fetch.
- **loading**: Menyimpan status loading (true/false).
- **error**: Menyimpan error jika terjadi saat fetch.

---

## 4. Fungsi `fetchData`
```typescript
const fetchData = async () => { ... }
```
- Mengatur `loading` menjadi `true` saat mulai fetch.
- Memanggil `fetchFunction` dan menyimpan hasilnya ke `data` jika sukses.
- Jika terjadi error, menyimpan error ke state `error`.
- Setelah selesai (sukses/gagal), mengatur `loading` menjadi `false`.

---

## 5. Fungsi `reset`
```typescript
const reset = () => { ... }
```
- Mengembalikan semua state (`data`, `loading`, `error`) ke nilai awal.

---

## 6. useEffect (Auto Fetch)
```typescript
useEffect(() => {
    if (autoFetch) {
        fetchData();
    }
}, []);
```
- Ketika komponen mount, jika `autoFetch` bernilai `true`, maka otomatis memanggil `fetchData`.

---

## 7. Return Value
```typescript
return { data, loading, error, refetch: fetchData, reset };
```
- Mengembalikan object yang berisi:
  - **data**: hasil data
  - **loading**: status loading
  - **error**: error jika ada
  - **refetch**: fungsi untuk fetch ulang
  - **reset**: fungsi untuk reset state

---

## 8. Kesimpulan
Custom hook ini memudahkan pengambilan data asinkronus di React/React Native, dengan pengelolaan state yang praktis dan reusable.
