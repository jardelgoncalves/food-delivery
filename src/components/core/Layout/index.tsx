import { ReactNode } from 'react';
import { Cart } from 'components/core/Cart';
import { Footer } from '../Footer';
import { Header } from '../Header';

import * as Styles from './Layout.styles';
import { HeaderMobile } from '../HeaderMobile';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <HeaderMobile />
      <Cart />
      <Styles.Main>{children}</Styles.Main>
      <Footer />
    </>
  );
}
