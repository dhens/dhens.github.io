import React from 'react';
import './App.css';
import CardWrapper from './components/CardWrapper';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import rambler from './assets/rambler.png';
import par from './assets/pareporter.png';
import ltunes from './assets/ltunes.png'
import AboutMe from './components/AboutMe';

const makeListItems = array => {
  return array.map((item) => 
    <li>{item}</li>
  )
}

const ramblerFeatures = [
  'Powered by React',
  'Minimalist and intuitive user interface',
  'Simple OAuth Login & Registration using Google Sign-In', 
];

const parFeatures = [
  'User Sign-Up and Web Sessions using Passport',
  'Categorized posting sections',
  'Moon phase tracker'
]

const ltunesFeatures = [
  'Geolocate user to provide country location',
  'Find current top songs in supported countries',
  'Converts country value entered to ISO 3166 for API search'
]

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <CardWrapper>
        <ProjectCard
          title="Rambler Hiking App"
          thumbnailPath={rambler}
          thumbnailAlt="Rambler Image"
          text0="Search and Save hikes from anywhere in the United States."
          text1="Add hikes you want to go on to your Bucket List, and view your past accomplishments by adding completed hikes to your Log!"
          text2="Your Log will give you metrics to stack your hikes against eachother in elevation and distance."
          features={makeListItems(ramblerFeatures)}
          githubURL="https://github.com/dhens/Rambler"
          siteURL="https://gorambler.herokuapp.com"
        />
        <ProjectCard
          title="Paranormal Activity Reporter"
          thumbnailPath={par}
          thumbnailAlt="Paranormal Activity Reporter Image"
          text0="A Full-Stack forum with user sign-up and authentication, categorized posting sections,
          and web sessions."
          text1="View and Post from 8 seperate conspiracy topics including chem trails, bigfoot, and UFO sightings."
          features={makeListItems(parFeatures)}
          githubURL="https://github.com/dhens/Paranormal-Activity-Reporter"
          siteURL="https://intense-beach-33729.herokuapp.com/"
        />
        <ProjectCard
          title="Local Tunes"
          thumbnailPath={ltunes}
          thumbnailAlt="LocalTunes Image"
          text0="A MusixMatch API-powered app that finds the current top songs in a user specified country."
          text1=""
          features={makeListItems(ltunesFeatures)}
          githubURL="https://github.com/KindraKinney/Local-Tunes"
          siteURL="https://kindrakinney.github.io/Local-Tunes/"
        />
      </CardWrapper>
    </div>
  );
}

export default App;
