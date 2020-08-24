import React from 'react';
import { useRouter } from 'next/router';
import { useI18n, Link } from '../../utils/i18n';

const TranslationsNeeded = '/components/SwitchLink';

const Component: React.FC = () => {
  const { translations, config } = useI18n(TranslationsNeeded);

  const router = useRouter();

  return (
    <Link
      href={router.pathname}
      language={config.prefix === 'en' ? 'ar' : 'en'}
    >
      <a>{translations.name}</a>
    </Link>
  );
};

export const AllTranslationsNeeded: string[] = [TranslationsNeeded];

export default Component;
