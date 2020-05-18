import React from 'react';
import './Instructions.css';

function GoogleAuth() {
    return (
        <div className="google-auth landing-page">
            
            <div className="card card-light">
                <header className="header">Install passport and the passport strategy.</header>
                <p className="indent">In terminal, install passport and a passport strategy (for google):</p>
                <ul className="indent">
                    <li>$ npm i --s passport passport-google-oauth20</li>
                </ul>
            </div>

            <div className="card card-light">
                <header className="header">Install passport and the passport strategy.</header>
                <p className="indent">Import them into the index file and create an instance of the strategy.</p>
                <img className="img-sm" src={require('../img/importPassportAndStrategy.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Google oAuth Project Setup</header>
                <img className="img-xs" src={require('../img/googleAuthSetup1.jpg')} alt="test" />
                <img className="img-md" src={require('../img/googleAuthSetup2.jpg')} alt="test" />
                <img className="img-md" src={require('../img/googleAuthSetup3.jpg')} alt="test" />
                <img className="img-sm" src={require('../img/googleAuthSetup4.jpg')} alt="test" />
                <img className="img-md" src={require('../img/googleAuthSetup5.jpg')} alt="test" />
                <img className="img-lg" src={require('../img/googleAuthSetup6.jpg')} alt="test" />
                <img className="img-lg" src={require('../img/googleAuthSetup7.jpg')} alt="test" />
                <img className="img-lg" src={require('../img/googleAuthSetup8.jpg')} alt="test" />
                <img className="img-lg" src={require('../img/googleAuthSetup9.jpg')} alt="test" />
                <img className="img-md" src={require('../img/googleAuthSetup10.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Adding Google Credentials</header>
                <p className='indent'>Create a "config" directory in your root directory and then add a keys.js file inside of it. After adding your Google client ID and Client Secret strings to this file, add this file to your .gitignore file so it won't be pushed up to github.</p>
                <img className="img-md" src={require('../img/keysJsFile.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Add Arguments for Passport</header>
                <p className='indent'>Import the keys.js file and add the clientID and clientSecret to the googleAuth instance config object.</p>
                <p className='indent'>Note: Make sure you use a specific name to distinguish between each strategy i.e. Facebook, Google, etc.</p>
                <img className="img-sm" src={require('../img/importKeys.jpg')} alt="test" />
                <p className='indent'>Then add redirect route for when after approval is given by user and google OAuth.</p>
                <img className="img-sm" src={require('../img/googleRedirect.jpg')} alt="test" />
                <p className='indent'>Then pass in the final argument for the passport method which is a method.</p>
                <img className="img-sm" src={require('../img/passportMethodArgument.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Creating Routes for Google oAuth</header>
                <p className='indent'>Create a route to handle login by Google (pre-authorization).</p>
                <p className='indent'>Note: The passport strategy is defined in passport library, and NOT by our code.</p>
                <img className="img-sm" src={require('../img/authGoogle.jpg')} alt="test" />
                <p className='indent'>Then create a callback to be called once Google Auth is approved. (post google auth)</p>
                <img className="img-xs" src={require('../img/googleCallback.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Refactoring Express</header>
                <img className="img-sm" src={require('../img/googleCallbackProfile.jpg')} alt="test" />
                <p className='indent'>console.log profile is:</p>
                <img className="img-xs" src={require('../img/logProfile.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Accessing User Profile</header>
                <p className='indent'>We access user profile through a parameter passed back in the callback method</p>
                <img className="img-lg" src={require('../img/refactorExpress1.jpg')} alt="test" />
                <img className="img-md" src={require('../img/refactorExpress2.jpg')} alt="test" />
                <img className="img-lg" src={require('../img/refactorExpress3.jpg')} alt="test" />
            </div>

        </div>
    );
}

export default GoogleAuth;