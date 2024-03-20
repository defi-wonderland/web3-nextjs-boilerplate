import { styled } from '@mui/material/styles';
import { useCustomTheme } from '~/hooks/useTheme';

export const Footer = () => {
  return (
    <FooterContainer>
      <h1>Footer</h1>
      <Subtitle>
        <p>Made with 💜 by</p>
        <a href='https://defi.sucks'>Wonderland</a>
      </Subtitle>
    </FooterContainer>
  );
};

const FooterContainer = styled('footer')(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    height: '8rem',
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: currentTheme.backgroundSecondary,
    borderTop: currentTheme.border,
    width: '100vw',
  };
});

const Subtitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  '& p': {
    display: 'inline-block',
  },
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
});
