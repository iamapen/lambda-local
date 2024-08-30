/**
 * ローカルデバッグ用
 * 本気でやるならjestなどを使ったほうがいい
 */
import {handler} from './index.mjs';

const event = {};
handler(event).then(response => {
  console.log(response);
}).catch(err => {
  console.error(err);
});
