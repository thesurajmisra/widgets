import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState(" ");

  return (
    <React.Fragment>
      <div>
        <div className="ui form">
          <div className="field">
            <label className="lable">Enter Text</label>
            <input value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
        <Dropdown
          label="Select a Language"
          selected={language}
          onSelectedChange={setLanguage}
          options={options}
        />
      </div>
    </React.Fragment>
  );
};

export default Translate;