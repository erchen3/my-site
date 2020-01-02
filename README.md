This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Personal Notes
  My project leveraged multiple pages with react and getting it to deploy was a bit troublesome but the instructions will be listed below as to how to get that done in case you forget or for anyone else. Assuming you've done the initial set-up process  using create-react-app, it should look like this first. Note my-app is an ARBITRARY name, left for you to name.
  ```
  npm init react-app my-app
  cd my-app
  ```
 Now after going into the folder, create a new git repository.
 
 ```
 git init
 ```
 Then what you want to do is call the command below which essentially is responsible for helping you deploy properly.
 ```
 heroku create my-app --buildpack mars/create-react-app
 ```
 Then stage all files in the current directory (Should be in the the folder of your react applcication).
 ```
 git add .
 ```
 Then you want to save your changes to a local repository. I recommend the -m option for the sake of having some description.
 
 ```
 git commit -m "React application to be deployed onto Heroku."
 
 
 
 ```

Then you want to push to the remote repo 'heroku'. This step essentially will finish your deploying.

```
git push heroku master
```
To view your application go to your specified link or call this command below.
```
heroku open
```

### Making Edits to your React Application

So now your React application is deployed and we might want to keep working on it. You can easily do so on whatever environment that you choose. When the time is ready simply stage the files you want to.

```
 git add <Some File you want to stage>
```
Then save your changes to the local repo.
```
git commit -m "Some new change"
```
Lastly, push to the remote repo, essentially updating your React application. Once this step clears you can view the changes if they worked.
```
git push heroku master
```


I wrote out the steps so it would be easier to view above but credit belongs to the author's of the links provided below.
### Useful Links for me
1) https://github.com/mars/create-react-app-buildpack
2) https://coderwall.com/p/-oolga/how-to-update-your-heroku-app
