import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // to load translation files from the server or local files
  .use(LanguageDetector) // to detect language from browser
  .use(initReactI18next) // initialize i18next with React bindings
  .init({
    fallbackLng: "en", // default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // avoid using Suspense
    },
  });

export default i18n;
