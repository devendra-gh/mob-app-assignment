import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ae, de, fr } from "./translations";
import { DEFAULT_LANG } from "../utils/constant";
const { languageDetectorPlugin } = require("./languageDetectorPlugin");

const resources = {
  en: {
    translation: en,
  },
  ae: {
    translation: ae,
  },
  de: {
    translation: de,
  },
  fr: {
    translation: fr,
  }
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: 'v3',
    lng: DEFAULT_LANG,
    resources,
    fallbackLng: DEFAULT_LANG,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;
