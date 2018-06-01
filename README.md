# Let's Write Code

All the code examples for the youtube series
[Let's Write Code](https://www.youtube.com/user/kylerobinsonyoung)

## Ideas?
If you have any screencast you'd like to see or suggestions, please
[open an issue here](https://github.com/shama/letswritecode/issues). Thanks!

## Dev Setup
Throughout these videos I typically use the same development environment. This
is a guide through that development setup.

### Dependencies
Rather than copying / pasting script tags into my HTML for 3rd party code, I use
[npm](https://www.npmjs.com/). The `npm` command comes with Node.js. When I run
`npm install jquery`, it downloads the 3rd party files into the `node_modules/jquery/`
folder.

The `package.json` file can hold those dependencies and versions, so the next
time you want to install those files, run `npm install` in the same folder.

### Build Tool
[Browserify](http://browserify.org/) is a tool that reads your JavaScript source
files and files you've installed with `npm`. Then outputs those files loaded in
the correct order to a single bundled file.

You can install the `browserify` command on your machine with: `npm install browserify -g`.

To create a bundled file, run `browserify index.js -o bundle.js`, where `index.js`
is the entry point to all your scripts.

In your `index.js` file, you can include other files with `require('./other.js')`
or a 3rd party file installed with `npm` by doing `require('jquery')`.

Once you have generated this `bundle.js` file, you can add a single script tag in
your HTML: `<script src="bundle.js"></script>` and host those assets like any
other HTML, JavaScript and CSS files.

### Dev Server
While rapidly developing, running the `browserify` command every time you make
a change in the code can get tedious. Also having to FTP, git push or some other
method to deploy the code to a server can slow your development down.

I use a tool called [budo](https://www.npmjs.com/package/budo) which runs a server
locally on your machine (`http://localhost:9966`) and automatically bundles your
code with Browserify as you refresh the page or live as you make changes if you
have the `--live` option on.

Install the `budo` command with: `npm install budo` and run the server with:
`budo index.js`. Now you can rapidly develop the code by viewing `localhost:9966`.

For convenience, I add the `budo` command to the `scripts` section of my
`package.json`:

```json
{
  "scripts": {
    "start": "budo index.js:bundle.js"
  }
}
```

Now I only need to run `npm start` to start developing code.

### Deployment
After you're done developing the code, run `browserify index.js -o bundle.js` to
create your JavaScript bundle. Add the script tag to your HTML:
`<script src="bundle.js"></script>` to load that JavaScript file.

Then upload those files to your remote server. Either via FTP/SFTP,
[`git` deploying](https://www.youtube.com/watch?v=9qIK8ZC9BnU),
[heroku](https://devcenter.heroku.com/categories/deployment),
[firebase](https://firebase.google.com/docs/hosting/deploying) or whatever method
you normally use to deploy your website.
