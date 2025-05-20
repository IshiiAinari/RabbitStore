import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  dropdown?: boolean;
  mobile?: boolean;
}

export const Link: React.FC<LinkProps> = ({ href, children, dropdown, mobile }) => {
  if (dropdown) {
    return (
      <a
        href={href}
        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        {children}
      </a>
    );
  }

  if (mobile) {
    return (
      <a
        href={href}
        className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
};