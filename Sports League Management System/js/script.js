/**
 * =============================================================================
 * SPORTS LEAGUE MANAGEMENT SYSTEM - MAIN JAVASCRIPT
 * College Frontend Project (B.Tech Level)
 * Technologies: Pure Vanilla JavaScript (No Frameworks, No External Libraries)
 * Concept: Uses LocalStorage for client-side state persistence.
 * =============================================================================
 */

/* -------------------------------------------------------------
   1. DEFAULT DATA CONFIGURATION
   (Used on first run or when resetting data)
------------------------------------------------------------- */
const DEFAULT_DATA = {
  // Current logged in student/admin profile
  user: {
    name: "Manikanta",
    email: "admin@sports.com",
    role: "Sports Council Administrator",
    phone: "+91 98765 43210",
    college: "KL University, Vaddeswaram",
    department: "Computer Science & Engineering",
    studentId: "2200030001",
    avatarText: "M"
  },

  // Registered users list for authentication
  users: [
    {
      id: 1,
      name: "Manikanta",
      email: "admin@sports.com",
      password: "admin123",
      role: "Sports Council Administrator",
      college: "KL University, Vaddeswaram",
      department: "Computer Science & Engineering",
      studentId: "2200030001",
      avatarText: "M"
    }
  ],

  // Leagues List
  leagues: [
    { id: 1, name: "University Cricket League (UCL 2026)", sport: "Cricket", season: "Season 5", teamsCount: 8, status: "Active" },
    { id: 2, name: "College Football Championship (CFC)", sport: "Football", season: "Season 3", teamsCount: 6, status: "Active" },
    { id: 3, name: "Inter-Collegiate Basketball Trophy", sport: "Basketball", season: "Season 4", teamsCount: 6, status: "Active" },
    { id: 4, name: "Campus Badminton Premier League", sport: "Badminton", season: "Season 2", teamsCount: 4, status: "Upcoming" }
  ],

  // Teams List
  teams: [
    { id: 1, name: "KL Warriors", sport: "Cricket", captain: "Rahul Sharma", coach: "Mr. K. Rama Rao", playersCount: 15, wins: 7, losses: 2, badgeText: "KLW", color: "#1e3a8a" },
    { id: 2, name: "Andhra Strikers", sport: "Cricket", captain: "Karthik Varma", coach: "Mr. P. Srinivas", playersCount: 15, wins: 6, losses: 3, badgeText: "ANS", color: "#dc2626" },
    { id: 3, name: "Campus Kings", sport: "Football", captain: "David Kumar", coach: "Mr. A. Joseph", playersCount: 18, wins: 5, losses: 2, badgeText: "CKG", color: "#059669" },
    { id: 4, name: "Rising Stars", sport: "Football", captain: "Suresh Raina", coach: "Mr. M. Naidu", playersCount: 16, wins: 4, losses: 3, badgeText: "RSS", color: "#d97706" },
    { id: 5, name: "Coastal Titans", sport: "Basketball", captain: "Ananya Reddy", coach: "Mrs. S. Lakshmi", playersCount: 12, wins: 8, losses: 1, badgeText: "CST", color: "#7c3aed" },
    { id: 6, name: "Royal Challengers VJA", sport: "Basketball", captain: "Naveen Teja", coach: "Mr. G. Prasad", playersCount: 12, wins: 5, losses: 4, badgeText: "RCV", color: "#db2777" }
  ],

  // Players List
  players: [
    { id: 1, name: "Rahul Sharma", team: "KL Warriors", jersey: 18, position: "Top-order Batsman", matches: 12, performance: "350 Runs, Avg 43.7", sport: "Cricket" },
    { id: 2, name: "Karthik Varma", team: "Andhra Strikers", jersey: 7, position: "All-Rounder", matches: 12, performance: "280 Runs, 14 Wickets", sport: "Cricket" },
    { id: 3, name: "David Kumar", team: "Campus Kings", jersey: 10, position: "Striker / Forward", matches: 10, performance: "8 Goals, 4 Assists", sport: "Football" },
    { id: 4, name: "Suresh Raina", team: "Rising Stars", jersey: 9, position: "Midfielder", matches: 9, performance: "5 Goals, 6 Assists", sport: "Football" },
    { id: 5, name: "Ananya Reddy", team: "Coastal Titans", jersey: 23, position: "Point Guard", matches: 11, performance: "120 Points, 45 Assists", sport: "Basketball" },
    { id: 6, name: "Naveen Teja", team: "Royal Challengers VJA", jersey: 15, position: "Center Forward", matches: 10, performance: "98 Points, 32 Rebounds", sport: "Basketball" },
    { id: 7, name: "Vikram Sethi", team: "KL Warriors", jersey: 45, position: "Fast Bowler", matches: 11, performance: "19 Wickets, Econ 6.4", sport: "Cricket" },
    { id: 8, name: "Manoj Kumar", team: "Andhra Strikers", jersey: 11, position: "Wicketkeeper Batsman", matches: 12, performance: "215 Runs, 11 Catches", sport: "Cricket" }
  ],

  // Match Fixtures
  fixtures: [
    { id: 1, team1: "KL Warriors", team2: "Andhra Strikers", sport: "Cricket", date: "October 12, 2026", time: "5:00 PM", venue: "KL University Main Ground", status: "Upcoming" },
    { id: 2, team1: "Campus Kings", team2: "Rising Stars", sport: "Football", date: "October 14, 2026", time: "4:30 PM", venue: "Campus Football Arena", status: "Upcoming" },
    { id: 3, team1: "Coastal Titans", team2: "Royal Challengers VJA", sport: "Basketball", date: "October 15, 2026", time: "6:00 PM", venue: "Indoor Sports Complex Court 1", status: "Upcoming" },
    { id: 4, team1: "KL Warriors", team2: "Rising Stars", sport: "Cricket", date: "October 18, 2026", time: "2:00 PM", venue: "KL University Main Ground", status: "Scheduled" },
    { id: 5, team1: "Andhra Strikers", team2: "Campus Kings", sport: "Football", date: "October 20, 2026", time: "5:00 PM", venue: "Campus Football Arena", status: "Scheduled" }
  ],

  // Live Score Simulation Data
  liveMatch: {
    league: "University Cricket League - Match 14 (Finals Qualifier)",
    venue: "KL University Ground (Floodlights)",
    team1: "KL Warriors",
    team2: "Andhra Strikers",
    team1Runs: 145,
    team1Wickets: 4,
    overs: 16.2,
    team2Summary: "132/7 (20.0 ov)",
    target: 133,
    statusText: "KL Warriors need 12 runs in 22 balls to win",
    commentary: [
      { over: "16.2", text: "FOUR! Rahul Sharma drives through extra cover for a glorious boundary!" },
      { over: "16.1", text: "1 run. Pushed into the mid-wicket gap for a quick single." },
      { over: "15.6", text: "DOT ball. Well defended towards short cover." },
      { over: "15.5", text: "SIX! Smashed high over long-on! What a clean strike!" }
    ]
  },

  // Standings Points Table
  standings: [
    { rank: 1, team: "KL Warriors", played: 9, won: 7, lost: 2, drawn: 0, nrr: "+1.250", points: 14, form: ["W", "W", "L", "W"] },
    { rank: 2, team: "Coastal Titans", played: 9, won: 7, lost: 2, drawn: 0, nrr: "+0.840", points: 14, form: ["W", "L", "W", "W"] },
    { rank: 3, team: "Andhra Strikers", played: 9, won: 6, lost: 3, drawn: 0, nrr: "+0.450", points: 12, form: ["L", "W", "W", "L"] },
    { rank: 4, team: "Campus Kings", played: 9, won: 5, lost: 4, drawn: 0, nrr: "+0.120", points: 10, form: ["W", "W", "L", "L"] },
    { rank: 5, team: "Rising Stars", played: 9, won: 4, lost: 5, drawn: 0, nrr: "-0.320", points: 8, form: ["L", "L", "W", "L"] },
    { rank: 6, team: "Royal Challengers VJA", played: 9, won: 3, lost: 6, drawn: 0, nrr: "-0.950", points: 6, form: ["L", "W", "L", "L"] }
  ],

  // Pre-booked sample tickets
  tickets: [
    { id: "TKT-2026-KL-7821", match: "KL Warriors vs Andhra Strikers", name: "Manikanta", email: "admin@sports.com", type: "VIP", count: 2, total: 1000, date: "Oct 12, 2026" },
    { id: "TKT-2026-KL-6419", match: "Campus Kings vs Rising Stars", name: "Sneha Rao", email: "sneha@student.edu", type: "Regular", count: 3, total: 300, date: "Oct 14, 2026" }
  ],

  // News Articles
  news: [
    {
      id: 1,
      title: "KL Warriors reach the finals after thrilling victory",
      desc: "KL Warriors defeated Campus Kings in an exciting semifinal match at KL University Ground with clutch boundaries in the death overs.",
      category: "Cricket",
      date: "October 03, 2026",
      image: "assets/images/cricket.jpg",
      fullText: "In a breathtaking clash that kept spectators on the edge of their seats, the KL Warriors secured their ticket to the UCL 2026 Finals. Captain Rahul Sharma played a magnificent anchor innings, scoring 58 runs off 38 balls. The atmosphere at KL University Ground was electric as students and faculty packed the stands to cheer for their departmental heroes."
    },
    {
      id: 2,
      title: "Campus Kings clinch thrilling football derby 2-1",
      desc: "A dramatic 90th-minute header by forward David Kumar sent Campus Kings into the football semifinals amidst roaring collegiate crowds.",
      category: "Football",
      date: "October 02, 2026",
      image: "assets/images/football.jpg",
      fullText: "The College Football Championship witnessed one of its most spirited matches as Campus Kings edged past Rising Stars 2-1. David Kumar's curling header during extra time sealed the victory. Coach Joseph praised the disciplined backline defense that weathered aggressive counter-attacks during the final quarter."
    },
    {
      id: 3,
      title: "Inter-Department Basketball Championship kicks off",
      desc: "Over 12 engineering departments clash for the prestigious Chancellor's Trophy at the Indoor Sports Complex this week.",
      category: "Basketball",
      date: "September 29, 2026",
      image: "assets/images/basketball.jpg",
      fullText: "The Annual Basketball Championship commenced on Monday with 12 departmental teams participating. Defending champions Coastal Titans displayed clinical passing and sharp shooting to defeat their opening opponents. The tournament promises high-octane collegiate basketball action with matches scheduled daily at 6:00 PM."
    }
  ],

  // Notifications
  notifications: [
    { id: 1, title: "Match starts tomorrow: KL Warriors vs Andhra Strikers", time: "10 mins ago", read: false, icon: "🏏" },
    { id: 2, title: "Ticket booking confirmed: Booking ID #TKT-2026-KL-7821", time: "1 hour ago", read: false, icon: "🎟️" },
    { id: 3, title: "Fixture updated: Football match venue confirmed at Ground A", time: "Yesterday", read: false, icon: "⚽" },
    { id: 4, title: "New league announced: Campus Badminton Premier League 2026", time: "2 days ago", read: true, icon: "🏸" }
  ]
};

/* -------------------------------------------------------------
   2. LOCALSTORAGE STATE HELPER FUNCTIONS
------------------------------------------------------------- */

/**
 * Initializes localStorage data if not already present.
 */
function initStorage() {
  // Ensure registered users array is initialized and persists
  if (!localStorage.getItem("slms_users")) {
    localStorage.setItem("slms_users", JSON.stringify(DEFAULT_DATA.users));
  }

  if (!localStorage.getItem("slms_initialized")) {
    localStorage.setItem("slms_user", JSON.stringify(DEFAULT_DATA.user));
    localStorage.setItem("slms_leagues", JSON.stringify(DEFAULT_DATA.leagues));
    localStorage.setItem("slms_teams", JSON.stringify(DEFAULT_DATA.teams));
    localStorage.setItem("slms_players", JSON.stringify(DEFAULT_DATA.players));
    localStorage.setItem("slms_fixtures", JSON.stringify(DEFAULT_DATA.fixtures));
    localStorage.setItem("slms_liveMatch", JSON.stringify(DEFAULT_DATA.liveMatch));
    localStorage.setItem("slms_standings", JSON.stringify(DEFAULT_DATA.standings));
    localStorage.setItem("slms_tickets", JSON.stringify(DEFAULT_DATA.tickets));
    localStorage.setItem("slms_news", JSON.stringify(DEFAULT_DATA.news));
    localStorage.setItem("slms_notifications", JSON.stringify(DEFAULT_DATA.notifications));
    localStorage.setItem("slms_initialized", "true");
  }
}

// Get item from localStorage with fallback
function getData(key) {
  try {
    const val = localStorage.getItem("slms_" + key);
    return val ? JSON.parse(val) : DEFAULT_DATA[key];
  } catch (e) {
    return DEFAULT_DATA[key];
  }
}

// Save item to localStorage
function saveData(key, val) {
  localStorage.setItem("slms_" + key, JSON.stringify(val));
}

// Reset all data back to original defaults
function resetAllData() {
  if (confirm("Reset all sports data to default demo state?")) {
    localStorage.clear();
    initStorage();
    showToast("Data reset to default successfully!", "info");
    setTimeout(() => window.location.reload(), 600);
  }
}

/* -------------------------------------------------------------
   3. AUTHENTICATION & LOGIN/LOGOUT LOGIC
------------------------------------------------------------- */

/**
 * Validates login credentials against registered users stored in localStorage.
 * Supports newly registered users as well as default administrator.
 */
function handleLoginSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("loginEmail");
  const passwordInput = document.getElementById("loginPassword");
  const errorBox = document.getElementById("loginErrorMsg");

  function showLoginError(msg) {
    if (errorBox) {
      errorBox.textContent = msg;
      errorBox.classList.add("visible");
      errorBox.style.display = "block";
    } else {
      alert(msg);
    }
  }

  function clearLoginError() {
    if (errorBox) {
      errorBox.textContent = "";
      errorBox.classList.remove("visible");
      errorBox.style.display = "none";
    }
  }

  clearLoginError();

  const email = emailInput ? emailInput.value.trim() : "";
  const password = passwordInput ? passwordInput.value : "";

  // 1. Validate empty inputs
  if (!email || !password) {
    showLoginError("Please enter both email and password.");
    return;
  }

  // 2. Read registered users from localStorage
  const users = getData("users") || [];

  // 3. Search for matching user (case-insensitive email)
  const matchedUser = users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase());

  // Check fallback for default admin account if not in array
  const isDefaultAdmin = (email.toLowerCase() === "admin@sports.com" && password === "admin123");

  if (matchedUser) {
    // Check password
    if (matchedUser.password === password) {
      // Login successful!
      localStorage.setItem("slms_logged_in", "true");
      // Set active user session profile in localStorage
      localStorage.setItem("slms_user", JSON.stringify(matchedUser));

      clearLoginError();
      showToast("Login successful! Redirecting to Dashboard...", "success");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 700);
      return;
    } else {
      // Password did not match
      showLoginError("Invalid email or password.");
      return;
    }
  } else if (isDefaultAdmin) {
    // Default admin fallback
    localStorage.setItem("slms_logged_in", "true");
    localStorage.setItem("slms_user", JSON.stringify(DEFAULT_DATA.user));

    clearLoginError();
    showToast("Login successful! Redirecting to Dashboard...", "success");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 700);
    return;
  } else {
    // Email not found in registered users
    showLoginError("Invalid email or password.");
  }
}

/**
 * Handles new user registration
 * Validates required fields, email format, password matching, and duplicate email.
 * Saves user into localStorage under 'slms_users'.
 */
function handleRegisterUser(event) {
  event.preventDefault();

  const nameInput = document.getElementById("regName");
  const emailInput = document.getElementById("regEmail");
  const deptInput = document.getElementById("regDept");
  const passwordInput = document.getElementById("regPassword");
  const confirmPasswordInput = document.getElementById("regConfirmPassword");
  const errorBox = document.getElementById("regErrorMsg");

  function showRegError(msg) {
    if (errorBox) {
      errorBox.textContent = msg;
      errorBox.style.display = "block";
      errorBox.classList.add("visible");
    } else {
      alert(msg);
    }
  }

  function clearRegError() {
    if (errorBox) {
      errorBox.textContent = "";
      errorBox.style.display = "none";
      errorBox.classList.remove("visible");
    }
  }

  clearRegError();

  const name = nameInput ? nameInput.value.trim() : "";
  const email = emailInput ? emailInput.value.trim() : "";
  const dept = deptInput ? deptInput.value.trim() : "";
  const password = passwordInput ? passwordInput.value : "";
  const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : "";

  // 1. Required fields check
  if (!name || !email || !password || !confirmPassword) {
    showRegError("Please fill in all required fields.");
    return;
  }

  // 2. Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showRegError("Please enter a valid email address.");
    return;
  }

  // 3. Password length check
  if (password.length < 4) {
    showRegError("Password must be at least 4 characters long.");
    return;
  }

  // 4. Password confirmation check
  if (password !== confirmPassword) {
    showRegError("Passwords do not match. Please re-enter.");
    return;
  }

  // 5. Check for duplicate email in localStorage
  const users = getData("users") || [];
  const duplicate = users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase());
  if (duplicate) {
    showRegError("An account with this email already exists. Please log in or use another email.");
    return;
  }

  // 6. Create new registered user object
  const newUser = {
    id: Date.now(),
    name: name,
    email: email.toLowerCase(),
    password: password,
    role: "User",
    phone: "+91 90000 00000",
    college: "KL University",
    department: dept || "Student",
    studentId: "KL-" + Math.floor(100000 + Math.random() * 900000),
    avatarText: (name.charAt(0) || "U").toUpperCase()
  };

  users.push(newUser);
  saveData("users", users);

  // Close registration modal
  closeModal("createAccountModal");

  // Show success notification
  showToast("Account registered successfully! You can now log in.", "success");

  // Reset registration form
  const regForm = document.getElementById("registerDemoForm") || document.getElementById("registerForm");
  if (regForm) regForm.reset();

  // Populate email on the login form and focus password
  const loginEmail = document.getElementById("loginEmail");
  const loginPassword = document.getElementById("loginPassword");
  if (loginEmail) {
    loginEmail.value = email;
  }
  if (loginPassword) {
    loginPassword.value = "";
    loginPassword.focus();
  }
}

/**
 * Toggles password visibility (Show/Hide)
 */
function togglePasswordVisibility(inputId, btnElement) {
  const input = document.getElementById(inputId || "loginPassword");
  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
    if (btnElement) btnElement.textContent = "👁️ Hide";
  } else {
    input.type = "password";
    if (btnElement) btnElement.textContent = "👁️ Show";
  }
}

/**
 * Logs out the user and clears login session
 */
function handleLogout() {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("slms_logged_in");
    window.location.href = "login.html";
  }
}

/**
 * Simple Authentication Guard
 * Redirects to login.html if attempting to access protected pages while logged out
 */
function checkAuth() {
  const isLoginPage = window.location.pathname.endsWith("login.html") || window.location.pathname.endsWith("index.html");
  const isLoggedIn = localStorage.getItem("slms_logged_in") === "true";

  // Optional: Auto redirect to dashboard if logged in and visiting login.html
  if (isLoggedIn && window.location.pathname.endsWith("login.html")) {
    // Allow staying if user wants or redirect
  }
}

/* -------------------------------------------------------------
   4. COMMON UI (SIDEBAR, HEADER, TOASTS, MODALS)
------------------------------------------------------------- */

/**
 * Toggles mobile sidebar menu
 */
function toggleMobileSidebar() {
  const sidebar = document.getElementById("appSidebar");
  if (sidebar) {
    sidebar.classList.toggle("show");
  }
}

/**
 * Closes mobile sidebar
 */
function closeMobileSidebar() {
  const sidebar = document.getElementById("appSidebar");
  if (sidebar) {
    sidebar.classList.remove("show");
  }
}

/**
 * Renders user profile information and badges across header and sidebar
 */
function updateCommonHeaderAndSidebar() {
  const user = getData("user");
  const notifications = getData("notifications") || [];
  const unreadCount = notifications.filter(n => !n.read).length;

  // Update user name and avatar in topbar / sidebar
  const userNames = document.querySelectorAll(".user-display-name");
  userNames.forEach(el => el.textContent = user.name || "Admin");

  const userRoles = document.querySelectorAll(".user-display-role");
  userRoles.forEach(el => el.textContent = user.role || "Administrator");

  const avatarCircles = document.querySelectorAll(".user-avatar-circle");
  avatarCircles.forEach(el => el.textContent = (user.name ? user.name[0] : "A").toUpperCase());

  // Update notification count badges
  const badgeCounts = document.querySelectorAll(".notification-count-badge");
  badgeCounts.forEach(badge => {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.style.display = "flex";
    } else {
      badge.style.display = "none";
    }
  });

  // Highlight active link in sidebar based on current URL
  const currentPath = window.location.pathname.split("/").pop() || "dashboard.html";
  const navLinks = document.querySelectorAll(".sidebar-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "dashboard.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/**
 * Displays modern bottom-right toast message
 */
function showToast(message, type = "info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "⚠️";

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

/**
 * Modal Open & Close Utility
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
  }
}

/* -------------------------------------------------------------
   5. DASHBOARD PAGE LOGIC
------------------------------------------------------------- */
function initDashboardPage() {
  const leagues = getData("leagues") || [];
  const teams = getData("teams") || [];
  const players = getData("players") || [];
  const fixtures = getData("fixtures") || [];
  const tickets = getData("tickets") || [];

  // Update Stat Card Counters
  const elLeagues = document.getElementById("dashTotalLeagues");
  const elTeams = document.getElementById("dashTotalTeams");
  const elPlayers = document.getElementById("dashTotalPlayers");
  const elUpcoming = document.getElementById("dashUpcomingMatches");
  const elLive = document.getElementById("dashLiveMatches");
  const elTickets = document.getElementById("dashTicketsBooked");

  if (elLeagues) elLeagues.textContent = leagues.length;
  if (elTeams) elTeams.textContent = teams.length;
  if (elPlayers) elPlayers.textContent = players.length;
  if (elUpcoming) elUpcoming.textContent = fixtures.filter(f => f.status === "Upcoming" || f.status === "Scheduled").length;
  if (elLive) elLive.textContent = "1 LIVE";
  if (elTickets) elTickets.textContent = tickets.reduce((acc, t) => acc + (t.count || 1), 0);

  // Render Upcoming Matches Widget
  const upcomingList = document.getElementById("dashUpcomingList");
  if (upcomingList) {
    const nextMatches = fixtures.slice(0, 3);
    upcomingList.innerHTML = nextMatches.map(m => `
      <div class="fixture-card" style="margin-bottom: 0.85rem; padding: 1rem;">
        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.5rem;">
          <span class="badge badge-sport">${m.sport}</span>
          <span style="color: var(--text-muted);">📅 ${m.date} • ⏰ ${m.time}</span>
        </div>
        <div style="display: flex; align-items: center; justify-content: space-between; font-weight: 700; font-size: 1rem;">
          <span>${m.team1}</span>
          <span style="font-size: 0.8rem; color: var(--text-muted); background: #f1f5f9; padding: 2px 8px; border-radius: 10px;">VS</span>
          <span>${m.team2}</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">
          📍 ${m.venue}
        </div>
      </div>
    `).join("");
  }

  // Render Standings Widget Table
  const standingsWidget = document.getElementById("dashStandingsTable");
  if (standingsWidget) {
    const standings = getData("standings") || [];
    standingsWidget.innerHTML = standings.slice(0, 4).map(s => `
      <tr class="${s.rank === 1 ? 'top-rank-row' : ''}">
        <td><span class="rank-badge rank-${s.rank}">${s.rank === 1 ? '🏆' : s.rank}</span></td>
        <td><strong>${s.team}</strong></td>
        <td>${s.played}</td>
        <td>${s.won}</td>
        <td>${s.lost}</td>
        <td><strong>${s.points}</strong></td>
      </tr>
    `).join("");
  }

  // Render Dashboard News Preview
  const newsWidget = document.getElementById("dashNewsCards");
  if (newsWidget) {
    const newsList = getData("news") || [];
    newsWidget.innerHTML = newsList.slice(0, 2).map(n => `
      <div class="news-card">
        <div class="news-img-box" style="height: 140px;">
          <img src="${n.image}" alt="${n.title}">
          <span class="news-category-tag">${n.category}</span>
        </div>
        <div class="news-content" style="padding: 1rem;">
          <span class="news-date">📅 ${n.date}</span>
          <h4 style="font-size: 0.95rem; margin-bottom: 0.4rem;">${n.title}</h4>
          <p class="news-desc" style="font-size: 0.82rem; margin-bottom: 0.75rem;">${n.desc}</p>
          <a href="news.html" class="btn btn-outline btn-sm">Read Story</a>
        </div>
      </div>
    `).join("");
  }
}

/* -------------------------------------------------------------
   6. LEAGUES PAGE LOGIC (CRUD)
------------------------------------------------------------- */
function initLeaguesPage() {
  renderLeagues();

  // Add League Form Submit
  const form = document.getElementById("addLeagueForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("leagueName").value.trim();
      const sport = document.getElementById("leagueSport").value;
      const season = document.getElementById("leagueSeason").value.trim();
      const teamsCount = parseInt(document.getElementById("leagueTeamsCount").value) || 6;
      const status = document.getElementById("leagueStatus").value;

      if (!name) {
        showToast("Please enter a league name", "error");
        return;
      }

      const leagues = getData("leagues") || [];
      const newLeague = {
        id: Date.now(),
        name,
        sport,
        season,
        teamsCount,
        status
      };

      leagues.push(newLeague);
      saveData("leagues", leagues);
      showToast(`League "${name}" added successfully!`, "success");
      closeModal("addLeagueModal");
      form.reset();
      renderLeagues();
    });
  }
}

function renderLeagues() {
  const container = document.getElementById("leaguesGrid");
  if (!container) return;

  const leagues = getData("leagues") || [];
  if (leagues.length === 0) {
    container.innerHTML = `<div class="card-box" style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">No leagues registered yet. Click "Add League" to create one.</div>`;
    return;
  }

  container.innerHTML = leagues.map(l => `
    <div class="card-box" style="margin-bottom: 0; display: flex; flex-direction: column;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
        <span class="badge badge-sport">${l.sport}</span>
        <span class="badge badge-${l.status.toLowerCase()}">${l.status}</span>
      </div>
      <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-main);">${l.name}</h3>
      <div style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.25rem;">
        <div>🏆 Season: <strong>${l.season}</strong></div>
        <div>👥 Participating Teams: <strong>${l.teamsCount} Teams</strong></div>
      </div>
      <div style="display: flex; gap: 0.5rem; margin-top: auto; border-top: 1px solid var(--border-color); padding-top: 0.85rem;">
        <button class="btn btn-outline btn-sm" onclick="viewLeague(${l.id})">👁️ View</button>
        <button class="btn btn-outline btn-sm" onclick="editLeague(${l.id})">✏️ Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteLeague(${l.id})">🗑️ Delete</button>
      </div>
    </div>
  `).join("");
}

function deleteLeague(id) {
  if (confirm("Are you sure you want to delete this league?")) {
    let leagues = getData("leagues") || [];
    leagues = leagues.filter(l => l.id !== id);
    saveData("leagues", leagues);
    showToast("League deleted successfully!", "info");
    renderLeagues();
  }
}

function viewLeague(id) {
  const leagues = getData("leagues") || [];
  const league = leagues.find(l => l.id === id);
  if (league) {
    alert(`🏆 League Details:\nName: ${league.name}\nSport: ${league.sport}\nSeason: ${league.season}\nTeams: ${league.teamsCount}\nStatus: ${league.status}`);
  }
}

function editLeague(id) {
  const leagues = getData("leagues") || [];
  const league = leagues.find(l => l.id === id);
  if (!league) return;

  const newName = prompt("Edit League Name:", league.name);
  if (newName && newName.trim()) {
    league.name = newName.trim();
    saveData("leagues", leagues);
    showToast("League updated!", "success");
    renderLeagues();
  }
}

/* -------------------------------------------------------------
   7. TEAMS PAGE LOGIC (CRUD)
------------------------------------------------------------- */
function initTeamsPage() {
  renderTeams();

  // Add Team Form Submit
  const form = document.getElementById("addTeamForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("teamName").value.trim();
      const sport = document.getElementById("teamSport").value;
      const captain = document.getElementById("teamCaptain").value.trim();
      const coach = document.getElementById("teamCoach").value.trim();
      const playersCount = parseInt(document.getElementById("teamPlayersCount").value) || 15;
      const wins = parseInt(document.getElementById("teamWins").value) || 0;
      const losses = parseInt(document.getElementById("teamLosses").value) || 0;

      if (!name) {
        showToast("Please enter team name", "error");
        return;
      }

      const teams = getData("teams") || [];
      const newTeam = {
        id: Date.now(),
        name,
        sport,
        captain: captain || "TBA",
        coach: coach || "TBA",
        playersCount,
        wins,
        losses,
        badgeText: name.split(" ").map(w => w[0]).join("").slice(0, 3).toUpperCase(),
        color: "#1e3a8a"
      };

      teams.push(newTeam);
      saveData("teams", teams);
      showToast(`Team "${name}" added successfully!`, "success");
      closeModal("addTeamModal");
      form.reset();
      renderTeams();
    });
  }
}

function renderTeams(filterSport = "all") {
  const container = document.getElementById("teamsGrid");
  if (!container) return;

  let teams = getData("teams") || [];
  if (filterSport !== "all") {
    teams = teams.filter(t => t.sport.toLowerCase() === filterSport.toLowerCase());
  }

  if (teams.length === 0) {
    container.innerHTML = `<div class="card-box" style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">No teams found. Click "Add Team" to register one.</div>`;
    return;
  }

  container.innerHTML = teams.map(t => `
    <div class="team-card">
      <div class="team-card-banner">
        <div class="team-badge-circle">${t.badgeText || 'T'}</div>
      </div>
      <div class="team-card-body">
        <div class="team-card-name">${t.name}</div>
        <div class="team-card-meta"><span class="badge badge-sport">${t.sport}</span> • 👥 ${t.playersCount} Players</div>
        
        <div class="team-stats-row">
          <div>Captain: <strong>${t.captain}</strong></div>
          <div>Coach: <strong>${t.coach}</strong></div>
        </div>

        <div style="display: flex; gap: 1rem; font-size: 0.85rem; margin-bottom: 1rem;">
          <span style="color: var(--success); font-weight: 700;">✅ Won: ${t.wins}</span>
          <span style="color: var(--danger); font-weight: 700;">❌ Lost: ${t.losses}</span>
        </div>

        <div class="team-card-actions">
          <button class="btn btn-outline btn-sm" onclick="viewTeam(${t.id})">👁️ View</button>
          <button class="btn btn-outline btn-sm" onclick="editTeam(${t.id})">✏️ Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTeam(${t.id})">🗑️ Delete</button>
        </div>
      </div>
    </div>
  `).join("");
}

function deleteTeam(id) {
  if (confirm("Are you sure you want to delete this team?")) {
    let teams = getData("teams") || [];
    teams = teams.filter(t => t.id !== id);
    saveData("teams", teams);
    showToast("Team removed successfully!", "info");
    renderTeams();
  }
}

function viewTeam(id) {
  const teams = getData("teams") || [];
  const team = teams.find(t => t.id === id);
  if (team) {
    alert(`🛡️ Team Overview:\n\nTeam Name: ${team.name}\nSport: ${team.sport}\nCaptain: ${team.captain}\nCoach: ${team.coach}\nRoster Size: ${team.playersCount} Players\nWins: ${team.wins} | Losses: ${team.losses}`);
  }
}

function editTeam(id) {
  const teams = getData("teams") || [];
  const team = teams.find(t => t.id === id);
  if (!team) return;

  const newCaptain = prompt("Update Team Captain:", team.captain);
  if (newCaptain) {
    team.captain = newCaptain;
    saveData("teams", teams);
    showToast("Team updated!", "success");
    renderTeams();
  }
}

/* -------------------------------------------------------------
   8. PLAYERS PAGE LOGIC (SEARCH & FILTER)
------------------------------------------------------------- */
function initPlayersPage() {
  renderPlayers();

  // Search input event listener
  const searchInput = document.getElementById("playerSearchInput");
  const filterSelect = document.getElementById("playerTeamFilter");

  function triggerPlayerFilter() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const teamFilter = filterSelect ? filterSelect.value : "all";
    renderPlayers(query, teamFilter);
  }

  if (searchInput) searchInput.addEventListener("input", triggerPlayerFilter);
  if (filterSelect) {
    // Populate team filter options dynamically
    const teams = getData("teams") || [];
    filterSelect.innerHTML = `<option value="all">All Teams</option>` + teams.map(t => `<option value="${t.name}">${t.name}</option>`).join("");
    filterSelect.addEventListener("change", triggerPlayerFilter);
  }

  // Add Player Form Submit
  const form = document.getElementById("addPlayerForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("playerName").value.trim();
      const team = document.getElementById("playerTeamSelect").value;
      const jersey = parseInt(document.getElementById("playerJersey").value) || 0;
      const position = document.getElementById("playerPosition").value.trim();
      const matches = parseInt(document.getElementById("playerMatches").value) || 0;
      const performance = document.getElementById("playerPerformance").value.trim();
      const sport = document.getElementById("playerSport").value;

      if (!name) {
        showToast("Player name is required", "error");
        return;
      }

      const players = getData("players") || [];
      const newPlayer = {
        id: Date.now(),
        name,
        team,
        jersey,
        position: position || "Player",
        matches,
        performance: performance || "Active",
        sport
      };

      players.push(newPlayer);
      saveData("players", players);
      showToast(`Player "${name}" added to ${team}!`, "success");
      closeModal("addPlayerModal");
      form.reset();
      renderPlayers();
    });
  }
}

function renderPlayers(query = "", teamFilter = "all") {
  const container = document.getElementById("playersGrid");
  if (!container) return;

  let players = getData("players") || [];

  // Filter by search query
  if (query) {
    players = players.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.position.toLowerCase().includes(query) ||
      p.team.toLowerCase().includes(query)
    );
  }

  // Filter by team
  if (teamFilter !== "all") {
    players = players.filter(p => p.team.toLowerCase() === teamFilter.toLowerCase());
  }

  if (players.length === 0) {
    container.innerHTML = `<div class="card-box" style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">No players found matching your criteria.</div>`;
    return;
  }

  container.innerHTML = players.map(p => `
    <div class="player-card">
      <div class="player-header">
        <div class="player-avatar">${p.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}</div>
        <div class="player-info">
          <h4>${p.name}</h4>
          <span class="player-jersey-pill">Jersey #${p.jersey}</span>
        </div>
      </div>
      
      <div class="player-details-grid">
        <div class="player-detail-item">
          <span class="label">Team</span>
          <span class="val">${p.team}</span>
        </div>
        <div class="player-detail-item">
          <span class="label">Position</span>
          <span class="val">${p.position}</span>
        </div>
        <div class="player-detail-item">
          <span class="label">Matches</span>
          <span class="val">${p.matches}</span>
        </div>
        <div class="player-detail-item">
          <span class="label">Sport</span>
          <span class="val">${p.sport || 'Cricket'}</span>
        </div>
      </div>

      <div style="background: #eff6ff; padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: #1e40af; margin-bottom: 1rem;">
        ⚡ Stats: <strong>${p.performance}</strong>
      </div>

      <div style="display: flex; gap: 0.5rem; margin-top: auto;">
        <button class="btn btn-outline btn-sm" style="flex: 1;" onclick="alert('Player Profile:\\nName: ${p.name}\\nTeam: ${p.team}\\nPosition: ${p.position}\\nStats: ${p.performance}')">View Stats</button>
        <button class="btn btn-danger btn-sm" onclick="deletePlayer(${p.id})">🗑️</button>
      </div>
    </div>
  `).join("");
}

function deletePlayer(id) {
  if (confirm("Are you sure you want to remove this player?")) {
    let players = getData("players") || [];
    players = players.filter(p => p.id !== id);
    saveData("players", players);
    showToast("Player removed successfully", "info");
    renderPlayers();
  }
}

/* -------------------------------------------------------------
   9. FIXTURES PAGE LOGIC (SCHEDULE MATCH)
------------------------------------------------------------- */
function initFixturesPage() {
  renderFixtures();

  // Schedule Match Form Submit
  const form = document.getElementById("scheduleMatchForm");
  if (form) {
    // Populate team options inside dropdowns
    const teams = getData("teams") || [];
    const team1Select = document.getElementById("fixtureTeam1");
    const team2Select = document.getElementById("fixtureTeam2");

    if (team1Select && team2Select) {
      const optionsHtml = teams.map(t => `<option value="${t.name}">${t.name} (${t.sport})</option>`).join("");
      team1Select.innerHTML = optionsHtml;
      team2Select.innerHTML = optionsHtml;
      if (teams.length > 1) team2Select.selectedIndex = 1;
    }

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const team1 = document.getElementById("fixtureTeam1").value;
      const team2 = document.getElementById("fixtureTeam2").value;
      const sport = document.getElementById("fixtureSport").value;
      const date = document.getElementById("fixtureDate").value;
      const time = document.getElementById("fixtureTime").value;
      const venue = document.getElementById("fixtureVenue").value.trim();

      if (team1 === team2) {
        showToast("Team 1 and Team 2 cannot be the same!", "error");
        return;
      }

      const fixtures = getData("fixtures") || [];
      const newFixture = {
        id: Date.now(),
        team1,
        team2,
        sport,
        date: date || "Upcoming Date",
        time: time || "5:00 PM",
        venue: venue || "KL University Ground",
        status: "Upcoming"
      };

      fixtures.unshift(newFixture);
      saveData("fixtures", fixtures);
      showToast(`Match scheduled: ${team1} vs ${team2}!`, "success");
      closeModal("scheduleModal");
      form.reset();
      renderFixtures();
    });
  }
}

function renderFixtures() {
  const container = document.getElementById("fixturesContainer");
  if (!container) return;

  const fixtures = getData("fixtures") || [];
  if (fixtures.length === 0) {
    container.innerHTML = `<div class="card-box" style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">No fixtures scheduled. Click "Schedule Match" to add one.</div>`;
    return;
  }

  container.innerHTML = fixtures.map(m => `
    <div class="fixture-card">
      <div class="fixture-top">
        <span class="badge badge-sport">${m.sport}</span>
        <span class="badge badge-${m.status.toLowerCase()}">${m.status}</span>
      </div>

      <div class="fixture-teams-row">
        <div class="fixture-team">
          <div style="font-size: 1.5rem;">🛡️</div>
          <div class="fixture-team-name">${m.team1}</div>
        </div>
        <div class="fixture-vs-circle">VS</div>
        <div class="fixture-team">
          <div style="font-size: 1.5rem;">⚔️</div>
          <div class="fixture-team-name">${m.team2}</div>
        </div>
      </div>

      <div class="fixture-details-box">
        <div class="fixture-detail-item">📅 Date: <strong>${m.date}</strong></div>
        <div class="fixture-detail-item">⏰ Time: <strong>${m.time}</strong></div>
        <div class="fixture-detail-item">📍 Venue: <strong>${m.venue}</strong></div>
      </div>

      <div class="fixture-actions">
        <a href="tickets.html" class="btn btn-primary btn-sm" style="flex: 1;">🎟️ Book Ticket</a>
        <button class="btn btn-outline btn-sm" onclick="alert('Match details:\\n${m.team1} vs ${m.team2}\\nTime: ${m.time}\\nVenue: ${m.venue}')">Details</button>
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------
   10. LIVE SCORES PAGE LOGIC (SIMULATION & LIVE UPDATES)
------------------------------------------------------------- */
function initLiveScoresPage() {
  renderLiveScoreboard();
}

function renderLiveScoreboard() {
  const liveData = getData("liveMatch") || DEFAULT_DATA.liveMatch;

  const runsElem = document.getElementById("liveTeam1Score");
  const oversElem = document.getElementById("liveTeam1Overs");
  const statusElem = document.getElementById("liveMatchStatus");
  const commentaryList = document.getElementById("liveCommentaryFeed");

  if (runsElem) runsElem.textContent = `${liveData.team1Runs}/${liveData.team1Wickets}`;
  if (oversElem) oversElem.textContent = `Overs: ${liveData.overs} (RR: ${(liveData.team1Runs / Math.max(1, parseFloat(liveData.overs))).toFixed(2)})`;
  if (statusElem) statusElem.textContent = liveData.statusText;

  // Render commentary log
  if (commentaryList && liveData.commentary) {
    commentaryList.innerHTML = liveData.commentary.map(c => `
      <div class="commentary-item">
        <span class="commentary-over">${c.over}</span>
        <span>${c.text}</span>
      </div>
    `).join("");
  }
}

/**
 * Simulates scoring action when buttons (+1, +4, +6, Wicket) are clicked
 */
function updateLiveScore(actionType) {
  const liveData = getData("liveMatch") || DEFAULT_DATA.liveMatch;

  let currentOvers = parseFloat(liveData.overs);
  let balls = Math.round((currentOvers % 1) * 10) + 1;
  let overNum = Math.floor(currentOvers);

  if (balls >= 6) {
    overNum += 1;
    balls = 0;
  }
  liveData.overs = (overNum + balls * 0.1).toFixed(1);

  if (actionType === 1) {
    liveData.team1Runs += 1;
    liveData.commentary.unshift({ over: liveData.overs, text: "1 run. Pushed into deep cover for a smart rotation of strike." });
    showToast("+1 Run added!", "info");
  } else if (actionType === 4) {
    liveData.team1Runs += 4;
    liveData.commentary.unshift({ over: liveData.overs, text: "FOUR! Cracking shot through the covers! Ball races to the boundary rope!" });
    showToast("FOUR! 4 Runs added!", "success");
  } else if (actionType === 6) {
    liveData.team1Runs += 6;
    liveData.commentary.unshift({ over: liveData.overs, text: "SIX! Massive strike! Dispatched cleanly high into the student pavilion!" });
    showToast("MAXIMUM! 6 Runs added!", "success");
  } else if (actionType === "wicket") {
    if (liveData.team1Wickets < 10) {
      liveData.team1Wickets += 1;
      liveData.commentary.unshift({ over: liveData.overs, text: "WICKET! Clean bowled! Middle stump uprooted by an in-swinging yorker!" });
      showToast("WICKET! Timber struck!", "error");
    } else {
      showToast("Team is already all out (10 wickets)!", "warning");
    }
  }

  // Update target check
  const needed = liveData.target - liveData.team1Runs;
  if (needed <= 0) {
    liveData.statusText = "🏆 KL Warriors have WON by " + (10 - liveData.team1Wickets) + " wickets!";
  } else {
    liveData.statusText = `KL Warriors need ${needed} runs to achieve the target`;
  }

  saveData("liveMatch", liveData);
  renderLiveScoreboard();
}

function resetLiveMatch() {
  if (confirm("Reset live match score to initial start state?")) {
    saveData("liveMatch", DEFAULT_DATA.liveMatch);
    renderLiveScoreboard();
    showToast("Live match reset to default", "info");
  }
}

/* -------------------------------------------------------------
   11. STANDINGS PAGE LOGIC
------------------------------------------------------------- */
function initStandingsPage() {
  renderStandings();
}

function renderStandings() {
  const tableBody = document.getElementById("standingsTableBody");
  if (!tableBody) return;

  const standings = getData("standings") || [];
  tableBody.innerHTML = standings.map((team, idx) => `
    <tr class="${team.rank === 1 ? 'top-rank-row' : ''}">
      <td>
        <span class="rank-badge rank-${team.rank}">${team.rank === 1 ? '🥇' : team.rank}</span>
      </td>
      <td>
        <div style="font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
          ${team.rank === 1 ? '⭐' : '🛡️'} ${team.team}
        </div>
      </td>
      <td>${team.played}</td>
      <td><span style="color: var(--success); font-weight: 700;">${team.won}</span></td>
      <td><span style="color: var(--danger);">${team.lost}</span></td>
      <td>${team.drawn}</td>
      <td>${team.nrr}</td>
      <td><strong style="font-size: 1.05rem; color: var(--primary);">${team.points}</strong></td>
      <td>
        ${team.form.map(f => `<span class="form-badge-pill form-${f.toLowerCase()}">${f}</span>`).join("")}
      </td>
    </tr>
  `).join("");
}

/* -------------------------------------------------------------
   12. TICKET BOOKING LOGIC & GENERATION
------------------------------------------------------------- */
function initTicketsPage() {
  renderRecentTickets();

  // Populate matches dropdown from fixtures
  const matchSelect = document.getElementById("ticketMatchSelect");
  const fixtures = getData("fixtures") || [];
  if (matchSelect) {
    matchSelect.innerHTML = fixtures.map(f => `<option value="${f.team1} vs ${f.team2} (${f.date})">${f.team1} vs ${f.team2} - ${f.sport} (${f.date})</option>`).join("");
  }

  // Calculate ticket prices dynamically
  const typeSelect = document.getElementById("ticketType");
  const countInput = document.getElementById("ticketCount");
  const unitPriceEl = document.getElementById("calcUnitPrice");
  const totalAmountEl = document.getElementById("calcTotalAmount");

  function recalculateTicketTotal() {
    const type = typeSelect ? typeSelect.value : "Regular";
    const count = parseInt(countInput ? countInput.value : 1) || 1;

    let unitPrice = 100; // Regular: ₹100
    if (type === "Premium") unitPrice = 250;
    if (type === "VIP") unitPrice = 500;

    const total = unitPrice * count;
    if (unitPriceEl) unitPriceEl.textContent = `₹${unitPrice}`;
    if (totalAmountEl) totalAmountEl.textContent = `₹${total}`;
    return { unitPrice, total, count, type };
  }

  if (typeSelect) typeSelect.addEventListener("change", recalculateTicketTotal);
  if (countInput) countInput.addEventListener("input", recalculateTicketTotal);

  // Initial calculation
  recalculateTicketTotal();

  // Ticket Form Submit
  const form = document.getElementById("ticketBookingForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const match = matchSelect ? matchSelect.value : "College Match";
      const name = document.getElementById("ticketName").value.trim();
      const email = document.getElementById("ticketEmail").value.trim();
      const { unitPrice, total, count, type } = recalculateTicketTotal();

      if (!name || !email) {
        showToast("Please provide your name and email", "error");
        return;
      }

      // Generate realistic booking ID
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const bookingId = `TKT-2026-KL-${randomNum}`;

      const newTicket = {
        id: bookingId,
        match,
        name,
        email,
        type,
        count,
        total,
        date: "October 2026"
      };

      const tickets = getData("tickets") || [];
      tickets.unshift(newTicket);
      saveData("tickets", tickets);

      // Add a notification for ticket booking
      const notifications = getData("notifications") || [];
      notifications.unshift({
        id: Date.now(),
        title: `Ticket booking confirmed: ${bookingId} (${count}x ${type})`,
        time: "Just now",
        read: false,
        icon: "🎟️"
      });
      saveData("notifications", notifications);

      // Render confirmation digital e-ticket in modal
      const previewBox = document.getElementById("digitalTicketPreview");
      if (previewBox) {
        previewBox.innerHTML = `
          <div class="digital-ticket-card">
            <div class="ticket-header-strip">
              <div>
                <h4 style="margin: 0;">KL University Sports Pass</h4>
                <small>${match}</small>
              </div>
              <span class="badge" style="background: #fbbf24; color: #78350f;">${type}</span>
            </div>
            <div class="ticket-body-content">
              <div class="ticket-id-tag">PASS ID: ${bookingId}</div>
              <div style="margin-bottom: 0.5rem;"><strong>Attendee:</strong> ${name} (${email})</div>
              <div style="margin-bottom: 0.5rem;"><strong>Quantity:</strong> ${count} Ticket(s) • Total Paid: <strong>₹${total}</strong></div>
              <div style="font-size: 0.82rem; color: var(--text-muted);">Please present this e-pass at Gate 2 entrance. Valid for college student ID holders.</div>
              <div class="barcode-simulation"></div>
            </div>
          </div>
        `;
        openModal("ticketSuccessModal");
      } else {
        alert(`🎉 Ticket booked successfully!\nBooking ID: ${bookingId}\nMatch: ${match}\nAmount: ₹${total}`);
      }

      showToast("Ticket booked successfully!", "success");
      form.reset();
      recalculateTicketTotal();
      renderRecentTickets();
      updateCommonHeaderAndSidebar();
    });
  }
}

function renderRecentTickets() {
  const container = document.getElementById("recentBookingsList");
  if (!container) return;

  const tickets = getData("tickets") || [];
  if (tickets.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">No tickets booked yet.</p>`;
    return;
  }

  container.innerHTML = tickets.map(t => `
    <div style="background: white; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; margin-bottom: 0.75rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
        <span style="font-family: monospace; font-weight: 700; color: var(--primary); font-size: 0.85rem;">${t.id}</span>
        <span class="badge badge-active">${t.type}</span>
      </div>
      <div style="font-weight: 600; font-size: 0.9rem; margin-bottom: 0.25rem;">${t.match}</div>
      <div style="font-size: 0.8rem; color: var(--text-muted);">
        👤 ${t.name} • 🎫 ${t.count} Ticket(s) • <strong>₹${t.total}</strong>
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------
   13. NEWS PAGE LOGIC (ARTICLES & MODAL)
------------------------------------------------------------- */
function initNewsPage() {
  renderNewsList();
}

function renderNewsList() {
  const container = document.getElementById("newsGrid");
  if (!container) return;

  const newsList = getData("news") || [];
  container.innerHTML = newsList.map(n => `
    <div class="news-card">
      <div class="news-img-box">
        <img src="${n.image}" alt="${n.title}">
        <span class="news-category-tag">${n.category}</span>
      </div>
      <div class="news-content">
        <div class="news-date">📅 ${n.date}</div>
        <h3 class="news-title">${n.title}</h3>
        <p class="news-desc">${n.desc}</p>
        <button class="btn btn-outline btn-sm" onclick="openNewsArticle(${n.id})">Read More &rarr;</button>
      </div>
    </div>
  `).join("");
}

function openNewsArticle(id) {
  const newsList = getData("news") || [];
  const article = newsList.find(n => n.id === id);
  if (!article) return;

  const modalTitle = document.getElementById("newsModalTitle");
  const modalDate = document.getElementById("newsModalDate");
  const modalBody = document.getElementById("newsModalBody");
  const modalImg = document.getElementById("newsModalImage");

  if (modalTitle) modalTitle.textContent = article.title;
  if (modalDate) modalDate.textContent = `Published on: ${article.date} | Category: ${article.category}`;
  if (modalBody) modalBody.textContent = article.fullText;
  if (modalImg) modalImg.src = article.image;

  openModal("newsDetailsModal");
}

/* -------------------------------------------------------------
   14. NOTIFICATIONS PAGE LOGIC
------------------------------------------------------------- */
function initNotificationsPage() {
  renderNotifications();
}

function renderNotifications() {
  const container = document.getElementById("notificationsList");
  if (!container) return;

  const list = getData("notifications") || [];
  if (list.length === 0) {
    container.innerHTML = `<div class="card-box" style="text-align: center; color: var(--text-muted);">No notifications yet. You're all caught up!</div>`;
    return;
  }

  container.innerHTML = list.map(item => `
    <div class="notification-card ${item.read ? '' : 'unread'}">
      <div class="notification-left">
        <div class="notification-icon-box">${item.icon || '🔔'}</div>
        <div>
          <div class="notification-title">${item.title}</div>
          <div class="notification-time">⏱️ ${item.time}</div>
        </div>
      </div>
      <div>
        ${!item.read ? `
          <button class="btn btn-outline btn-sm" onclick="markNotificationRead(${item.id})">Mark as Read</button>
        ` : `
          <span style="font-size: 0.8rem; color: var(--text-muted);">Read</span>
        `}
      </div>
    </div>
  `).join("");
}

function markNotificationRead(id) {
  let list = getData("notifications") || [];
  list = list.map(item => {
    if (item.id === id) item.read = true;
    return item;
  });
  saveData("notifications", list);
  renderNotifications();
  updateCommonHeaderAndSidebar();
  showToast("Notification marked as read", "info");
}

function markAllNotificationsRead() {
  let list = getData("notifications") || [];
  list = list.map(item => ({ ...item, read: true }));
  saveData("notifications", list);
  renderNotifications();
  updateCommonHeaderAndSidebar();
  showToast("All notifications marked as read", "success");
}

/* -------------------------------------------------------------
   15. PROFILE PAGE LOGIC (EDIT & SAVE)
------------------------------------------------------------- */
function initProfilePage() {
  renderProfileDetails();

  const form = document.getElementById("editProfileForm");
  if (form) {
    // Populate form with current user values
    const user = getData("user");
    document.getElementById("profileInputName").value = user.name || "";
    document.getElementById("profileInputEmail").value = user.email || "";
    document.getElementById("profileInputPhone").value = user.phone || "";
    document.getElementById("profileInputCollege").value = user.college || "";
    document.getElementById("profileInputDept").value = user.department || "";
    document.getElementById("profileInputRole").value = user.role || "";

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const updatedUser = {
        name: document.getElementById("profileInputName").value.trim(),
        email: document.getElementById("profileInputEmail").value.trim(),
        phone: document.getElementById("profileInputPhone").value.trim(),
        college: document.getElementById("profileInputCollege").value.trim(),
        department: document.getElementById("profileInputDept").value.trim(),
        role: document.getElementById("profileInputRole").value.trim(),
        studentId: user.studentId || "2200030001",
        avatarText: (document.getElementById("profileInputName").value.trim()[0] || "M").toUpperCase()
      };

      saveData("user", updatedUser);
      showToast("Profile details updated successfully!", "success");
      renderProfileDetails();
      updateCommonHeaderAndSidebar();
    });
  }
}

function renderProfileDetails() {
  const user = getData("user");
  const nameEl = document.getElementById("profileCardName");
  const roleEl = document.getElementById("profileCardRole");
  const emailEl = document.getElementById("profileCardEmail");
  const phoneEl = document.getElementById("profileCardPhone");
  const collegeEl = document.getElementById("profileCardCollege");
  const deptEl = document.getElementById("profileCardDept");
  const idEl = document.getElementById("profileCardStudentId");

  if (nameEl) nameEl.textContent = user.name;
  if (roleEl) roleEl.textContent = user.role;
  if (emailEl) emailEl.textContent = user.email;
  if (phoneEl) phoneEl.textContent = user.phone;
  if (collegeEl) collegeEl.textContent = user.college;
  if (deptEl) deptEl.textContent = user.department;
  if (idEl) idEl.textContent = user.studentId;
}

/* -------------------------------------------------------------
   16. GLOBAL PAGE DISPATCHER (RUNS ON DOM LOAD)
------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
  // Ensure default storage data is populated
  initStorage();

  // Run common header/sidebar rendering if user is on an app page
  updateCommonHeaderAndSidebar();

  // Page detection & dispatcher
  const path = window.location.pathname.toLowerCase();

  if (path.endsWith("dashboard.html")) {
    initDashboardPage();
  } else if (path.endsWith("leagues.html")) {
    initLeaguesPage();
  } else if (path.endsWith("teams.html")) {
    initTeamsPage();
  } else if (path.endsWith("players.html")) {
    initPlayersPage();
  } else if (path.endsWith("fixtures.html")) {
    initFixturesPage();
  } else if (path.endsWith("live-scores.html")) {
    initLiveScoresPage();
  } else if (path.endsWith("standings.html")) {
    initStandingsPage();
  } else if (path.endsWith("tickets.html")) {
    initTicketsPage();
  } else if (path.endsWith("news.html")) {
    initNewsPage();
  } else if (path.endsWith("notifications.html")) {
    initNotificationsPage();
  } else if (path.endsWith("profile.html")) {
    initProfilePage();
  }
});
