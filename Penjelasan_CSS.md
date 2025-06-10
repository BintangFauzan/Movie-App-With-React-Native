# Panduan CSS di React Native

## Flex Layout

### 1. Flex Basics
- `flex: 1` - Mengambil seluruh ruang yang tersedia
- `flex: 2` - Mengambil ruang 2x lebih besar dari flex: 1
- `flex: 0` - Hanya mengambil ruang sesuai ukuran konten

### 2. Flex Direction
- `flexDirection: 'column'` - Susun vertikal (default)
- `flexDirection: 'row'` - Susun horizontal
- `flexDirection: 'column-reverse'` - Susun vertikal terbalik
- `flexDirection: 'row-reverse'` - Susun horizontal terbalik

### 3. Alignment & Justification
#### justifyContent (Main Axis)
- `justifyContent: 'flex-start'` - Awal container
- `justifyContent: 'flex-end'` - Akhir container
- `justifyContent: 'center'` - Tengah container
- `justifyContent: 'space-between'` - Spasi merata antara item
- `justifyContent: 'space-around'` - Spasi merata sekitar item
- `justifyContent: 'space-evenly'` - Spasi sama rata

#### alignItems (Cross Axis)
- `alignItems: 'flex-start'` - Awal container
- `alignItems: 'flex-end'` - Akhir container
- `alignItems: 'center'` - Tengah container
- `alignItems: 'stretch'` - Merentang memenuhi container
- `alignItems: 'baseline'` - Sejajar dengan baseline text

## Positioning

### 1. Position Type
- `position: 'relative'` - Posisi normal (default)
- `position: 'absolute'` - Posisi relatif terhadap parent

### 2. Position Properties
- `top: number` - Jarak dari atas
- `bottom: number` - Jarak dari bawah
- `left: number` - Jarak dari kiri
- `right: number` - Jarak dari kanan
- `zIndex: number` - Urutan tumpukan

### 3. Spacing
#### Margin (Jarak Luar)
- `margin: number` - Semua sisi
- `marginTop: number`
- `marginBottom: number`
- `marginLeft: number`
- `marginRight: number`
- `marginHorizontal: number` - Kiri & kanan
- `marginVertical: number` - Atas & bawah

#### Padding (Jarak Dalam)
- `padding: number` - Semua sisi
- `paddingTop: number`
- `paddingBottom: number`
- `paddingLeft: number`
- `paddingRight: number`
- `paddingHorizontal: number` - Kiri & kanan
- `paddingVertical: number` - Atas & bawah

## Dimensi

### 1. Fixed Dimensions
- `width: number/string` - Lebar tetap
- `height: number/string` - Tinggi tetap

### 2. Dynamic Dimensions
- `minWidth: number/string`
- `maxWidth: number/string`
- `minHeight: number/string`
- `maxHeight: number/string`

### 3. Percentage Dimensions
- `width: '100%'`
- `height: '50%'`

## Tips Penggunaan

1. **Nested Flex Containers**
```jsx
<View style={{ flex: 1 }}>
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View style={{ flex: 2 }}/>
    <View style={{ flex: 3 }}/>
  </View>
</View>
```

2. **Absolute Positioning dengan Flex**
```jsx
<View style={{ flex: 1 }}>
  <View style={{
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1
  }}/>
</View>
```

3. **Centered Content**
```jsx
<View style={{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}}/>
```

## Perbedaan dengan CSS Web
1. Menggunakan camelCase (marginLeft bukan margin-left)
2. Nilai numerik langsung (margin: 10 bukan margin: 10px)
3. Tidak mendukung shorthand properties
4. Flexbox adalah default display mode
5. Tidak ada float atau grid

## Best Practices
1. Gunakan flex untuk layout yang responsif
2. Hindari fixed dimensions jika memungkinkan
3. Manfaatkan nested flex containers untuk layout kompleks
4. Gunakan percentage untuk dimensi yang adaptif
5. Prioritaskan flexbox daripada absolute positioning
