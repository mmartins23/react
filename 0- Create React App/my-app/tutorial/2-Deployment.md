# Deployment
npm run build creates a build directory with a production build of your app. Set up your favorite HTTP server so that a visitor to your site is served index.html, and requests to static paths like /static/js/main.```<hash>```.js are served with the contents of the /static/js/main.```<hash>```.js file. For more information see the production build section.

## Building for Relative Paths
By default, Create React App produces a build assuming your app is hosted at the server root.

To override this, specify the homepage in your package.json, for example:
```
  "homepage": "http://mywebsite.com/relativepath",
  ```
  
This will let Create React App correctly infer the root path to use in the generated HTML file.