import { TranslatorContext, Storage } from 'react-jhipster';

import { setLocale } from 'app/shared/reducers/locale';

TranslatorContext.setDefaultLocale('en');
TranslatorContext.setRenderInnerTextForMissingKeys(false);

export const languages: any = {
  cs: { name: 'Český' },
  da: { name: 'Dansk' },
  nl: { name: 'Nederlands' },
  en: { name: 'English' },
  fr: { name: 'Français' },
  de: { name: 'Deutsch' },
  it: { name: 'Italiano' },
  ja: { name: '日本語' },
  pl: { name: 'Polski' },
  ro: { name: 'Română' },
  ru: { name: 'Русский' },
  sk: { name: 'Slovenský' },
  sr: { name: 'Srpski' },
  es: { name: 'Español' },
  sv: { name: 'Svenska' }
  // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
};

export const locales = Object.keys(languages).sort();

export const registerLocale = store => {
  store.dispatch(setLocale(Storage.session.get('locale', 'en')));
};
