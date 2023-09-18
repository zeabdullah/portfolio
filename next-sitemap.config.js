const DOMAIN = process.env.NEXT_PUBLIC_URL || 'https://www.zabd.dev'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: DOMAIN,
    generateIndexSitemap: false,
    changefreq: 'monthly',
    autoLastmod: true,
    generateRobotsTxt: true,
}
