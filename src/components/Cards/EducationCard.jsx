import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color:white;
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    background-color:#104718;
    box-shadow: #104718 0px 4px 24px; /* Magenta box shadow */
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid ##051e08;

    &:hover {
        box-shadow: 10px 10px 30px #FFD700, -10px -10px 30px aquamarine; /* Yellow and Magenta shadow */
        transition: all 0.4s ease-in-out;
        filter: brightness(1);
        transform: scale(1.05);
    }

    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: white;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: white;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color:white;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: white;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    );
};

export default EducationCard;

