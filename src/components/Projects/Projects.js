import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import moviedeck from "../../Assets/Projects/moviedeck.png";
import mealplanner from "../../Assets/Projects/mealplanner.png";
import pokemoncard from "../../Assets/Projects/pokemoncard.png";
import BeyoungClone from "../../Assets/Projects/BeyoungClone.png";
import AmazonMusicClone from "../../Assets/Projects/AmazonMusicClone.png";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BeyoungClone}
              isBlog={false}
              title="Beyoung Shopping"
              description="Dive into curated collections, effortless browsing, and quick checkout. Your style journey personalized with user login
               perks and responsive design for fashion fixes. Elevate your wardrobe with just a click at Beyoung.Seamless and enjoyable user experience
                for effortless browsing and purchasing. Visually appealing and responsive across devices, Streamlined shopping cart 
                and checkout process for a smooth journey from selection to purchase."
              hostLink="https://chimerical-dasik-3f7eba.netlify.app/"
              githubLink="https://github.com/ShashidharReddyT/Beyoung---React-Project-2---yxpa71cax49z"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AmazonMusicClone}
              isBlog={false}
              title="Amazon Music"
              description=" Amazon Music: Elevate your music experience with a user-friendly interface, dynamic recommendations, easy search, diverse genres,
               and hassle-free login. Unleash the power of personalized audio exploration.User  login app and discover the most popular music, also can add the songs to favourites list.
               Easy search functionality and diverse discovery options for finding new music.Intuitive design for seamless navigation & effortless music exploration."
              hostLink="https://amazon-music-clone-react-project-1-ybxi8hzrv99f.vercel.app/"
              githubLink="https://github.com/ShashidharReddyT/Amazon-Music-Clone---React-Project-1---ybxi8hzrv99f"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemoncard}
              isBlog={false}
              title="Pokemon Card"
              description="The Pokémon Card Collection project is an engaging web application that allows users to immerse themselves in the world
              of Pokémon. With a user-friendly interface and interactive features, this application enables users to build and manage their own 
              collection of Pokémon cards. Whether you're a dedicated Pokémon trainer or just starting your journey, this platform offers an 
              exciting way to explore, trade, and learn about your favorite Pokémon."
              hostLink="https://pokemonkingdom-58kp.onrender.com/"
              githubLink="https://github.com/ShashidharReddyT/pokecard"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviedeck}
              isBlog={false}
              title="Movie Deck"
              description="Movie Deck is a dynamic and user-friendly web application that allows users
               to explore and interact with a vast collection of movies. The application fetches movie data from 
               an external API (movieDB) and presents it in an intuitive and visually appealing manner.
               With an elegant retro-style arcade design, users can search for movies, sort them based on release date or ratings,
                and even create a personal favorite list."
              hostLink="https://shashidharreddyt.github.io/javascriptprojectmd/"
              githubLink="https://github.com/ShashidharReddyT/javascriptprojectmd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealplanner}
              isBlog={false}
              title="Meal Planner"
              description="The Meal Planner Web Application is a user-friendly and efficient tool designed to help users
              manage their daily meal planning. This application allows users to input their personal information, 
              such as weight, height, age, gender, and physical activity level, to calculate their daily calorie requirements. The application 
              generates personalized meal plans consisting of breakfast, lunch, and dinner options to user's 
              specific caloric needs."
              hostLink="https://shashidharreddyt.github.io/javascriptprojectmealplan/"
              githubLink="https://github.com/ShashidharReddyT/javascriptprojectmealplan"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
