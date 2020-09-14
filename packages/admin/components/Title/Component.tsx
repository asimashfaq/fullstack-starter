import React from 'react';
import { useI18n } from '../../utils/i18n';

const TranslationsNeeded = '/components/Title';

const Component: React.FC<{ title: string; subtitle?: string }> = ({
  title,subtitle,
}) => {
  const { language, translations, config } = useI18n(TranslationsNeeded);

  return (
    <div className="pl-4 flex flex-col py-4 mb-4">
      <h1 className="text-lg text-default font-bold font-poppins">{title}</h1>
      <h2 className="text-sm text-secondary">{subtitle}</h2>
    </div>
  );
};

export const AllTranslationsNeeded: string[] = [TranslationsNeeded];

export default Component;
