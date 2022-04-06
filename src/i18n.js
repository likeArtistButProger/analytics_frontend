import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLanguages = {
    'en-US': {
      code: 'en-US',
      filename: 'en',
      textToShow: 'Eng'
    },
    'ru-RU': {
      code: 'ru-RU',
      filename: 'ru',
      textToShow: 'Rus'
    },
}

const resources = Object.fromEntries(
    Object.values(supportedLanguages).map(l => [
      l.code,
      { translation: require(`./locales/${l.filename}.json`) },
    ])
)

i18next
  .use(initReactI18next)
  .init({
    resources,
    debug: process.env.NODE_ENV === 'development',
    fallbackLng: 'en-US',
    interpolation: { escapeValue: false }
  })
  .then()

export default i18next