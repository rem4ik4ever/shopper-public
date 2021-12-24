import React from 'react';
import Link, { LinkProps } from 'next/link';

const AppLink: React.FC<LinkProps & { onClick?: (ev: any) => void }> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <Link href={href} passHref>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default AppLink;
