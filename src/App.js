// App.js
import React, { useState } from 'react';
import LanguageSelection from './Components/LanguageSelection';
import Translator from './Components/Translator';

const App = () => {
  const [sourceLanguage, setSourceLanguage] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState(null);
  const [translatedText, setTranslatedText] = useState('');

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'bn', label: 'Bengali' },
    { value: 'en', label: 'English' },
    { value: 'en', label: 'English' },

    
  ];

  return (
    <div>
      <LanguageSelection
        label="Source Language"
        options={languageOptions}
        selectedValue={sourceLanguage}
        onChange={setSourceLanguage}
      />
      <LanguageSelection
        label="Target Language"
        options={languageOptions}
        selectedValue={targetLanguage}
        onChange={setTargetLanguage}
      />
      <Translator
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
        onTranslate={setTranslatedText}
      />
      <div>
        <h3>Translated Text:</h3>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default App;
