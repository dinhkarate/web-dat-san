// import router
const court = require("./courtRouter")
const site = require("./siteRouter")
const account = require('./accountRouter');

const route = (app) => {
  app.use("/api", site);
  app.use('/api/account', account);
  app.use("/api/court", court)
}

module.exports = route;