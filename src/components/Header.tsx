import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderProps): React.JSX.Element {
  return (
    <header className="py-12 text-center">
      <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-2">{title}</h1>
      <div className="text-lg md:text-xl text-gray-500 font-light">{subtitle}</div>
    </header>
  );
}

export default Header;