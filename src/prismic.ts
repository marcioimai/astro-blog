import * as prismic from '@prismicio/client';
import fetch from 'node-fetch';

// export const apiEndpoint = `${process.env.PRISMIC_API_ENDPOINT}`;
export const apiEndpoint = 'https://imai.cdn.prismic.io/api/v2';
const accessToken =
  'MC5aYkJLVEJBQUFDSUFNc0pK.FO-_ve-_vR8V77-977-9NyxEWzzvv73vv70sIGLvv70yMyQcaDQJ77-977-9J--_vR00LA';
console.log(apiEndpoint);
export const client = prismic.createClient(apiEndpoint);
console.log(client);

const init = async () => {
  console.log('init...');
  const prismicDoc = await client.getMasterRef();
  console.log('prismicDoc', prismicDoc);
};

// init();
client
  .getMasterRef()
  .then((ref) => console.log('ok', ref))
  .catch((err) => console.log('erro', err));

export function getPage(slug: string) {
  // return client.getByUID('page', slug);
  return 'ok';
}
