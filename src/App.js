import React, { useState } from "react";
import "./App.css";
import jsConvert from "js-convert-case";

function App() {
  const [data, setData] = useState("");

  const inputChange = (e) => {
    setData(e.target.value);
  };

  const toUpperCase = () => setData((a) => jsConvert.toUpperCase(a));
  const toLowerCase = () => setData((a) => jsConvert.toLowerCase(a));
  const toSentenceCase = () => setData((a) => jsConvert.toSentenceCase(a));
  const toKebabCase = () => setData((a) => jsConvert.toKebabCase(a));
  const toHeaderCase = () => setData((a) => jsConvert.toHeaderCase(a));
  const toTextCase = () => setData((a) => jsConvert.toTextCase(a));
  const toPathCase = () => setData((a) => jsConvert.toPathCase(a));
  const toDotCase = () => setData((a) => jsConvert.toDotCase(a));
  const toPascalCase = () => setData((a) => jsConvert.toPascalCase(a));
  const toSnakeCase = () => setData((a) => jsConvert.toSnakeCase(a));
  const toCamelCase = () => setData((a) => jsConvert.toCamelCase(a));
  const copyText = () => {
    const textarea = document.getElementById("textarea");
    textarea.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(textarea.value);
  };
  return (
    <>
      <section className="midsec">
        <div className="container-lg">
          <h1 className="display-5 mb-4 text-center text-white text-uppercase">
            Case Converter
          </h1>
          <form>
            <div className="">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  value={data}
                  id="textarea"
                  rows="10"
                  onChange={inputChange}
                ></textarea>
              </div>
              <div className="mt-3">
                <div className="d-flex flex-wrap gap-2 justify-content-center mb-3 btnlist">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toUpperCase}
                  >
                    TO UPPERCASE
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toLowerCase}
                  >
                    to lowercase
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toSentenceCase}
                  >
                    To sentencase
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toKebabCase}
                  >
                    to-kebab-case
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toHeaderCase}
                  >
                    To Headercase
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toTextCase}
                  >
                    to textcase
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toPathCase}
                  >
                    to/pathcase
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toDotCase}
                  >
                    to.dotcase
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toPascalCase}
                  >
                    ToPascalCase
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toSnakeCase}
                  >
                    to_snake_case
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={toCamelCase}
                  >
                    toCamelCase
                  </button>
                  <button
                    type="button"
                    className="btn btn-success btn-sm"
                    onClick={copyText}
                  >
                    <i className="fas fa-copy mr-2"></i>Copy Text
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <p>
            Made with 💖 | Design and developed by{" "}
            <a href="https://iamnarugopal.in/" target="_blank">
              Naru Gopal
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
