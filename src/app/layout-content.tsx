'use client';

import { CssBaseline, styled } from '@mui/material';
import { Disclaimer } from '~/components';
import { Footer, Header } from '~/containers';

export function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Disclaimer />

      <MainContent>
        <NoScriptMessage>
          <p>This website requires JavaScript to function properly.</p>
        </NoScriptMessage>

        {/* TODO: remove when responsive is done */}
        <ResponsiveDisclaimer>
          <p>
            This website is not yet optimized for mobile devices. Please use a desktop browser for the best experience.
          </p>
        </ResponsiveDisclaimer>
        <Header />
        {children}
        <Footer />
      </MainContent>
    </>
  );
}

const MainContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  margin: 0 auto;
`;

const NoScriptMessage = styled('noscript')(() => {
  return {
    margin: '0 auto',
    width: '100%',
    textAlign: 'center',
    fontSize: '1.6rem',
    padding: '1rem 0',
    p: {
      padding: '1rem 0',
      margin: 0,
    },
  };
});

const ResponsiveDisclaimer = styled('div')(() => {
  return {
    display: 'none',
    margin: '0 auto',
    textAlign: 'start',
    fontSize: '1.6rem',
    padding: '1rem 0.8rem 1rem',
    '@media (max-width: 600px)': {
      display: 'block',
    },
    p: {
      padding: '1rem 0',
      margin: 0,
    },
  };
});
