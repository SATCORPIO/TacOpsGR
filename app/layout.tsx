import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SATCORP COMMAND',
  description: 'We Solve What Others Cannot.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#050507]">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
