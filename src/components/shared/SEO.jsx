import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title, 
  description = "Reliable homes at affordable and mid-segment price points in Coimbatore. Your premium living partner.", 
  image = "/og-image.jpg", 
  url = "https://example-developers.com", 
  type = "website" 
}) {
  const brandName = "Premium Developers"
  const fullTitle = `${brandName} | ${title}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  )
}
