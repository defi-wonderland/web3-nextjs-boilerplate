import Image from 'next/image';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FOOTER_HEIGHT } from '~/utils';
import wonderlandLogo from '~/assets/wonderland.svg';

export const Footer = () => {
  return (
    <FooterContainer>
      <Typography>Footer</Typography>
      <Subtitle>
        <p>Made with 💜 by</p>
        <a href='https://wonderland.xyz'>
          <Image src={wonderlandLogo} alt='Wonderland' height={12} />
        </a>
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

const Subtitle = styled('div')(({ theme }) => {
  const invert = theme.palette.mode !== 'dark';
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    '& p': {
      display: 'inline-block',
    },
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      filter: invert ? 'invert(1)' : 'none',
    },
  };
});
