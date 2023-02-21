//Here we'll link frontend and backend

import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import 'react-native-url-polyfill/auto';
 
let PROJECT_ID = "6nxhemcf";
let DATASET = "production";
// let API_VERSION = '2021-10-21';

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  appVersion: "2023-02-05",
  token: "skTgg0DbB66UzJS3ZbAJoWJs3cH5T1uWCN0iHrUZhuH1w4SAW0tE1ntWxeGcTq3aC3k1u0mcQT6eTEqTJhnYP9gFWNAZMG3i6U0oVWzUInqhaVRJtMVjDt2l2eAmQU2iSGcbWC8booBo33oB6U72uQtc10gp7yRYBHWzsp6hVlXWOAyyhuLH" ,
  useCdn: true, 
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}