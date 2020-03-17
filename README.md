# PrismMockServer
## Work with your API before you write any code
Prism is an open-source HTTP mock server that can mimic your API’s behavior as if you already built it. Mock HTTP servers are generated from your OpenAPI v2/v3 (formerly known as Swagger) documents.


## Local Setup
* Execute command to install PRISM module globally `npm install -g @stoplight/prism-cli`
* Execute command `npm install` to install NPM dependency.
* Add environment variables `PRISM_PORT=4010`, `API_DOC=employee-doc.json`
* Execute command `npm start` to start server.


## Postman Setup
Import `Prism Mock.postman_collection.json` to Postman and explore the API deployed in PCF.


## PCF URL
http://localhost:8080/employee-api-entity/profiles/100026


## Commands
* prism mock -d http://petstore.swagger.io:8080/api/v3/openapi.yaml
* prism mock ./employee-doc.json -p 4010


## Options
* -d					Dynamic response
* --cors=false          Force disable CORS
* -p                    Change port
* --version             Displays version
* --config              Custom Configuration


## Curl Commands
* curl http://localhost:8080/employee-api-entity/profiles/100026 -H 'Content-Type: application/json' | json_p
* curl -X GET http://localhost:8080/employee-api-entity/profiles/100026 -A 'Accept: application/json'


## Note
If you are using 2.0.0-beta.7, then you will need to create a prism instance, easiest way to do that is use our new stoplight platform. Here is an example of a prism instance that we set up, it is mocking back a todo api, and you can control the examples by adding a query string parameter __example=idofexample.

For example:
https://gmztkmj2nvqxg5dfoi5hi33en5zs43lpmnvwk4roobzgs43nfz4w23a.prism.stoplight.io/todos
https://gmztkmj2nvqxg5dfoi5hi33en5zs43lpmnvwk4roobzgs43nfz4w23a.prism.stoplight.io/todos?__example=empty

`__example` defaults to the request path, if the example doesn't exist, then it tries to use the content type as the example key, and if that doesn't exist prism will just try to pick the first one example it comes across.
Other Settings:
To control the status code to mock back by set query string parameter: `__code=500`, default is 2xx
If you have a json schema defined and no example defined, prism will dynamically generate a mocked response for you based on the json schema.
If you have both a schema, and example defined you can set query string parameter: `__dynamic=true` to force a dynamic response. Default is false.
To control the content type mocked back set query parameter: `__contentType=application/xml`, defaults to application/json
Dynamic mocking only works for json responses, so if you want to mock back xml responses, you have to set an example.


## Reference
* https://stoplight.io/p/docs/gh/stoplightio/prism/README.md
* https://help.stoplight.io/prism/getting-started/custom-configuration
* https://www.npmjs.com/package/npm-run-all
* https://docs.cloudfoundry.org/devguide/deploy-apps/healthchecks.html
* https://docs.cloudfoundry.org/devguide/deploy-apps/manifest-attributes.html
* https://github.com/socketstream/prism-client
* https://jenkins.io/doc/pipeline/steps/cloudfoundry/