import { Metadata } from 'next';

import Alert from '../components/alert';
import Footer from '../components/footer';
import { HOME_OG_IMAGE_URL } from '../lib/constants';
import '../styles/index.css'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
          <Alert>This site doesn't use any cookies! 🍪</Alert>
          <div className="min-h-screen">
          <main>{children}</main>
          </div>
          <Footer />
        </body>
      </html>
    );
}

export const metadata: Metadata = {
  title: 'Code Insights | Unveiling the secrets of Web Development 🎉',
  description: 'Code Insights | Unveiling the secrets of Web Development',
  themeColor: '#000',
  openGraph: {
    images: HOME_OG_IMAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  }
};
  