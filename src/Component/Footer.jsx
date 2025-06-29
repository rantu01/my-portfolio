import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4 bg-gray-700 text-white">
      <aside className="grid-flow-col items-center">
        <p className="text-center">Copyright © {new Date().getFullYear()} - Rantu All right reserved</p>
      </aside>
      
    </footer>
  );
};

export default Footer;
