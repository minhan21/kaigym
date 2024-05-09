// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

import en from "./locales/en.json";
import vi from "./locales/vi.json";

// i18next configuration
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3", // Compatibility for older JSON versions
    fallbackLng: "en",
    lng: Localization.locale.split("-")[0], // Extracts the language code from the system locale (e.g., "en-US" -> "en")
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    interpolation: {
      escapeValue: false, // React already sanitizes output
    },
  });

export default i18n;
