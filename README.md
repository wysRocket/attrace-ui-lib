## Publishing the Library
You now need to update your package.json file:
```
package.json 
{
  "name": "@YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/YOUR_GITHUB_USERNAME"
  }
  // ...
} 
```
Replace that code with your github username and repository name.

Here's what mine looks like:
```
package.json
{
  "name": "@wysrocket/attrace-ui-lib",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/wysRocket"
  }
  // ...
}
```
Important: Make sure to include the '@' symbol in the name but not in the registry

Now that we have configured our package.json with our package information, we need to configure our local install of NPM to to authorized to publish to your Github account. We need to create a .npmrc file.

This file is NOT PART OF YOUR PROJECT. This is a global file located in a central location.

For Mac/Linux: it's located at ~/.npmrc.

For Windows: it's located at C:\Users\{YOUR_WINDOWS USERNAME}\.npmrc.

Create the file if it doesn't exist and include the following information:
```
~/.npmrc
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```
Replace YOUR_GITHUB_USERNAME with your username. Make sure to include the leading '@' symbol.

The YOUR_AUTH_TOKEN needs to be replaced by your authorization token. Let's head back to Github.

Go to your Github profile: Settings -> Developer Settings -> Personal Access Tokens. Or just click this link.

Click "Generate new token".

Give it a name/note. Give it an expiry date. Give it the write:packages access value. This will give your token permission to read & write packages to your Github account.


dist folder files
When you're done, click "Generate token"

Copy the token. This is only shown once. Keep it in a safe location. If you lose it, you'll have to generate a new token.

Now go back to your .npmrc file and replace the YOUR_AUTH_TOKEN with the token from Github.

Your .npmrc file should look similar to this:
```
~/.npmrc
registry=https://registry.npmjs.org/
@wysrocket:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=
```
Now, in the root of your project, run the following command to publish your package:

npm publish
If you are prompted for a username/password, the username is your Github username and the password is your Github token

Congratulations! You have now published version 0.0.1 of your React component library! You can view the package by goin to your repository and clicking on your package name in the "Packages" section.


dist folder files
Using the Library
Our package is now live, let's use it!

Using our library is slightly different than using a normal npm package. Only those who are authorized can download and install your library. Your users will also need a .npmrc file. However, you can provide them with an token that has read access.

You can generate a new personal access token with the read:packages (not write) scope. Once generated, you can share that token with those that need to consume your library.

From here, we'll assume that your library consumers have set up their .npmrc file accordingly.

