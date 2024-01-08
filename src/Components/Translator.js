// Translator.js
import React, { useState } from 'react';
import axios from 'axios';

const Translator = ({ sourceLanguage, targetLanguage, onTranslate }) => {
  const [textToTranslate, setTextToTranslate] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await axios.post(
        'https://dickyagustin-text-translator2.p.rapidapi.com/translate',
        {
          source: sourceLanguage.value,
          target: targetLanguage.value,
          text: textToTranslate,
        },
        {
          headers: {
            'X-RapidAPI-Key': '18df0ad753msh8339d3815f02a0ep1454e5jsn28f139d105be', 
          },
        }
      );

      const translatedText = response.data.translation;
      onTranslate(translatedText);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  return (
    <div>
      <textarea
        value={textToTranslate}
        onChange={(e) => setTextToTranslate(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button onClick={handleTranslate}>Translate</button>
    </div>
  );
};

export default Translator;
