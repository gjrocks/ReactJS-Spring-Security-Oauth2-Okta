### How to run

- 
 To get all the dependencies  run :`$ npm install `. This react project has webpack configured. To run the application using the webpack dev server use the command:  
 `$ npm run wstart` 
- It is a SPA, I have added a express server script: `myapp.js` , you can build the prod version with the `npm run build:prod`. 
- To run the express server, please use the command : `node myapp.js --env=dev`
- Please make sure that you start the oauth2 server from this repository. https://github.com/gjrocks/ReactJS-Spring-Security-Oauth2-Okta/tree/master/oauth2-jwt-server
- The application will start at http://localhost:8089