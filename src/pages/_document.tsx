import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v15-pagesRouter';
import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v15-pagesRouter';

export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  const descriptionText = 'Web3 Boilerplate by Wonderland.';
  const bannerImage = '';

  return (
    <Html lang='en'>
      <Head>
        <DocumentHeadTags {...props} />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='48x48' />
        <meta name='description' content={descriptionText} />

        <meta property='og:title' content='Web3 Boilerplate' />
        <meta property='og:description' content={descriptionText} />
        <meta name='twitter:image' content={bannerImage} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@DeFi_Wonderland' />
        <meta name='twitter:creator' content='@DeFi_Wonderland' />
        <meta name='twitter:title' content='Web3 Boilerplate' />
        <meta name='twitter:description' content={descriptionText} />

        <meta name='twitter:image' content={bannerImage} />

        {/* To prevent all search engines from indexing */}
        <meta name='robots' content='noindex' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  ) as JSX.Element;
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
