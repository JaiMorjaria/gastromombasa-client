import { Paper, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import React from 'react';
import Firoz from '../../images/img-1.jpg'

function About() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
  const data = [
    {
      title: "Education",
      text: "I graduated with my undergraduate degree from Istanbul University, followed by my postgraduate degree in Internal Medicine from the University of Nairobi. I obtained my fellowship training in Gastroenterology from the university of Witwatersrand in South Africa.",
    },
    { title: "Skills & Experience", 
      text: "I have been treating gastrointestinal conditions since 2005. I am able to treat gastrointestinal and liver diseases and perform advanced diagnostic and therapeutic endoscopies and colonoscopies. I visit all major hospitals in Mombasa and do gastroenterology consultations at the Aga Khan hospital. I am a honorary lecturer at the ECSACOP postgraduate program.",
    },
    { title: "Professional Society Membership", 
      text: "",
      data: ["Gastroenterology society of Kenya", "American Gastroenterology Association", "Kenya Association of Physicians"]
    },
    { title: "Gastrointestinal conditions", 
      text: "These are disease conditions that present themselves with symptoms such as bloating, heartburn, abdominal pain, constipation, jaundice etc. Some of the gastrointestinal diseases I treat include:",
      data: ["Peptic ulcers", "Irritable bowel syndrome", "Inflammatory bowel disease", "Colon cancer", "Hepatitis"]
    },
    {title: "Location",
     text: "The clinic is located at The Mombasa Hospital, Suite 5 and is open from 9pm to 5pm."
  }
  ];
  

  const Paragraph = (props) => {
    return (
      <div>
        <h2 style={{ color: "#f36e61" }}>{props.title}</h2>
        <hr />
        <div>{props.text}</div>
        {typeof props.data !== "undefined"
          ? props.data.map((data) => <li>{data}</li>)
          : null}
      </div>
    );
  };
  
 
    return (
    
      <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', height: '100vh' }}>
        <div style={{ textAlign: "center", paddingTop: 100}}>
            <div style={{paddingLeft: 80}}>
              <h1 style={{whiteSpace: 'nowrap', paddingBottom: '10px'}}>About Dr. Firoz Alimohamed</h1>
            </div>
            <div style={{ display: "flex", flexDirection: isMatch ? "column" : "row", alignItems: 'center', justifyContent:'center', width: isMatch ? 600 : 1000, gap:30}}>
              <img src = {Firoz} alt="Dr. Firoz"/>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                {data.map((para) => {
                  return (
                    <div
                      style={{  
                        textAlign: 'justify'
                      }}
                    > 
                    <Typography>
                      <Paragraph
                      title={para.title}
                      text={para.text}
                      data={para.data}
                    />
                    </Typography>
                    </div>
          
                  );
                })}
              </div>
              </div>
            </div>
          </div>
    );
  }


export default About;