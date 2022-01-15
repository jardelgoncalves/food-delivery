import { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

import * as Styles from './Layout.styles';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Styles.Main>{children}</Styles.Main>
      <Footer />
    </>
  );
}
