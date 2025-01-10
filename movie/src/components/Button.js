import React from "react";

export default function Button({
  icon,
  name,
  bgColor = "#ff3700",
  color = "#fff",
}) {
  return (
    <div className="button">
      <a
        href=""
        className="mainBtn"
        style={{ color: color, background: bgColor }}
      >
        {icon} {name}
      </a>
    </div>
  );
}
