# Movie App - React Native Mobile Application

## 📱 Overview
Aplikasi pencarian film yang dibangun menggunakan React Native dengan integrasi TMDB API. Aplikasi ini memungkinkan pengguna untuk mencari dan melihat informasi film secara real-time.

## 🚀 Fitur Utama
- Real-time movie search
- Debounced search untuk optimasi performa
- Tampilan grid responsif untuk daftar film
- Loading states & error handling
- Interface yang clean dan modern

## 🛠️ Tech Stack
- React Native
- TypeScript
- TailwindCSS (via NativeWind)
- TMDB API
- React Navigation

## 📦 Dependencies
```json
{
  "react-native": "latest",
  "typescript": "^5.0.0",
  "nativewind": "^2.0.0",
  "@react-navigation/native": "^6.0.0"
}
```

## 🔧 Installation

```bash
# Clone repository
git clone https://github.com/username/movie-app.git

# Install dependencies
cd movie-app
npm install

# Run the app
npm run android   # for Android
npm run ios       # for iOS
```

## 💡 Usage
1. Buka aplikasi
2. Ketik judul film yang ingin dicari
3. Hasil pencarian akan muncul secara otomatis
4. Scroll untuk melihat lebih banyak hasil

## 📁 Struktur Proyek
```
app/
├── (tabs)/          # Tab navigator screens
├── components/      # Reusable components
├── movies/         # Movie detail pages
└── globals.css     # Global styles

assets/
├── fonts/          # Custom fonts
├── icons/          # App icons
└── images/         # App images

services/
├── api.ts          # API service
└── useFetch.ts     # Custom fetch hook
```

## 📄 License
MIT License

## 👥 Contributors
- [Bintang Fauzan](https://github.com/username)

---
*Note: Aplikasi ini masih dalam tahap pengembangan aktif*
