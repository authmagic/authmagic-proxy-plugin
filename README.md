<img src="https://github.com/authmagic/authmagic/blob/master/docs/images/logo.png?raw=true" width="300px"/>

# authmagic-proxy-plugin
Plugin for <a href="https://github.com/authmagic/authmagic">authmagic</a> to send authorization ekey through proxy. It works with <a href="https://github.com/authmagic/authmagic-timerange-stateless-core">authmagic-timerange-stateless-core</a>. It allows you to keep ekey transferring logic on your application.

Plugin performs post request to a uri required in the params and attaches apiKey.

Example usage: you may want to log that user requested ekey and only then send it through email.

## Params
uri - destination of the post request

apiKey - secret key to identify yourself, should be verified by the application which handles uri

## Installation
Check <a href="https://github.com/authmagic/authmagic-cli">authmagic-cli</a>.
```
authmagic install authmagic-proxy-plugin
```

Licence
-----------
authmagic-proxy-plugin is [MIT licensed](./LICENSE).
