import React from 'react';

interface FooterProps {
  studentName: string;
  courseName: string;
}

function Footer({ studentName, courseName }: FooterProps): React.JSX.Element {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 mt-12 border-t border-gray-200 w-full text-center">
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-500 mb-2">
          {studentName} — {courseName}
        </p>
        <p className="text-sm text-gray-500">
          &copy; {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
