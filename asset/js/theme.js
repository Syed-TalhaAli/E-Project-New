// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
// const toggleBtn = document.querySelector("#toggleTheme");

// function applyTheme(theme) {
//   document.body.classList.remove("light", "dark");
//   document.body.classList.add(theme);
// }

// function getSystemTheme() {
//   return systemTheme.matches ? "dark" : "light";
// }

// function setInitialTheme() {
//   const savedTheme = localStorage.getItem("theme");
//   applyTheme(savedTheme || getSystemTheme());
// }

// setInitialTheme();

// systemTheme.addEventListener("change", () => {
//   if (!localStorage.getItem("theme")) {
//     applyTheme(getSystemTheme());
//   }
// });

// toggleBtn.addEventListener("click", () => {
//   const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
//   applyTheme(newTheme);
//   localStorage.setItem("theme", newTheme);
// });

const themeBtn = document.getElementById("theme-button");
const themeOptions = document.getElementById("theme-options");

// Toggle dropdown
themeBtn.addEventListener("click", () => {
  themeOptions.classList.toggle("hidden");
});

// Apply theme
function applyTheme(theme) {
  if (theme === "system") {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.className = prefersDark ? "dark" : "light";
  } else {
    document.body.className = theme;
  }
}

// Load saved theme
const savedThemes = localStorage.getItem("theme") || "system";
applyTheme(savedThemes);

// Handle selection
themeOptions.addEventListener("click", (e) => {
  if (e.target.closest("li")) {
    const selected = e.target.closest("li").getAttribute("data-theme");
    localStorage.setItem("theme", selected);
    applyTheme(selected);
    themeOptions.classList.add("hidden");
  }
});

// Update on system preference change
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  if (localStorage.getItem("theme") === "system") {
    applyTheme("system");
  }
});


function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      // System theme
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      } else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      }
    }
  }

  function setTheme(theme) {
    if (theme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', theme);
    }
    applyTheme(theme);
  }

  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme || 'system');

  // Listen to system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      applyTheme('system');
    }
  });
