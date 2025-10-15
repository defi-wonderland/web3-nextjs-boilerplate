import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Providers } from '~/providers';
import { LayoutContent } from './layout-content';

export const metadata: Metadata = {
  title: 'Web3 Boilerplate',
  description: 'Web3 Boilerplate by Wonderland.',
  robots: 'noindex',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Web3 Boilerplate',
    description: 'Web3 Boilerplate by Wonderland.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DeFi_Wonderland',
    creator: '@DeFi_Wonderland',
    title: 'Web3 Boilerplate',
    description: 'Web3 Boilerplate by Wonderland.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <Providers>
            <LayoutContent>{children}</LayoutContent>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
