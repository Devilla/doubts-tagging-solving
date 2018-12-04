import Expo from 'expo';

const { manifest } = Expo.Constants;
const api = manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(':').shift().concat(':3000')
  : 'productionUrl.com';

const url = `http://${api}/questions`;

export function getQuestions() {
  return fetch(url)
  .then(res => response.json());

}
