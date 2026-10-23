import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'R1DE Fairfield | Educational Concept', description: 'An independent educational concept exploring R1DE Fairfield’s indoor cycling, sculpt classes, and community. Not the official business website.', icons: { icon: '/Creative-website/favicon.svg' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
