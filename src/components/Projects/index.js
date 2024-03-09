import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider, ProjectCardContainer } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects" >
      <Wrapper>
        <Title data-aos="flip-left" data-aos-duration="2000" >Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEBSITE PROJECTS</ToggleButton> :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEBSITE PROJECTS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer data-aos="flip-up" data-aos-duration="3000">
          {toggle === 'all' && projects.map((project, index) => (
            <ProjectCardContainer key={index}>
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            </ProjectCardContainer>
          ))}
          {projects.filter((item) => item.category === toggle).map((project, index) => (
            <ProjectCardContainer key={index}>
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            </ProjectCardContainer>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects;
