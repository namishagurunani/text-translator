// LanguageSelection.js
import React from 'react';
import Select from 'react-select';

const LanguageSelection = ({ label, options, selectedValue, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <Select
        options={options}
        value={selectedValue}
        onChange={onChange}
      />
    </div>
  );
};

export default LanguageSelection;
