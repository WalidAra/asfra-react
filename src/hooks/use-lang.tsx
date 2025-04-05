import { useTranslation } from "react-i18next";

export const useLang = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return currentLanguage;
};
