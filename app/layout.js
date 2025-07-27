import { Noto_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './global.css';
import styles from './styles.module.scss';
import getMetadata from 'lib/getMetadata';

const fontNotoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--fontNotoSans',
});

export const metadata = getMetadata();

export default async function Layout({ children }) {
  return (
    <html lang="en">
      <body className={fontNotoSans.className}>
        <main className={styles.main}>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
