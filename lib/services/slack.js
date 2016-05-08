var OAuth2 = require("./oauth2")
  , util = require("util");

function Slack(options) {

  this.code = {
    protocol: "https",
    host: "slack.com",
    pathname: "/oauth/authorize",
    query: {
      client_id: options.id,
      scope: options.scope || []
    }
  }

  this.token = {
    method: "POST",
    host:   "slack.com",
    path:   "/api/oauth.access",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    query: {
      client_id: options.id,
      client_secret: options.secret
    }
  }

  this.user = {
    host: "slack.com",
    path: "/api/auth.test",
    query: {}
  }

  this.on("request", this.onRequest.bind(this))

  OAuth2.call(this, options);
}

util.inherits(Slack, OAuth2);



module.exports = Slack
