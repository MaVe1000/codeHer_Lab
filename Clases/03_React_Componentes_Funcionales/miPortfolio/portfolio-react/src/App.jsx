import React from "react";
import Header from "./components/Header";
import ProfileImage from "./components/ProfileImage";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Skills";
import { profileData } from "./data/profileData";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header name={profileData.name} title={profileData.title} />

      <main className="main">
        <div className="hero">
          <ProfileImage
            src={profileData.profileImage}
            alt={`Foto de ${profileData.name}`}
          />

          <About description={profileData.description} />

          <SocialLinks links={profileData.socialLinks} />
        </div>

        <Skills
          softSkills={profileData.softSkills}
          hardSkills={profileData.hardSkills}
        />
      </main>
    </div>
  );
};

export default App;
