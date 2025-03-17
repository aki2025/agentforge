import React from 'react';
import i18n from '../i18n';

const LanguageSelector = () => {
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select defaultValue="en" onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
    </select>
  );
};

export default LanguageSelector;