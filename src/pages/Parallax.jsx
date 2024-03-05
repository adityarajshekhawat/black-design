// App.js
import "../styles/parallax.scss";
import React from "react";

function App() {
  const imageUrl =
    "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; // Replace with your image URL

  return (
    <div className="App">
      <Parallax imageUrl={imageUrl}>
        {/* Any content you want to appear above the image */}
        <div className="content">
          <h1>This is a Parallax Effect</h1>
          <p>Lorem ipsum dolor sit amet...</p>
          {/* Add additional content and elements here */}
        </div>
      </Parallax>
    </div>
  );
}

export default App;
