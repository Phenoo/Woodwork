import createClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const client = {
    projectId: "eeywejc8", // you can find this in sanity.json
    dataset: "production", // or the name you chose in step 1
    apiVersion: "2023-02-25",
    useCdn: true,
}

export const sanityClient = createClient(client);




export const urlFor = (source) => createImageUrlBuilder(client).image(source);