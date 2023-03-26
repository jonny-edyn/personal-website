---
title: My top tracks this month
date: "2023-01-02T22:12:04.284Z"
description: "I'm working on using the spotify API to call the last 50 tracks I've been listening to on spotify and create a list. This is a work in progress and something I hope to have completed by end of January 23."
---

I'm working on using the spotify API to call the last 50 tracks I've been listening to on spotify and create a list. This is a work on progress and something I hope to have completed by end of January 23. Below is hard coded by acts as a wireframe to build from. 

| Number | Artist               | Track| Year | 
| :----- | :------------        | :--- | -----: |
| 1      | Common & PJ        | What do you say move it baby | 2020
| 3      | Harry Potters        | 2004 |


I asked Chat GPT to tell me how do this. Answer below:


How do I get my Spotify recent plays to show on my personal website?

You can display your Spotify recent plays on your personal website by using the Spotify Web API. Here are the general steps to follow:

Register an application with Spotify:
To access the Spotify Web API, you need to register an application on the Spotify Developer Dashboard. This will give you access to the client ID and client secret that you need to authenticate your requests.

Get an access token:
Once you have registered your application, you need to get an access token to make requests to the Spotify Web API. You can get an access token by following the Authorization Code Flow, which involves redirecting the user to a login page to authorize your application and then exchanging the authorization code for an access token.

Make a request to the Spotify Web API:
Once you have an access token, you can make requests to the Spotify Web API to retrieve your recent plays. You can use the /me/player/recently-played endpoint to get a list of the tracks you have recently played.

Display your recent plays on your website:
You can then display your recent plays on your website using HTML and CSS. You can use JavaScript to make an AJAX request to the Spotify Web API and retrieve the data, and then use the retrieved data to populate an HTML template.

It's worth noting that there are some restrictions on the use of the Spotify Web API, such as limiting the number of requests you can make per day. You should also make sure to follow Spotify's branding guidelines when displaying their content on your website.


Can you write me the code to do this in js?
Sure! Here's an example of how you can use JavaScript to retrieve your recent plays from the Spotify Web API and display them on your website:

js
Copy code
// Set your access token
const accessToken = 'YOUR_ACCESS_TOKEN';

// Make an AJAX request to the Spotify Web API
fetch('https://api.spotify.com/v1/me/player/recently-played', {
  headers: {
    'Authorization': 'Bearer ' + accessToken
  }
}).then(response => {
  return response.json();
}).then(data => {
  // Parse the response data
  const recentPlays = data.items.map(item => ({
    name: item.track.name,
    artist: item.track.artists[0].name,
    image: item.track.album.images[0].url
  }));

  // Create an HTML template for the recent plays
  const html = recentPlays.map(play => `
    <div class="recent-play">
      <img src="${play.image}" alt="${play.name}">
      <div class="info">
        <p class="name">${play.name}</p>
        <p class="artist">${play.artist}</p>
      </div>
    </div>
  `).join('');

  // Display the recent plays on the website
  document.querySelector('#recent-plays').innerHTML = html;
}).catch(error => {
  console.error(error);
});
In this code, you first set your access token to authenticate your request to the Spotify Web API. You then use the fetch() function to make an AJAX request to the /me/player/recently-played endpoint, passing in your access token in the Authorization header.

Once you receive a response from the API, you parse the response data into an array of objects that contain the name, artist, and image URL of each recent play. You then use this data to generate an HTML template for the recent plays, and insert the template into a specific element on your website (identified by the #recent-plays selector).

Note that in this example, I assumed that you have a div element on your website with an id of recent-plays where you want to display the recent plays. You may need to adjust the code to fit your specific HTML structure.




Jonny Bottomley
Create the above again for gatsby 
Sure! Here's an example of how you can use Gatsby and React to retrieve your recent plays from the Spotify Web API and display them on your Gatsby site:

First, install the gatsby-plugin-sass and node-fetch packages using the following command:
sql
Copy code
npm install gatsby-plugin-sass node-fetch
Create a gatsby-config.js file in the root of your project and add the following plugin configuration:
js
Copy code
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass')
      }
    }
  ]
}
This enables the gatsby-plugin-sass plugin for Gatsby and configures it to use the sass implementation.

Create a new component called RecentPlays (e.g., src/components/RecentPlays.js) and add the following code:
jsx
Copy code
import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import './RecentPlays.scss';

const RecentPlays = () => {
  const [recentPlays, setRecentPlays] = useState([]);

  useEffect(() => {
    const getRecentPlays = async () => {
      const accessToken = 'YOUR_ACCESS_TOKEN';
      const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      const tracks = data.items.map(item => ({
        name: item.track.name,
        artist: item.track.artists[0].name,
        image: item.track.album.images[0].url
      }));
      setRecentPlays(tracks);
    };

    getRecentPlays();
  }, []);

  return (
    <div className="recent-plays">
      {recentPlays.map(play => (
        <div className="recent-play" key={play.name}>
          <img src={play.image} alt={play.name} />
          <div className="info">
            <p className="name">{play.name}</p>
            <p className="artist">{play.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPlays;
In this code, you first import the required packages (React, useState, useEffect, node-fetch, and a Sass stylesheet for styling). You then create a functional component called RecentPlays that fetches your recent plays from the Spotify Web API and stores them in the component state using the useState() hook.

The useEffect() hook is used to fetch the recent plays when the component mounts (i.e., on page load). The fetch() function is used to make a request to the /me/player/recently-played endpoint, passing in your access token in the Authorization header. Once you receive a response from the API, you parse the response data into an array of objects that contain the name, artist, and image URL of each recent play. You then use this data to generate a list of div elements that display each recent play's information.

Finally, you export the RecentPlays component for use in your Gatsby site.

Import the RecentPlays component in a page or layout component (e.g., src/pages/index.js) and add it to your page layout:
jsx
Copy code
import React from 'react';
import RecentPlays from '../components/RecentPlays';

const IndexPage = () => {
  return (
    <div>
      <h1>My Recent Plays</h1
