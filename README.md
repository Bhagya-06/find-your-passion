# Find Your Passion 💙

A simple yet powerful interactive quiz that helps you discover what truly excites you — and turns it into real-world career paths.

---

## 🌈 About the Project

**Find Your Passion** is designed to guide users through self-reflection using a clean, minimal, and engaging UI.

Instead of overwhelming choices, it asks the right questions and finally it helps you pick something you can do **forever without getting exhausted!**

---

## 🚀 Features

✨ Clean glassmorphism UI
🎯 Smart question flow
🧠 OR-based logic (more inclusive results)
📊 Dynamic data from JSON
💙 Smooth user experience
🎉 Result with:

* Activity
* Career paths
* Niche suggestions

---

## 🛠️ Tech Stack

* **HTML**
* **CSS**
* **JavaScript**
* **JSON (data handling)**
* **Netlify (deployment)**
* **GitHub (version control)**

---

## 📂 Project Structure

```
find-your-passion/
│── index.html
│── style.css
│── script.js
│── data.json
│── icon.png
```

---

## ⚙️ How It Works

1. User starts the journey 🚀
2. Answers 3 introspective questions
3. System combines answers using **OR logic**
4. Final selection is made
5. Results show:

   * 💡 Best-fit activity
   * 💼 Careers
   * 🌱 Niche opportunities

---

## 🔥 Key Logic

Instead of strict filtering (AND logic), this app uses:

```js
const finalOptions = [...new Set([
  ...answers[0],
  ...answers[1],
  ...answers[2]
])];
```

👉 This ensures:

* More flexibility
* Better suggestions
* Less frustration

---

## 🌐 Live Demo

🔗 *Add your Netlify link here*
Example:

```
https://find-your-passion.netlify.app
```

---

## 💡 Future Improvements

* 🤖 AI-based suggestions
* 📚 Generate a detailed Roadmap
* 📊 Analytics dashboard
* 📱 Mobile app version

---

## 🙌 Inspiration

This project is built on a simple idea:

> "Clarity comes from understanding yourself."

---

## 👩‍💻 Author

**Bhagya B**
UI/UX Designer • Developer • Creative Thinker 💙

---

## ⭐ Support

If you like this project:
👉 Give it a ⭐ on GitHub
👉 Share it with your friends

---

## 💙 Final Note

This is more than a quiz.
It’s a small step toward helping someone find what they love.

✨ And that matters.
