import { useTranslations } from 'next-intl'

export default function LibraryPage() {
  const t = useTranslations()

  return <div>Library page {t('common.language')}</div>
}
