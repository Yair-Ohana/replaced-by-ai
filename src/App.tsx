import React from "react";

function App() {
  const LinkBox = () => {
    return (
      <div
        onClick={() => {
          window.location.href = "https://www.willaireplaceme.com";
        }}
        className="box-container"
      >
        <span className="small-icon">🤖</span>
        <span>willaireplaceme.com</span>
      </div>
    );
  };

  return (
    <div className="container">
      <span className="icon">🤖</span>
      <h1>F*ck Robots.</h1>
      <h3>Coming soon ...</h3>

      <LinkBox />
    </div>
  );
}

export default App;
