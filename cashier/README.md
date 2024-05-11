# CASHIER APP V0.2
Logiciel de caisse simple d'utilisation, destiné à être ajouté à une app plus technique.

## Orienté composant bouton de caisse :
Possibilité pour l'utilisateur d'ajouter un bouton de caisse, automatisation du placement du bouton dans l'app.
Tout le sysyème est basé sur les boutons. 


# USERS :

Datas : 
    Dans cette version d'essai, une base de données fictive a été créée sous forme de tableau d'utilisateurs, dans le fichier teamDatas.js.
    Chaque utilisateur possède les données suivantes : 
        .ID : les id utilisateurs commencent toutes par 'OOO'. Les trois numéros suivants ('xxx'), désigne le point de vente auquel l'utilisateur est rattaché. Enfin les toris numéros suivants désigne son numéro personnel.
        .Name : contient le nom et le prénom de l'utilisateur renseigné lors de son inscription.
        .UserName : contient le nom choisi par l'utilisateur, qui sera utilisé par l'app pour le nommer.
        .ProfilePicture : La photo de profil fournit par l'utilisateur (le nom de la photo de profil est alignée sur l'id utilisateur).
        .Title : La position occuppé par l'utilisateur dans la société, lui donnant accès ou restriction à certaines fonctionnalités.
        .Mail : "BruceWayne@cashier.com",
        .Password : le code secret de connexion de l'utilisateur.
        .Pin : un code secret de 4 chiffres, qui sera demandé à l'utilisateur afin de confirmer son accès à certains services.
        .StartDate : renseigne le jour d'inscription de l'utilisateur.

Tableaux : 
    allUsers = [];
    loggedInUsers = [];
    checkedOutUsers = [];
    
Composants :
    ConnexionForm
    UserList
    UserBoarder
    UserProfile


# ID : 
Les id débutant par '000' désigne un utilisateur.
Le chiffre suivant désigne le statut de l'utilisateur: 
1 Owner
2 Franchisé
3 Manager
4 Employee

Les id débutant par '555' désigne un produit.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
