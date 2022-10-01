import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
        <meta name="google-site-verification" content="-dHMl6XhbXNj_jQqEPgUeHbmA0UyiizEUfwGtyhewOU" />
              <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

    </Head>
  );
}
