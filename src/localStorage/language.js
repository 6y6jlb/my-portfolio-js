import { LS } from "../common/config/config";

export const updatePreselectedLanguage = (value) => {
    localStorage.setItem(LS.PRESELECTED_LANGUAGE, value)
};

export const getPreselectedLanguage = () => {
    return localStorage.getItem(LS.PRESELECTED_LANGUAGE)
};