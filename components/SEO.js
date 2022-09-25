import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
        <meta name="google-site-verification" content="-dHMl6XhbXNj_jQqEPgUeHbmA0UyiizEUfwGtyhewOU" />
          <style>

    text-xl{
color: #07114b;
    background: #cacaf985;
    padding: 13px;
    font-size: 20px;
    font-weight: 800;
    border-radius: 8px;
        
    }
        body{direction:rtl;
       font-family: serif!important;
}
h1{ font-family: serif!important;}
h2{
  color: #3f51b5!important;
    font-family: serif!important;
font-size: 26px!important;
  }
   p, ol, ul{font-size:20px;
color:black;
}     
    h3{ color: #9c27b0!important;
    font-family: serif!important;
       font-size: 22px!important;
       
      }</style>
    </Head>
  );
}
