# 🃏 Ace of Words (אס המילים) - Alias Style Web Game

I really enjoy board games, especially party word games like "Alias", but carrying the physical box around isn't always practical. I built this lightweight, mobile-first web app to have an accessible, custom-themed version ready to play on my phone.

**🌍 Note: The game's UI and word bank are entirely in Hebrew**

## 📌 What is this?
A competitive word-guessing game for 2 to 4 teams. The goal is to explain as many words as possible before the timer runs out. The app handles game state, tracks turns, calculates scores, and visually moves teams across a custom-drawn progress map.

## 🚀 Key Features

* **Dynamic Theming (CSS Variables):** The UI theme adapts instantly to the active team. Each team features a unique playing-card identity (Queen of Diamonds, King of Spades, Skull Club, Bleeding Heart) with dedicated backgrounds, palettes, and typography (*Frank Ruhl Libre*).
* **Interactive Progress Map:** A visual 48-step board game map. Utilizes a custom percentage-based coordinate system with a smart-offset algorithm to prevent token overlaps when multiple teams share the same spot.
* **The Joker Round 🃏:** Triggers automatically every 5 turns as a pantomime-only round with no timer. Any team can guess, and dynamic controls allow awarding points on the fly.
* **Swipe & Touch Gestures:** Native-feeling touch controls supporting swipe gestures (Right for Success, Left for Pass) directly on the cards.
* **Smart Scoring Logic:** Accounts for negative round scores with backward movement while strictly clamping team positions between the start line (0) and finish line (48).
* **External Word Bank:** Loads terms dynamically from a standalone `words.txt` file via the `fetch` API for simple vocabulary updates.

## 🛠️ Tech Stack
Built cleanly with zero external dependencies or libraries:
* **HTML5**
* **CSS3:** Dynamic runtime theming via CSS variables (`:root`), Flexbox, CSS Grid, and keyframe animations.
* **Vanilla JavaScript:** State management, core game loop, timers, touch/mouse event handling, and DOM rendering.

## ⚖️ Credits & Assets
This project is an open-source, non-commercial portfolio project built for educational purposes and game nights. Visual assets (card backgrounds, illustrations, and the map) were sourced from Pinterest and modified to fit the application's unique vintage UI/UX theme. All rights to original artwork remain with the respective creators.
