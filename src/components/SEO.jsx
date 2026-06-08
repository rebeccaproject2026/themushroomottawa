import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://themushroomottawa.ca';
const DEFAULT_IMAGE = `${BASE_URL}/icons.svg`;

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | The Mushroom Ottawa`
    : 'The Mushroom Ottawa – Premium Magic Mushrooms Delivery in Ottawa & Gatineau';

  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* OG */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
