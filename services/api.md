# Penjelasan Cara Kerja File `api.ts`

File ini berfungsi sebagai service untuk mengambil data film dari API The Movie Database (TMDb) pada aplikasi React Native Anda.

---

## 1. Konfigurasi API

```typescript
export const TMBD_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    }
}
```

- **BASE_URL**: Alamat dasar endpoint TMDb.
- **API_KEY**: Mengambil API key dari environment variable.
- **headers**: Header HTTP yang digunakan untuk setiap request, termasuk tipe data (`accept`) dan otorisasi Bearer Token.

---

## 2. Fungsi `fetchMovies`

```typescript
export const fetchMovies = async ({query} : {query: string}) => {
    const endPoint = query ? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :   `${TMBD_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endPoint, {
        method: 'GET',
        headers: TMBD_CONFIG.headers
    })

    if(!response.ok) {
        // @ts-ignore
        throw new Error("Could not fetch movie", response.statusText);
    }

    const data = await response.json();
    return data.results;
}
```

### Penjelasan:

- **Parameter**: Menerima objek dengan properti `query` (string).
- **Endpoint**:
  - Jika `query` ada, maka akan mencari film berdasarkan kata kunci (`/search/movie`).
  - Jika tidak ada, maka akan mengambil daftar film populer (`/discover/movie?sort_by=popularity.desc`).
- **Request**: Mengirim request HTTP GET ke endpoint TMDb dengan header yang sudah dikonfigurasi.
- **Error Handling**: Jika response gagal, akan melempar error.
- **Return**: Mengembalikan array hasil film dari response API (`data.results`).

---

## 3. Kesimpulan

File ini digunakan untuk mengambil data film dari TMDb, baik berdasarkan pencarian kata kunci maupun daftar film populer, dengan otorisasi API key yang diambil dari environment variable.
