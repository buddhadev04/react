import React, { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordGen() {
  const [range, setRange] = useState(6);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,8) // only select the first 8 characters
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTYVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) str += "0123456789";
    if (isCharacter) str += "~!@#$%^&*<>";
    for (let i = 1; i <= range; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [range, isNumber, isCharacter, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [range, isNumber, isCharacter, passwordGenerator]);

  return (
    <div className="container d-flex justify-content-center mt-3">
      <div
        className="border rounded p-2"
        style={{ maxWidth: "600px", width: "100%", backgroundColor: "#FFDFD6" }}
      >
        <h3 className="text-center">Password Generator</h3>
        <div className="row align-items-center mb-3 mt-3">
          <label htmlFor="textInput" className="col-form-label col-md-3">
            Password
          </label>
          <div className="col-md-9">
            <div className="input-group d-flex gap-2">
              <input
                type="text"
                className="form-control"
                id="textInput"
                value={password}
                readOnly
                ref={passwordRef}
              />
              <div className="input-group-append">
                <button type="button" className="btn btn-primary ml-2" onClick={copyPassword}>
                  copy
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="rangeInput">Range</label>
          <input
            type="range"
            className="form-control-range cursor-pointer"
            id="rangeInput"
            min="4" // Starting value
            max="20" // Ending value
            value={range} // Current value
            onChange={(e) => setRange(e.target.value)}
          />
          <span>{range}</span>
        </div>
        <div className="d-flex flex-wrap gap-5">
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="numbers"
              defaultChecked={isNumber}
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
            />
            <label className="form-check-label" htmlFor="numbers">
              Numbers
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="characters"
              defaultChecked={isCharacter}
              onChange={() => {
                setIsCharacter((prev) => !prev);
              }}
            />
            <label className="form-check-label" htmlFor="characters">
              Charecters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
