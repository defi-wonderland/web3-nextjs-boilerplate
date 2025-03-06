import { styled } from '@mui/material/styles';
import { FOOTER_HEIGHT } from '~/utils';

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

const FooterContainer = styled('footer')(({ theme }) => {
  return {
    display: 'flex',
    height: `${FOOTER_HEIGHT}rem`,
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.secondary,
    borderTop: theme.palette.border,
    width: '100%',
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
