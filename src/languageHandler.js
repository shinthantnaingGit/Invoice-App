/**
 * Language Handler
 * Handles language switching and localStorage persistence
 */

import {
  translations,
  DEFAULT_LANGUAGE,
  AVAILABLE_LANGUAGES,
} from "./translations.js";

class LanguageHandler {
  constructor() {
    this.languageToggleButton = document.getElementById("languageToggleButton");
    this.currentLanguage = DEFAULT_LANGUAGE;
    this.htmlElement = document.documentElement;

    this.init();
  }

  init() {
    // Initialize language on page load
    this.initializeLanguage();

    // Add event listener for language toggle
    if (this.languageToggleButton) {
      this.languageToggleButton.addEventListener("click", () => {
        this.toggleLanguage();
      });
    }
  }

  initializeLanguage() {
    // Check if user has a saved language preference
    const savedLanguage = localStorage.getItem("app-language");

    if (savedLanguage && AVAILABLE_LANGUAGES.includes(savedLanguage)) {
      // User has a saved preference
      this.setLanguage(savedLanguage);
    } else {
      // No saved preference, use default (Japanese)
      this.setLanguage(DEFAULT_LANGUAGE);
    }
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === "en" ? "ja" : "en";
    this.setLanguage(newLanguage);
  }

  setLanguage(language) {
    if (!AVAILABLE_LANGUAGES.includes(language)) {
      console.error(`Language '${language}' is not supported`);
      return;
    }

    this.currentLanguage = language;
    this.htmlElement.setAttribute("lang", language);
    localStorage.setItem("app-language", language);

    // Update all translatable elements
    this.updateTranslations();

    // Update language toggle button text
    this.updateLanguageToggleButton();

    // Trigger custom event for other components
    window.dispatchEvent(
      new CustomEvent("languageChanged", {
        detail: { language: language },
      })
    );

    // Re-render products with new language
    if (window.reRenderProducts) {
      window.reRenderProducts();
    }
  }

  updateTranslations() {
    const currentTranslations = translations[this.currentLanguage];

    // Update all elements with data-translate attribute
    const translatableElements = document.querySelectorAll("[data-translate]");
    translatableElements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (currentTranslations[key]) {
        element.textContent = currentTranslations[key];
      }
    });

    // Update placeholder attributes
    const placeholderElements = document.querySelectorAll(
      "[data-translate-placeholder]"
    );
    placeholderElements.forEach((element) => {
      const key = element.getAttribute("data-translate-placeholder");
      if (currentTranslations[key]) {
        element.placeholder = currentTranslations[key];
      }
    });

    // Update title attributes
    const titleElements = document.querySelectorAll("[data-translate-title]");
    titleElements.forEach((element) => {
      const key = element.getAttribute("data-translate-title");
      if (currentTranslations[key]) {
        element.title = currentTranslations[key];
      }
    });
  }

  updateLanguageToggleButton() {
    if (this.languageToggleButton) {
      // Update tooltip to show current language
      const currentLanguageName =
        this.currentLanguage === "en" ? "English" : "日本語";
      this.languageToggleButton.title = `Current: ${currentLanguageName} - Click to switch`;
    }
  }

  // Method to get current language
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // Method to get translation for a specific key
  getTranslation(key) {
    const currentTranslations = translations[this.currentLanguage];
    return currentTranslations[key] || key;
  }

  // Method to get all translations for current language
  getCurrentTranslations() {
    return translations[this.currentLanguage];
  }

  // Method to test persistence
  testPersistence() {
    console.log("Current language:", this.getCurrentLanguage());
    console.log(
      "localStorage app-language:",
      localStorage.getItem("app-language")
    );
    console.log("HTML lang attribute:", this.htmlElement.getAttribute("lang"));
  }
}

// Initialize language handler when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  if (!window.languageHandler) {
    window.languageHandler = new LanguageHandler();
  }
});

// Export for use in other modules
export default LanguageHandler;
