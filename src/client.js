import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: 'dgmgulp6',
  dataset: 'production',
  apiVersion: '2022-05-26',
  useCdn: true,
  token: 'skf8LnWvPwqyPxMCpNhjFi4fByAID3e9DwKPrB9w3c7UA7YyZx4VG0VFqKMKYsUrZIGGIYwNPmvnVWv5rAz2TkLx5iOIBJyIhyCgSlTkfLv4bMUg2a6iHUMxEgTTwE2PZx5QcbGvYBJIqaKECY6accYGFirkNooJDoWFFXtpVeGgJIvbGUFe',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
