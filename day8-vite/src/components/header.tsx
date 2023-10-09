import React from "react";

const Header: React.FC = () => {
  return <div className="Header">{import.meta.env.VITE_API_URL}</div>;
};

export default Header;
