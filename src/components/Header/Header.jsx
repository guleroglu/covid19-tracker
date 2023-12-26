import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">C😷VID-19</h1>
      <h3 className="subtitle">
        Global and Country Wise Cases of Corona Virus
      </h3>
      <span>(For a Particlar select a Country from below)</span>
    </header>
  );
}

export default Header