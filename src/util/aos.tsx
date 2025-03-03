'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment, useEffect } from 'react';
import { PropsWithChildren } from 'react';

const AOSProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default AOSProvider;
