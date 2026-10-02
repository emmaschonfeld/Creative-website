import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Aurum Capital', description: 'Precision-driven wealth management', icons: { icon: '/Creative-website/favicon.svg' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
