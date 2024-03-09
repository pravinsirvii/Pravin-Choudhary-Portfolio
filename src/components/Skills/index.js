import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: linear-gradient(to top, #800000 0%, #fd701d 100%);
  
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  color:white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background: rgb(65 3 3);
    border: 0.1px solid #cc6600;
    box-shadow: rgb(212 218 42 / 50%) 0px 4px 24px;/* Magenta box shadow */
    border-radius: 16px;
    padding: 18px 36px;
    margin-bottom: 56px;
    transition: all 0.4s ease-in-out; /* Add transition for smoother effect */

    &:hover {
        transform: scale(1.05);
        box-shadow: 10px 10px 30px #FFD700, -10px -10px 30px #FF4500, rgba(255, 0, 255, 0.5) 0px 6px 20px; /* Adjusted box shadow on hover */
    }

    @media (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }
    @media (max-width: 500px) {
        max-width: 330px;
        padding: 10px 36px;
    }
`;


const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color:white;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title data-aos="zoom-in" data-aos-duration="2000">Skills</Title>
        <Desc>Here are some of my skills on which I'm currently working.</Desc>
        <SkillsContainer data-aos="zoom-out" data-aos-duration="2000">
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle data-aos="zoom-out" data-aos-duration="2000">{skill.title}</SkillTitle>
              <SkillList data-aos="slide-up" data-aos-duration="1000">
                {skill.skills.map((item, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
