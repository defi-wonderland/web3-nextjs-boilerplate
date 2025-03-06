# Web3 React Boilerplate

## Features

- Modern React setup with the latest tools and libraries.
- Boilerplate for building web3-enabled applications.
- Example unit and integration tests included.
- Code linting and formatting for clean and maintainable code.
- GitHub workflows for continuous integration.

## Setup

1. Clone this repository.
2. Copy the `.env.example` file to `.env` and fill in the variables.
3. Install the project dependencies by running:

   ```bash
   pnpm install
   ```

## Available Scripts

Available scripts that can be run using `pnpm`:

| Script         | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `dev`          | Start the development server using Next.                     |
| `build`        | Build the project for production.                            |
| `preview`      | Preview the production build using Next.                     |
| `lint`         | Run ESLint on the source code to check for coding standards. |
| `lint:fix`     | Run ESLint and automatically fix code formatting issues.     |
| `prettier`     | Check code formatting using Prettier.                        |
| `prettier:fix` | Format code using Prettier and automatically fix issues.     |
| `format`       | Run Prettier and ESLint to format and fix code issues.       |
| `format:check` | Check code formatting and linting without making changes.    |
| `test`         | Run tests using Cypress and Jest                             |

## Technologies Used

This boilerplate leverages the latest technologies, including:

- [NextJS](https://nextjs.org/)
- [Wagmi](https://wagmi.sh/)
- [Viem](https://viem.sh/)
- [Rainbowkit](https://www.rainbowkit.com/)

## Theme Customization

### Modifying Default Colors

To customize the default palette (error, warning, success, info), uncomment and modify the palette object in `src/config/themes/theme.ts`:

```typescript
const palette = {
   error: {
     main: '#BA6B5D',    // Main error color
     light: '#ECCCC6',   // Light variant
     dark: '#824A41',    // Dark variant
   },
   warning: { ... },
   success: { ... },
   info: { ... },
};
```

### Adding New Theme Variables

To extend the theme with new variables, declare them in `src/types/theme.ts` using the Material-UI module augmentation:

```typescript
declare module '@mui/material/styles' {
  interface Palette {
    // Add new palette property
    myNewColor: {
      primary: string;
    };
  }

  // Add new theme property
  interface Theme {
    myNewProperty: {
      value: string;
    };
  }
}
```

### Using Theme Attributes with Styled Components

You can access theme properties in your styled components using the theme prop. Here are some examples:

```typescript
import { styled } from '@mui/material/styles';

// Using background colors
const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '1rem',
}));

// Using border radius
const RoundedBox = styled('div')(({ theme }) => ({
  borderRadius: theme.borderRadius.default,
  border: theme.palette.border,
}));

// Using typography
const StyledText = styled('p')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: theme.typography.fontFamily,
}));

// Using custom theme properties
const TitleText = styled('h1')(({ theme }) => ({
  color: theme.palette.title.primary,
}));
```

These styled components will automatically adapt to theme changes (light/dark mode).
