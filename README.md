# 🇱🇦 KIPTEXT API · Lao Number to Text Converter

A powerful Lao language API built with **Next.js 14** (App Router, TypeScript), converting numbers into fully written Lao text — including native Lao script, Lao numerals, and karaoke-style romanization.

---

## ✨ Features

- 🔢 Converts integers and decimals into full Lao text
- 🎤 Outputs karaoke-style Lao pronunciation in English letters
- 🔡 Converts digits into Lao numerals (໐-໙)
- 📦 JSON API built with **Next.js API Route**
- 💅 UI documentation page with **Tailwind CSS**
- 🌐 Lao font support with [Noto Sans Lao](https://fonts.google.com/specimen/Noto+Sans+Lao)

---

## 🚀 Demo

> API Example

**GET** `/api/kiptext?number=9876543210`

**JSON Response:**

```json
{
  "number": "9876543210",
  "lo": "ເກົ້າພັນແປດຮ້ອຍເຈັດສິບຫົກລ້ານຫ້າແສນສີ່ຫມື່ນສາມພັນສອງຮ້ອຍສິບ",
  "origin": "໙໘໗໖໕໔໓໒໑໐",
  "oke": "kao phan paet hoi chet sip hok lan ha saen si muen sam phan song hoi sip"
}
```

> Max supported input: `9999999999`

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/kiptext-api
cd kiptext-api
npm install
```

---

## 🛠️ Development

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000) for the documentation page.
