import Expo from 'expo';

const { manifest } = Expo.Constants;
const api = manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(':').shift().concat(':3000')
  : 'productionUrl.com';

const url = `https://${api}/questions`;

export function getQuestions() {
  // console.log(questions);
  // return fetch(url)
  // .then(res => res.json());
}
