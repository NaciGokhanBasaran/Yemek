import React from "react";

export default function Video() {
  return (
    <div className="Video">
      <h1>Our Recent Video</h1>
      <br />
      <br />
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fQallQyxAfw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
