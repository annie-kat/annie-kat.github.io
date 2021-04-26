annie-kat.github.io

Used this tutorial 
https://blog.logrocket.com/using-react-in-web-games/

How to deploy React App to GitHub Pages 
https://create-react-app.dev/docs/deployment/#github-pages

Notes on client-side routing: https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing
GitHub Pages doesn’t support routers that use the HTML5 pushState history API under the hood (for example, React Router using browserHistory). 
Alternatives:
1. use hashHistory
    https://stackoverflow.com/questions/46016415/wheres-hashhistory-in-react-router-v4 says:
    "Use a HashRouter. They got rid of individual histories such as browserHistory and hashHistory and instead replaced them with BrowserRouter and HashRouter components respectively in React Router v4"
    https://reactrouter.com/web/api/HashRouter
2. use 404.html to redirect
