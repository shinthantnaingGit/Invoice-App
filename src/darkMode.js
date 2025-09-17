/**
 * Dark Mode Handler
 * Handles theme switching and localStorage persistence using data-theme attribute
 */

class DarkModeHandler {
  constructor() {
    this.themeToggleButton = document.getElementById("themeToggleButton");
    this.sunIcon = document.getElementById("sunIcon");
    this.moonIcon = document.getElementById("moonIcon");
    this.htmlElement = document.documentElement;

    this.init();
  }

  init() {
    // Initialize theme on page load
    this.initializeTheme();

    // Add event listener for theme toggle
    if (this.themeToggleButton) {
      this.themeToggleButton.addEventListener("click", () => {
        this.toggleTheme();
      });
    }

    // Listen for system theme changes
    this.listenForSystemThemeChanges();
  }

  initializeTheme() {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem("color-theme");

    if (savedTheme) {
      // User has a saved preference
      if (savedTheme === "dark") {
        this.setDarkMode();
      } else {
        this.setLightMode();
      }
    } else {
      // No saved preference, check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.setDarkMode();
      } else {
        this.setLightMode();
      }
    }
  }

  toggleTheme() {
    if (this.htmlElement.getAttribute("data-theme") === "dark") {
      this.setLightMode();
    } else {
      this.setDarkMode();
    }
  }

  setDarkMode() {
    this.htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("color-theme", "dark");
    this.updateIcons("dark");

    // Trigger custom event for other components
    window.dispatchEvent(
      new CustomEvent("themeChanged", {
        detail: { theme: "dark" },
      })
    );
  }

  setLightMode() {
    this.htmlElement.setAttribute("data-theme", "light");
    localStorage.setItem("color-theme", "light");
    this.updateIcons("light");

    // Trigger custom event for other components
    window.dispatchEvent(
      new CustomEvent("themeChanged", {
        detail: { theme: "light" },
      })
    );
  }

  updateIcons(theme) {
    if (theme === "dark") {
      if (this.sunIcon) this.sunIcon.classList.add("hidden");
      if (this.moonIcon) this.moonIcon.classList.remove("hidden");
    } else {
      if (this.sunIcon) this.sunIcon.classList.remove("hidden");
      if (this.moonIcon) this.moonIcon.classList.add("hidden");
    }
  }

  // Method to listen for system theme changes
  listenForSystemThemeChanges() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        // Only auto-switch if user hasn't set a preference
        if (!localStorage.getItem("color-theme")) {
          if (e.matches) {
            this.setDarkMode();
          } else {
            this.setLightMode();
          }
        }
      });
  }

  // Method to get current theme
  getCurrentTheme() {
    return this.htmlElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  }

  // Method to set theme programmatically
  setTheme(theme) {
    if (theme === "dark") {
      this.setDarkMode();
    } else if (theme === "light") {
      this.setLightMode();
    }
  }

  // Method to test persistence
  testPersistence() {
    console.log("Current theme:", this.getCurrentTheme());
    console.log(
      "localStorage color-theme:",
      localStorage.getItem("color-theme")
    );
    console.log(
      "HTML data-theme:",
      this.htmlElement.getAttribute("data-theme")
    );
  }
}

// Initialize dark mode handler when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.darkModeHandler = new DarkModeHandler();
});

// Export for use in other modules
export default DarkModeHandler;
