# 🏆 Sports League Management System
**College B.Tech Frontend Project | KL University Sports Council**

---

## 📌 Project Overview
The **Sports League Management System** is a modern, responsive, frontend-only web application designed for managing inter-collegiate sports tournaments (Cricket, Football, Basketball, and Badminton). 

This project was built strictly using **HTML5, Vanilla CSS3, and Pure Vanilla JavaScript** without any external libraries, frameworks (React/Vue/Angular), Bootstrap, Tailwind, or backend databases. Client-side state persistence is managed cleanly using browser `localStorage`.

---

## 💻 Technologies Used
- **HTML5**: Semantic elements, clean page structure, accessible forms.
- **CSS3 (Pure Vanilla)**: Responsive CSS Grid, Flexbox, custom design system variables, animations, glassmorphism modal effects, print styles.
- **Vanilla JavaScript**: DOM manipulation, event listeners, form validation, real-time search filtering, dynamic scorecard simulation, and persistent state management with `localStorage`.

---

## 📁 File Structure
```text
sports-league-management/
│
├── index.html              # Landing / Welcome Portal with tournament banner
├── login.html              # Login page with demo validation & password toggle
├── dashboard.html          # Main student admin dashboard with stat cards & widgets
├── leagues.html            # Leagues page with Add League modal & CRUD
├── teams.html              # Teams page with rosters, captains, coaches & records
├── players.html            # Players directory with real-time search & team filtering
├── fixtures.html           # Match fixtures & Schedule Match modal
├── live-scores.html        # Live Score simulator (+1, +4, +6, Wicket) & commentary
├── standings.html          # Points table with rank badges & recent form
├── tickets.html            # Ticket booking with price calculation & digital e-pass
├── news.html               # Sports news with article popup modals
├── notifications.html      # Notifications with "Mark as Read" functionality
├── profile.html            # Student profile with editable info
│
├── css/
│   └── style.css           # Complete vanilla stylesheet
│
├── js/
│   └── script.js           # Student-friendly, well-commented vanilla JavaScript
│
└── assets/
    └── images/
        ├── banner.jpg      # Sports championship hero banner
        ├── cricket.jpg     # Cricket match news photo
        ├── football.jpg    # Football celebration photo
        └── basketball.jpg  # Basketball slam dunk photo
```

---

## 🔑 Demo Login Credentials
To demonstrate the login flow to your professor:
- **Email**: `admin@sports.com`
- **Password**: `admin123`
- *(Tip: You can also click the **"⚡ Auto Fill"** button directly on the login screen for instant testing!)*

---

## 🚀 Key Features for College Demonstration

### 1. 🔐 Login & Authentication
- Input validation using JavaScript.
- **Show/Hide Password** toggle button.
- **Remember Me** checkbox.
- "Invalid credentials" error alert when entering wrong details.
- Modal to register a demo student account.
- Redirects to `dashboard.html` upon successful login.

### 2. 📊 Student Dashboard
- **6 Key Metrics**: Total Leagues, Total Teams, Total Players, Upcoming Matches, Live Matches, Tickets Booked.
- Upcoming fixtures preview card.
- Recent match scores card (Cricket, Football, Basketball).
- Quick league standings table widget.
- Latest news cards preview.

### 3. 🏆 Leagues Management
- Cards showing league name, sport, season, team count, and status badges.
- **Add League** modal to add a new tournament dynamically.
- **Edit, Delete, and View** buttons with instant UI updates.

### 4. 🛡️ Teams Directory
- Team cards with captains, coaches, roster size, and season win/loss records.
- Filter teams by sport category.
- **Add Team**, Edit, and Delete actions.

### 5. 🏃 Players Management & Search
- Player cards displaying jersey numbers, positions, matches, and career stats.
- **Real-time instant search** filter (as you type).
- Dropdown filter by team.
- **Add Player** modal.

### 6. 📅 Match Fixtures
- Match cards with date, time, venue, and competing teams.
- **Schedule Match** modal to create new fixtures.
- Direct quick link to book match tickets.

### 7. 🔴 Live Score Simulator
- Pulsing red 🔴 LIVE indicator.
- Scoreboard: `KL Warriors 145/4` vs `Andhra Strikers 132/7`.
- Interactive score buttons:
  - `+1 Single`: Adds 1 run and appends ball commentary.
  - `+4 Boundary`: Adds 4 runs and triggers boundary commentary.
  - `+6 Maximum!`: Adds 6 runs and announces maximum strike.
  - `💥 Wicket!`: Increments wicket count.
- Dynamic run rate and target calculation.
- Ball-by-ball commentary feed.

### 8. 🏅 Standings (Points Table)
- Official league table: Pos, Team, Played, Won, Lost, Tied, NRR, Points, Form.
- 1st position highlighted in gold (`🥇 KL Warriors`).
- Form badges (`W`, `L`, `D`).

### 9. 🎟️ Ticket Booking & Digital E-Pass
- Form with match selection, name, email, and ticket tier.
- Tiers: Regular (₹100), Premium (₹250), VIP (₹500).
- Real-time price calculation based on quantity.
- Generates a unique **Booking ID** (`TKT-2026-KL-XXXX`).
- Displays a stylish digital e-ticket pass with simulated barcode.

### 10. 📰 Sports News & Bulletins
- High-resolution sports action photos for Cricket, Football, and Basketball.
- Category badges and publishing dates.
- "Read More" button that opens an article popup modal.

### 11. 🔔 Notifications
- List of real-time alerts.
- Individual **Mark as Read** button.
- **Mark All as Read** button.
- Live badge count in top navbar and sidebar.

### 12. 👤 Student Admin Profile
- Personal profile card with avatar, role, email, phone, and student ID.
- Editable profile form with instant save to `localStorage`.
- Updates user name and avatar across topbar and sidebar dynamically.

---

## 🎓 Viva Questions & Answers (How to Explain to Your Sir)

**Q1: What technologies did you use for this project?**
> *"Sir, I used pure HTML5 for structure, Vanilla CSS3 for styling and responsive layouts, and Pure Vanilla JavaScript for interactivity and state management. I did not use any heavy frameworks like React, Node.js, or external CSS frameworks like Bootstrap."*

**Q2: Where is the data stored without a backend or database?**
> *"Sir, this is a client-side frontend project. I used the browser's built-in `localStorage` API. When the user logs in, adds a team, schedules a match, or books a ticket, the JavaScript functions serialize the objects to JSON and save them in `localStorage`. When any page loads, it fetches and parses the data, so changes persist across all pages."*

**Q3: How does the live score simulation work?**
> *"Sir, on `live-scores.html`, when an admin clicks '+4' or '+6', the `updateLiveScore()` function in `script.js` increments the run tally, recalculates overs and net run rate, prepends a new commentary object to the array, updates the DOM elements, and saves the updated match state."*

**Q4: How does the real-time player search work?**
> *"Sir, an `input` event listener is attached to the search field in `players.html`. On every keystroke, `renderPlayers()` filters the array using `.includes()` on player names, teams, and positions, and re-renders the filtered cards instantly."*

---

## 🌐 How to Run Locally
1. Simply double-click `login.html` (or `index.html`) in any web browser (Chrome, Edge, Firefox).
2. Or use VS Code Live Server / Python HTTP Server:
   ```bash
   python -m http.server 8085
   ```
3. Open `http://localhost:8085/login.html` in your browser.
