const axios = require('axios');
const fs = require('fs');

const generateSitemap = async () => {
  try {
    // Fetch data from the URL
    const { data } = await axios.get('http://strapi.kyra.com/sitemap.php');

    // Format the fetched data into the desired format
    const sitemapData = data.map(item => ({
      url: `/creator/${item.username}`,
      lastModified: new Date(),
    }));

    // Add static routes to the sitemap
    const staticRoutes = [
      {
        url: '/',
        lastModified: new Date(),
      },
      {
        url: '/brands',
        lastModified: new Date(),
      },
      {
        url: '/creators',
        lastModified: new Date(),
      },
    ];

    sitemapData.push(...staticRoutes);

    const sitemapContent = `import { MetadataRoute } from 'next';

  export default function sitemap(): MetadataRoute.Sitemap {
    return ${JSON.stringify(sitemapData, null, 2)};
  }`;

    fs.writeFileSync('./src/app/(site)/sitemap.ts', sitemapContent);

    console.log('Sitemap has been successfully generated');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
};

generateSitemap();