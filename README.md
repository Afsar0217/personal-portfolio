# Personal Portfolio

A fully responsive personal portfolio website built with **HTML5**, **CSS3**, and **JavaScript** to showcase your projects, skills, and achievements.

---

## 🚀 Features

- Mobile-first responsive layout
- Lightweight and fast (static site, no framework overhead)
- Smooth scrolling and animations
- Sectioned navigation: About, Projects, Skills, Contact
- Easy to customize with your content, styling, and images

---

## 🛠️ Technologies

- HTML5 & CSS3 (Flexbox/Grid)
- Vanilla JavaScript
- Optional libraries (update as needed):
  - Smooth scroll / scroll reveal
  - Custom fonts or icons

---

## 🧩 Getting Started

### Prerequisites

- [Git](https://git-scm.com) installed (if cloning)
- Optional: Web server (for testing locally)

### Clone the Repository

```bash
git clone https://github.com/Afsar0217/personal-portfolio.git
cd personal-portfolio
```

### Run Locally (Optional)

Use a simple HTTP server (Node.js or Python):

```bash
# Node.js
npx http-server .

# Python 3.x
python -m http.server 8000
```

Visit [http://localhost:8080](http://localhost:8080) (or port 8000) to see it live.

### Project Structure

```
/
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # Optional interactivity
├── images/                 # All project and asset images
├── index.html              # Main entry point
└── README.md               # This documentation
```

---

## ⚙️ Customization

1. **Update content**  
   Modify sections in `index.html`—intro, about, skills, portfolio, contact—to reflect your own details.

2. **Change styling**  
   Edit `css/style.css` to adjust fonts, colors, spacing, layout.

3. **Add assets**  
   Save your images in the `images/` folder and update `src` paths.

4. **Enhance JavaScript**  
   Open or add functionality in `js/script.js` if you want interactive elements or scroll effects.

---

## 📦 Deployment

### Deploy on **Render.com** (Recommended)

1. Push your updated code to GitHub  
2. In Render: **New → Static Site**, connect this repo  
3. Use default settings:
   - **Branch**: main (or master)
   - **Build Command**: _leave blank_ (no build step)
   - **Publish Path**: `.` (root)
4. Click **Create**, wait for build, then visit your live URL!

### Other Options

- **GitHub Pages**: Publish via `gh-pages` branch or root
- **Netlify/Vercel**: Connect repo, set directory, deploy instantly

---

## 📝 Notes

- Ensure image/CSS paths are **relative**, e.g. `css/style.css`, to avoid broken links.
- Minify assets (CSS/JS/images) for faster load times in production.
- Replace placeholder contact form with actual mail links or backend endpoint.

---

## 💬 Feedback

Feel free to contribute or suggest improvements! Contact:

- **Author**: [Your Name]
- **Email**: yourname@example.com
- **GitHub**: [github.com/Afsar0217](https://github.com/Afsar0217)

---

## 📜 License

This project is licensed under the **MIT License**, see the [LICENSE](LICENSE) file for details.
