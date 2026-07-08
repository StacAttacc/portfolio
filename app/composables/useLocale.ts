import en from '~/i18n/en'
import fr from '~/i18n/fr'

export type Locale = 'en' | 'fr'

const translations = { en, fr }

export const useLocale = () => {
  const locale = useState<Locale>('locale', () => 'en')

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[locale.value]
    for (const k of keys) value = value?.[k]
    return typeof value === 'string' ? value : key
  }

  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'fr' : 'en'
  }

  return { locale, t, toggleLocale }
}
