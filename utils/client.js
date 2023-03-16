import createClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // or the name you chose in step 1
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: true,
}

export const sanityClient = createClient(client);




export const urlFor = (source) => createImageUrlBuilder(client).image(source);