/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom';

const RouterLink = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <Link ref={ref} to={href} {...other} />;
});

export default RouterLink;
