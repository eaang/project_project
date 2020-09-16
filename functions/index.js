const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')

const nuxtConfig = require('./nuxt.config.js')

const config = {
  ...nuxtConfig,
  dev: false,
  buildDir: 'nuxt',
}
const nuxt = new Nuxt(config)

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()

  const result = await nuxt.renderRoute(req.path) // Returns { html, error, redirected }
  res.send(result.html) // Sends html as response
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
