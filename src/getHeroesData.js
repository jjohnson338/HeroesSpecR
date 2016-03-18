const fs = require('fs-promise');

module.exports = ((url) => {

  const webRequestHeroesData = (url) => {
    const request = require('request');

    return new Promise((resolve, reject) => {
      request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body);//Fulfill the promise with the response
        }
        else {
          reject(error ? error : "Something went wrong with the request");
        }
      });
    });
  };

  return webRequestHeroesData(url)
    .then(data => {
      return JSON.parse(data);
    })
    .catch(e => {
      console.log(e);
      console.log(e.message);
      console.log(e.stack);
    });
});
