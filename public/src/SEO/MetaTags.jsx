import { Helmet } from 'react-helmet-async';

export default function MetaTags(props) {
  const { title, description, keywords } = props;
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
        {/* <meta name="robots" content="index, follow"/> */}
        {/* <meta property="og:title" content="Best Coffee Shops in New York | My Awesome Website"/>
        <meta property="og:description" content="Discover the best coffee shops in New York. Explore top-rated cafes, cozy spots, and must-try drinks in the city."/>
        <meta property="og:image" content="https://example.com/coffee-shop.jpg"/>
        <meta property="og:url" content="https://example.com/best-coffee-shops"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Best Coffee Shops in New York | My Awesome Website"/>
        <meta name="twitter:description" content="Discover the best coffee shops in New York. Explore top-rated cafes, cozy spots, and must-try drinks in the city."/>
        <meta name="twitter:image" content="https://example.com/coffee-shop.jpg"/> */}
    </Helmet>
  );
}