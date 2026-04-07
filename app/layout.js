import './globals.css';

export const metadata = {
  title: 'Massey Training Services | Excellence in Training',
  description: 'Professional on-site RTITB forklift training, health and safety, and compliance support delivered at customer premises across the UK.',
  keywords: ['RTITB forklift training', 'on-site forklift training', 'forklift training UK', 'MTS Training Services', 'workplace training'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
