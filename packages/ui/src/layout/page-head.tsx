import { FC } from 'react'

interface PageHeadProps {
  title: string
  description: string
  imagePathname?: string
  pathname?: string
  url?: string
  socialImageUrl?: string
  domain?: string
  twitter?: string
  isPWA?: boolean
}

export const PageHead: FC<PageHeadProps> = ({
  title,
  description,
  imagePathname,
  pathname,
  url,
  socialImageUrl,
  domain,
  twitter,
  isPWA = false
}) => {
  const path_url = pathname ? `${url}${pathname}` : url
  const imageUrl = imagePathname ? `${url}${imagePathname}` : socialImageUrl

  return (
    <>
      <title>{title}</title>

      <link rel='icon' href='/favicon.ico' />

      {isPWA && <link rel='manifest' href='/manifest.json' />}

      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />

      <meta property='og:site_name' content={title} />
      <meta property='twitter:domain' content={domain} />

      <meta name='twitter:creator' content={`@${twitter}`} />

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </>
      )}

      {imageUrl ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={imageUrl} />
          <meta property='og:image' content={imageUrl} />
        </>
      ) : (
        <meta name='twitter:card' content='summary' />
      )}

      {path_url && (
        <>
          <link rel='canonical' href={path_url} />
          <meta property='og:url' content={path_url} />
          <meta property='twitter:url' content={path_url} />
        </>
      )}

      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
    </>
  )
}

export default PageHead
