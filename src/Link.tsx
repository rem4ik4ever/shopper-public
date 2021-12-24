import React from 'react';
import Link, { LinkProps } from 'next/link';

const AppLink: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <Link {...rest} passHref>
      <a>{children}</a>
    </Link>
  );
};

export default AppLink;
