import React from 'react';
import './App.css';
import CardWrapper from './components/CardWrapper';
import ProjectCard from './components/ProjectCard';
import Navbar from './components/Navbar';
import rambler from './assets/rambler.png';
import par from './assets/pareporter.png';
import ltunes from './assets/ltunes.png'
import AboutMe from './components/AboutMe';
import Bottom from './components/Bottom';
import Skills from './components/Skills';

const makeListItems = array => {
  return array.map((item) => 
    <li>{item}</li>
  )
}

const ramblerFeatures = [
  'Powered by React',
  'Minimalist and intuitive user interface',
  'User-friendly login & registration using Google Sign-In', 
];

const parFeatures = [
  'User registration, login, and sessions using Passport.js',
  'Post in 8 different categories such as UFOs, Bigfoot sightings, and more!',
  'Tap into the moons energy by viewing the current phase on the homepage.'
]

const ltunesFeatures = [
  'Geolocate user to provide country location',
  'Find current top songs in supported countries',
  'Converts country value entered to ISO 3166 for API search'
]

const App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <CardWrapper>
        <ProjectCard
          title="Rambler Hiking App"
          thumbnailPath={rambler}
          thumbnailAlt="Rambler Image"
          text0="Search, save, complete, and plan future hikes from anywhere in the United States."
          text1="Add completed hikes to your Log to
          compare and contrast the elevation gains and distance; powered by react-vis."
          features={makeListItems(ramblerFeatures)}
          githubURL="https://github.com/dhens/Rambler"
          siteURL="https://gorambler.herokuapp.com"
        />
        <ProjectCard
          title="Paranormal Activity Reporter"
          thumbnailPath={par}
          thumbnailAlt="Paranormal Activity Reporter Image"
          text0="A Full-Stack forum with user accounts, categorized posting sections,
          and web sessions."
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
      <Skills />
      <Bottom />
    </div>
  );
}

export default App;
