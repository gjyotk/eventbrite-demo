import React from 'react';
import './Landing.css'; // Import CSS file

function Landing() {
  return (
    <div className="Landing">
      <Header />
      <div className="Content">
        <ExploreEvents />
        <div className="EventCards">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function EventSearchBar() {
  return (
    <div className="SearchBar">
      <div className="MagnifyingGlass">
        <span role="img" aria-label="Search">🔍</span>
      </div>
      <input type="text" placeholder="Search event" />
    </div>
  );
}

function LocationSearchBar() {
  return (
    <div className="SearchBar">
      <div className="MagnifyingGlass">
        <span role="img" aria-label="Search">🔍</span>
      </div>
      <input type="text" placeholder="Search location" />
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <img src="./assets/loggoo.png" alt="Logo" className="Logo" />
      <EventSearchBar />
      <LocationSearchBar />
      <div className="NavigationLinks">
        <div className="Link">Explore Events</div>
        <div className="Link">Liked Events</div>
      </div>
    </div>
  );
}


function ExploreEvents() {
  return (
    <div className="ExploreEvents">
      Explore an exciting range of Events
    </div>
  );
}

function EventCard() {
  return (
    <div className="EventCard">
      <img src="src/components/assets/Screenshot 2024-04-14 at 10.07.07 AM.png" alt="Event" className="EventImage" />
      <div className="EventDetails">
        <div className="EventTitle">Event Title</div>
        <div className="EventLocation">Event Location</div>
        <button className="RegisterButton">Register</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="Footer">
      eventbrite@2024
    </div>
  );
}

export default Landing;
