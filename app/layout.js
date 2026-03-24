import './globals.css';

export const metadata = {
  title: 'MTS Training Services | Excellence in Training',
  description: 'On-site RTITB-accredited forklift, health and safety, and compliance training delivered at customer premises.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
