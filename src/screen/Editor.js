import React, { useState, useEffect } from "react";

import marked from "marked";

const Editor = () => {
  const [textEditor, setTextEditor] = useState("");

  const str1 = "# ";
  const str2 = "## ";
  const str3 = "### ";

  const renderHTML = (textEditor) => {
    const __html = marked(textEditor);
    return { __html };
  };

  useEffect(() => {
    console.log("mounted");
    const text = localStorage.getItem("TextStored");
    console.log("text", text);
    if (text === null) {
      setTextEditor("");
    } else {
      setTextEditor(text);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("TextStored", textEditor);
  }, [textEditor]);

  return (
    <div className="px-0 px-md-3 mt-3 text-md-left text-center">
      <div className="btn-group mx-0 mx-md-3" role="group">
        <button
          type="button"
          className="btn btn-dark"
          id="h1"
          onClick={(e) => {
            setTextEditor(textEditor.concat(str1));
          }}
        >
          H1
        </button>
        <button
          type="button"
          className="btn btn-dark"
          id="h2"
          onClick={(e) => {
            setTextEditor(textEditor.concat(str2));
          }}
        >
          H2
        </button>
        <button
          type="button"
          className="btn btn-dark"
          id="h3"
          onClick={(e) => {
            setTextEditor(textEditor.concat(str3));
          }}
        >
          H3
        </button>
      </div>
      <div className="container-fluid mt-1 mb-4">
        <div className="row px-0 px-md-2">
          <div className="col-md p-0 mx-0 mx-md-2 my-2" id="left">
            <textarea
              className="form-control w-100 h-100"
              placeholder="It just starts here ..."
              value={textEditor}
              onChange={(e) => {
                setTextEditor(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="col-md mx-0 mx-md-2 my-2" id="right">
            <div dangerouslySetInnerHTML={renderHTML(textEditor)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
