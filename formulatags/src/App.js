import "./App.css";

import React, { useCallback, useState } from "react";
import { ReactTags } from "react-tag-autocomplete";
import { suggestions, options } from "./optionList";

const App = () => {
  const [selected, setSelected] = useState([]);
  const regex = /^[+\-*/()\[\]]$/;

  const onAdd = useCallback(
    (newTag) => {
      if (regex.test(newTag.label) || options.includes(newTag.label))
        setSelected([...selected, newTag]);
      else alert("Expression is not valid");
    },
    [selected]
  );

  const onDelete = useCallback(
    (tagIndex) => {
      setSelected(selected.filter((_, i) => i !== tagIndex));
    },
    [selected]
  );

  return (
    <div className="mx-auto max-w-[600px] pt-6">
      <ReactTags
        placeholderText="Select"
        selected={selected}
        suggestions={suggestions}
        onAdd={onAdd}
        onDelete={onDelete}
        allowNew={true}
        allowBackspace={false}
      />
    </div>
  );
};

export default App;
