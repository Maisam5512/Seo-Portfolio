import type { Metadata } from 'next';
import Header from '@/Components/common/Header';
import Footer from '@/Components/common/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syed Tehzeeb Ul Hassan - SEO Expert',
  description: 'Professional portfolio of Syed Tehzeeb Ul Hassan, SEO Expert specializing in on-page, off-page, technical, and local SEO',
  keywords: ['SEO Expert', 'Local SEO', 'Digital Marketing', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}