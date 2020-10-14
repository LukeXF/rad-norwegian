import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const SEO = ({ product }) => {
	const {
		site: {
			siteMetadata: { title, description, url, twitterUsername, image },
		},
	} = useStaticQuery(graphql`
        query SEOQuery {
            site {
                siteMetadata {
                    title
                    titleTemplate
                    description
                    url
                    twitterUsername
	                image
                }
            }
        }
	`)

	const seo = {
		htmlAttributes: { lang: 'en' },
		title,
		description,
		url,
		article: false
	}

	return (
		<Helmet>
			<title>{product ? product.name : title}</title>
			<meta name="description" content={seo.description}/>
			<meta property="og:url" content={seo.url}/>
			{(seo.article ? true : null) && <meta property="og:type" content="article"/>}
			<meta property="og:title" content={product ? product.name : title}/>
			{seo.description && <meta property="og:description" content={seo.description}/>}
			<meta property="og:image" content={`${url}${image}`}
			/>
			<meta name="twitter:card" content="summary_large_image"/>
			{twitterUsername && <meta name="twitter:creator" content={twitterUsername}/>}
			<meta name="twitter:title" content={product ? product.name : title}/>
			{seo.description && <meta name="twitter:description" content={seo.description}/>}
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/images/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/images/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/images/favicon/favicon-16x16.png"
			/>
			<link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
			<link rel="manifest" href="/images/favicon/site.webmanifest"/>
			<link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
			<link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
			<meta name="msapplication-TileColor" content="#ffffff"/>
			<meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
			<meta name="theme-color" content="#ffffff"/>
			{product && <meta property="product:availability" content="in stock"/>}
			{product && <meta property="product:condition" content="new"/>}
			{product && <meta property="product:price:amount" content={product.price}/>}
			{product && <meta property="product:price:currency" content={product.currency}/>}
			{product && <meta property="product:retailer_item_id" content={product.id}/>}
			{/* <meta property="product:item_group_id" content="fb_tshirts"/> */}
			<meta property="product:brand" content={title}/>
		</Helmet>
	)
}

export default SEO
