import '@/app/ui/global.css'
import { inter } from "@/app/ui/fonts"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: "%s | Acme Dashboard", default: 'Acme Dashboard' },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  authors: [{ name: "Tatvasoft" }, { name: "Karan Sarvaiya" }],
  keywords: ['Next.js', 'Acme', "Javascript", "React"],
  referrer: 'origin-when-cross-origin',
  creator: "Karan Sarvaiya",
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  generator: 'Next.js',
  applicationName: 'Acme Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
