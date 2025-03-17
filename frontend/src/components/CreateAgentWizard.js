import React from 'react';
import { useTranslation } from 'react-i18next';

function CreateAgentWizard() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('welcome')}</h1>
      <label>{t('task')}</label>
      <input type="text" placeholder="e.g., Send SMS for Diwali wishes" />
      <button>{t('submit')}</button>
    </div>
  );
}

export default CreateAgentWizard;