const rp = require('request-promise');

module.exports = function ({user, params, ekey, config:iconfig}) {
  const pluginConfig = iconfig ? iconfig.params ? iconfig.params['authmagic-proxy-plugin'] : null : null;
  const {apiKey, uri} = pluginConfig;
  return rp({
    method: 'POST',
    json: true,
    body: {user, params, ekey, pluginConfig, apiKey},
    uri,
  });
};