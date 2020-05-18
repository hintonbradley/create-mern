import React from 'react';
import './Instructions.css';

function Instructions() {
    return (
        <div className="intro landing-page">

            <div className="card card-light">
                <header className="header">App Architecture Relationship</header>
                <p className='indent'>The overall architecture and process of a MERN app</p>
                <ul className='indent'>
                    <li>When a user navigates in their browser to our domain, the server sends them back an HTML document and Javascript files that contain a React application. These files will be delivered by the React side of the application.</li>
                    <li>If a React component needs some data to render to the page, it will need to retrieve that data from a database (Mongo).</li>
                    <li>The database (Mongo) will hold all of the data for the application. This will hold all data on users, comments, posts, etc.</li>
                    <li>Since React will never talk directly to the database (Mongo), we need to build an API (Express) between React and our database in order to communicate between the two. The Express API will hold all of the business logic of our app. Express will take incoming requests from React, pull the information from the database (Mongo) and then send it back to the React so it can display content in the browser for the user.</li>
                    <li>The API and the frontend (React) will communicate via HTTP Requests (AJAX). Each and every request will contain JSON data.</li>
                </ul>
                <img className="img-xs" src={require('../img/appTechRelationships.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">Node vs. Express</header>
                <img className="img-xs" src={require('../img/nodeVsExpress.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">HTTP Request Process</header>
                <ul className='indent'>
                    <li>Whenever you run a server, it will be constantly listening for HTTP requests on a specific port.</li>
                    <li>Node is configured to listen for traffic that is attempting to access a specific port and captures the request/information that comes through via that port. </li>
                    <li>Node then passes off the request/information to Express since it makes handling HTTP requests easier.</li>
                    <li>Express then looks at the different route handlers that have been created, and when it finds the correct one, it passes it off to that route handler to handle the incoming request (aka, registering a user, adding a comment, etc).</li>
                    <li>Once Express retrieves the information from the database, a response will be generated and sent back to the running Node process.</li>
                    <li>Node will then respond to the incomming request (from React) with the response.</li>
                </ul>
                <img className="img-md" src={require('../img/httpRequestProcess.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">HTTP Requests Breakdown</header>
                <img className="img-lg" src={require('../img/getRequestBreakdown.jpg')} alt="test" />
            </div>

            <div className="card card-light">
                <header className="header">oAuth with Passport Flow</header>
                <img className="img-xl" src={require('../img/oauthPassport.jpg')} alt="test" />
                <p className="indent">One passport strategy is needed for each provider (Google, Facebook, Twitter, Github, etc.) Google + Facebook = 2 passport strategies</p>
                <img className="img-sm" src={require('../img/passportStrategy.jpg')} alt="test" />
            </div>

        </div>
    );
}

export default Instructions;