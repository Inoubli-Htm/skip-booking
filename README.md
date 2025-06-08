# ♻️ Skip Booking App

This is a React + TypeScript application that allows users to **select a skip size** from a list based on their location. It features a clean and responsive UI with smooth selection interactions and highlights.

> 🔗 GitHub Repository: [Inoubli-Htm/skip-booking](https://github.com/Inoubli-Htm/skip-booking.git)

## 🚀 Features

- 🔄 Fetches skips dynamically from a public API
- ✅ Clean, card-based UI using React-Bootstrap
- 🔘 Visual selection (blue outline + dynamic button state)
- 📱 Fully responsive across devices
- 💬 Bottom action bar with current selection summary

## 🧑‍💻 Tech Stack

- ⚛️ React 18+
- ✨ TypeScript
- 💄 React-Bootstrap
- 🔗 Axios (API calls)

## 🖼️ Preview

*(You can add a `preview.png` inside `public/` and uncomment the line below)*  
<!-- ![UI Preview](public/preview.png) -->

## 📂 Folder Structure

```
skip-booking/
├── public/
│   └── yarder-skip.jpg        # Image used for all cards
├── src/
│   ├── components/
│   │   ├── SkipCard.tsx       # Skip card component
│   │   ├── ProgressBar.tsx    # Top progress bar
│   │   └── BottomBar.tsx      # Bottom sticky bar
│   ├── types/
│   │   └── Skip.ts            # TypeScript type for Skip
│   ├── App.tsx                # Main app component
│   └── App.css                # Custom styling
```

## ⚙️ Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Inoubli-Htm/skip-booking.git
cd skip-booking
npm install
npm run start
```

## 🧪 Testing

This version does not include tests yet, but you can easily add unit tests using `jest` or `react-testing-library`.

## 🔧 Customization

- 🖼 Replace the image `yarder-skip.jpg` in the `public/` folder to use different visuals.
- 🎨 Modify the styles in `App.css` to customize the UI (colors, spacing, hover effects).
- 🔗 Change the API endpoint in `App.tsx` to fetch skips based on another location or system.

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

Made with by [@Inoubli-Htm](https://github.com/Inoubli-Htm)
