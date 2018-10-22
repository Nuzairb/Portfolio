const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Nuzair - Ibrahim Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Nuzair Ibrahim', // Alternative Site title for SEO
  siteUrl: 'https://nuzair.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'This is my protfolio website build with gatsby and react',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@NuzairIb', // Twitter Username
  ogSiteName: 'nuzair.ibrahim.58', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
