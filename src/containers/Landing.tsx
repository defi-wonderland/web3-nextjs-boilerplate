import { styled } from '@mui/material/styles';
import { DISCLAIMER_HEIGHT, SURROUND_HEIGHT } from '~/utils';

export const Landing = () => {
  return <LandingContainer>{/* Add your landing page content here */}</LandingContainer>;
};

const LandingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${SURROUND_HEIGHT}rem - ${DISCLAIMER_HEIGHT}rem)`,
  padding: '0 8rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
