import React from "react";
import EventCard from "./components/EventCard";
import TestimonialCard from "./components/TestimonialCard";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import FooterSection from "./components/FooterSection";
import EventPoster from "./components/EventPoster";
import About from "./components/About";
import MemberCard from "./components/MemberCard";
import Contact from "./components/Contact";
import Team from "./components/Team";
import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ImageSlider />
      <hr />
      <div className="event-section">
        <h3 className="event-sec-head">Events</h3>
        <p className="upcoming-events">Upcoming Events</p>
        <EventCard
          data={{
            eventName: "Cyberverse 2025",
            eventImage:
              "https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            eventDate: "01 Jan 2025",
            eventTag: "annual-event",
            eventDesc:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem debitis aperiam dicta tempore aspernatur exercitationem quae? Optio voluptas ipsa repellendus placeat commodi rem molestias ",
          }}
        />
      </div>
      <hr />
      <div className="why-cybercell">
        <h3 className="why-cybercell-head">Why Cybercell?</h3>
        <p className="why-cybercell-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          corporis maxime mollitia hic tenetur sit totam ut exercitationem, eum
          laudantium optio earum fugit? Beatae nesciunt nisi iure excepturi eum
          totam dolorem molestiae! Labore earum sapiente sunt, officiis optio,
          obcaecati suscipit nulla minus laborum eos nemo distinctio provident
          non repellat quia libero veniam sint inventore tempora est
          consequuntur? Quae magni esse possimus, quibusdam molestias eum
          consequatur earum, natus nulla magnam quasi tenetur deleniti sequi
          eius exercitationem! Similique excepturi enim eveniet iste quisquam
          commodi dolor explicabo ullam, voluptatem ab consectetur, expedita,
          assumenda corrupti doloribus sit unde voluptatibus laborum voluptate
          ex velit minus impedit. Quae dignissimos numquam adipisci libero odit
          unde ullam voluptatem nemo placeat quos incidunt magni, deserunt amet
          dolores quaerat, nihil veniam dicta! Nam vitae eos autem fuga
          temporibus recusandae accusamus corporis ab odio doloremque non
          dolores, architecto animi minima nisi nihil, harum quaerat quos
          blanditiis cupiditate ipsa. Voluptatum, ipsum nostrum!
        </p>
      </div>

      <hr />

      <TestimonialCard />
      <hr />
      <FooterSection />
      {/* <EventPoster />
      <About />
      <MemberCard />
      <Contact />
      <Team /> */}
    </React.Fragment>
  );
};

export default App;
