import React from 'react';
import './Instructions.css';

function Instructions() {
    return (
        <div className="instructions landing-page">
            
            <div className="card card-light">
                <header className="header">npm Setup</header>
                <img className="img-xs" src={require('../img/npmSetup.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Set up index.js file</header>
                <img className="img-md" src={require('../img/setUpIndexJs.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Nodemon</header>
                <p className="indent">Install Nodemon:</p>
                <ul className="indent">
                    <li>$ npm i --s nodemon</li>
                </ul>
                <p className="indent">Add a script in the package.json file to run nodemon.</p>
                <p className="indent">In your terminal, start up Nodemon to have the server constantly listen:</p>
                <ul className="indent">
                    <li>$ npm run dev</li>
                </ul>
            </div>

            <div className="card card-light">
                <header className="header">Start your server</header>
                <p className="indent">Go to the following url:</p>
                <p className="indent">http://localhost:5000</p>
                <img className="img-xs" src={require('../img/viewRunningServer.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">package.json Scripts</header>
                <img className="img-xs" src={require('../img/packageJsonScripts.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">.gitignore File</header>
                <img className="img-sm" src={require('../img/gitignore.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Set up Git</header>
                <img className="img-sm" src={require('../img/gitSetUp.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Push git</header>
                <p>Push code to github:</p>
                <p>$ git push origin master</p>
            </div>

            <div className="card card-light">
                <header className="header">Create Heroku App</header>
                <p className="indent">In terminal, sign into heroku:</p>
                <ul className="indent">
                    <li>$ heroku login</li>
                </ul>
                <p className="indent">In your app root directory, create a heroku app:</p>
                <ul className="indent">
                    <li>$ heroku create *app-name*</li>
                </ul>
                <p className="indent">Push your code to Heroku:</p>
                <ul className="indent">
                    <li>$ git push heroku master</li>
                </ul>
                <p className="indent">View your app on Heroku:</p>
                <ul className="indent">
                    <li>$ heroku open</li>
                </ul>
                <p className="indent">View your heroku logs to troubleshoot errors:</p>
                <ul className="indent">
                    <li>$ heroku logs</li>
                </ul>
            </div>

        </div>
    );
}

export default Instructions;