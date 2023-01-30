# React Firebase File Uploader
This project was created using Vite which is pretty amazing when creating a new React project. The flexibility that Vite gives us out the box is quite impressive. 
What we can do is choose various options but feel free to read the documentation on thier site [Vite Next Generation Frontend Tooling](https://vitejs.dev/)

We also will be using Google Firebase for the storage of the files. [Google Firebase Documentation](https://firebase.google.com/docs?gclid=Cj0KCQiAz9ieBhCIARIsACB0oGJZV0hb_B5jMskCtdrXHMliloWFi_tLb2e0dUG0jKEK8rWCHAZ8nkIaApgsEALw_wcB&gclsrc=aw.ds)

There will be a few packages that we need to install which are the following that I installed via `yarn` the usage of `npm` can also be applied and is a matter of personal preference. 
- firebase, and uuid

In the terminal just do the following to scaffold a new project with the following requirements.
- Node JS is needed
- Vite
- uuid

___


## Creating the new project with the above requirements that are needed from the terminal all we need to do is this.
- Create a new directory where you would like to store the project
- `mkdir directory name of your choise` cd into that new directory running the following commands below
- `yarn create vite` (name your project the way that you’d like)
- `yarn add firebase uuid` (package needed for firebase and unique id’s)
- `yarn dev` (starts development on the local server)
Once the project is up and running we will need to go to tGoogle Firebase with a valid account and login
- Create a new project if one exists or Go to the console where your projects are all stored

Best practice to hiding API keys would recommend using a dot env file and then add the config key but you can also hide the `firebase.js` file just the same. 
It has been a while since I've worked with Firebase so accessing the way I used wasn't quite as straight forward so hiding the whole firebase file was the easier lift. 

___
## Google Firebase configuration setup
Google Firebase Storage
To use storage we wil click on the left side bar and look for the `Build` option. This will expand a list of options. Focusing on the Storage option, click on the option and the dashboard for storage is given which should looko similar to the image below. 

Google Firebase Workflow
![file-uploader-w-firebase](https://user-images.githubusercontent.com/5911897/215367857-afa563c7-ba09-4ed6-9c1b-873bc55d657d.PNG)

___

We need to set the permissions using the production options as the choice (you can use test if you like) and then select the appropriate region that is nearest to you.
This will take a bit to spin up for us and once this has successfully completed we are taken to a new view with other options.
Creating a new Firebase Project
![firebase-project-screen-shot](https://user-images.githubusercontent.com/5911897/215367950-6387d8fb-bd6a-47b4-adcb-0ea121104578.PNG)

___

Selecting storage permissions
![uploader-storage-permissions](https://user-images.githubusercontent.com/5911897/215368012-4de2bb53-17b3-4938-927b-ac6f5ba90ad2.PNG)

___

Selectiong Cloud Storage location
Looking at the second option for `Rules` we will need to change line 5 from `false` to `true`. What this is accomplishing is the ability to allow third party apis to be called to store files for an authenticated user. Clicking on Publish to complete this change. I am using `us-west2` as my choice. 
Selecting Storage Location
![uploader-cloud-storage-location-setting](https://user-images.githubusercontent.com/5911897/215368058-9000b489-dd5c-4ef9-af86-3e331fe6849f.PNG)

Now that we have that set above let’s just make sure that we know what is occurring behind the scenes.
We have setup a production so tht we don’t forget about testing needing update
Our region is set and once that has occurred we can’t change that
Don’t panic if you clicked really quick just delete the project and start again
After the Cloud storage has been created for us the rule set needs to be updated
This allows for authenticated users being able to read and write files to storage

___

We will need to create a new Google Firebase file at the root of our prject or where you feel makes the most sense. 
In that file it should look something similar to this once you have published your newly created project. 
```import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your API Key will be here",
  authDomain: "react-file-uploader-d64aa.firebaseapp.com",
  projectId: "react-file-uploader-d64aa",
  storageBucket: "react-file-uploader-d64aa.appspot.com",
  messagingSenderId: "1088190352389",
  appId: "1:1088190352389:web:79d15550fb54a582a8e06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
```
___

Hiding our API Key
We need to create a git init file for our project and in this file set the defaults. In our project we can do one of the following:
- Import the package for dotenv and then add a new const in that file
- We will then have to require that file to be used inside of the Firebase js file

We can also just do the easier thing to just add the `firebase.js` file to our `gitignore` file save and then in the left side of our file structure it will be light grey and we are good to go. 

___

Start your dev server with the project and it should look something like this but different with images that were chosen for upload by you. 
We aren't deleting files here as we can do that inside of Google Firebase, this was just a quick and dirty aproach to working with Google Firebase hopefully you like it cheers and happy coding. 

Project up and running in the browser
![firebase-project-screen-shot](https://user-images.githubusercontent.com/5911897/215368932-ad39c859-aa18-461f-b6bf-63920f8463ee.PNG)

___
Accessibility check to ensure we are following guide lines set by [WCAG Documentation](https://www.w3.org/WAI/standards-guidelines/wcag/)

![react-file-upload-a11y-test-results](https://user-images.githubusercontent.com/5911897/215369868-e0f677dd-9d1b-4898-b65e-c60ab620e588.PNG)




