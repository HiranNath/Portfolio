import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 border-t border-gray-800 bg-black">
      <div className="max-w-7xl px-4 mx-auto text-center text-gray-500">
        <p>&copy; {currentYear} Hiran Nath. All rights reserved.</p>
        <p className="mt-1 text-sm">
          Built with React, TypeScript, and Tailwind CSS. Inspired by the cyber frontier.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
