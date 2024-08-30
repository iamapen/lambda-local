const {handler} = require('./index');

const event = {};
handler(event).then(response => {
  console.log(response);
}).catch(err => {
  console.error(err);
});
