# Pros:
* Simple to implement, requires only an `OpenAPI doc` (JSON/YML) to build the mock server. Supports Swagger v2 and v3.
* To set expectation we need only to configure API-doc file, by setting examples to endpoint responses.
* If examples are not set, it can generate both static and dynamic responses.
* Can delegate requests to actual server as well.
* Callbacks are supported.
* It also has `Prism client`, i.e. we can mock the server offline and execute requests at runtime. But its still in Beta phase and documentations are not updated. [Ref - https://stoplight.io/p/docs/gh/stoplightio/prism/docs/guides/http-client.md] 
* It has `Validation Proxy`. API consumers can funnel their development traffic through Prism running as proxy, and then relay that traffic to the API-in-progress. It will report any mistakes it notices along the way, either with the requests you're sending or the responses coming back from the server. [Ref - https://stoplight.io/p/docs/gh/stoplightio/prism/docs/guides/03-validation-proxy.md#use-cases]
* Application start time is merely 1-2 seconds.
* Can serve multiple OpenAPI docs via docker.




# Cons:
* Changing expectations (i.e. modifying API-doc) requires restarting the application server.
* Expectations cannot be fed to the server dynamically. (Can only be done offline by Prism-client)