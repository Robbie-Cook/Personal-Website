/* Imports */
import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

/* Components */
import { Heading, Text } from "../components/Typography"
import WebPage from "../components/Page"
import Section from "../components/Section"
import Spacer from "../components/Spacer"
import { MobileView } from "../components/Views"

/* Stylesheets etc. */
import "../fontawesome/css/all.css"

/* Media */
import me from "../photos/me_irl3_cropped.jpg"
import avatarMe from "../photos/avatarMe.svg"

/* Theme */
import Globals from "../components/Globals"

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  & .icon {
    font-size: 33px;
    padding: 0 4px;
    height: 100%;
  }

  & .iconWrapper2 {
    background-color: #2a2a2a;
    height: 100%;
    border-radius: 5px;
    padding: 0 5px 0 0;
  }

  & .iconWrapper2 a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  @media (max-width: ${Globals.mobile.size}px) {
    justify-content: center;
  }
`

// Main Page component
class HomePage extends Component {
  render() {
    const MainInfo = styled.div`
      margin: auto 0 auto 20%;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      z-index: 2;
      ${new MobileView(`
        & * {
          align-self: center
        }
        
        justify-content: center;
        text-align: center;
        margin: 50px 20px 70px 20px;
        min-width: auto;
        background-color: ${Globals.page.backgroundColor};
        padding: 0 15px;
      `)}

      & .iconWrapper {
        ${new MobileView(`justify-content: center;`)}
      }
    `

    const BackgroundImageWrapper = styled.div`
        background-image: url('${me}');
        ${
          // Don't display background image on mobile -- display mobile-specific image instead
          new MobileView(`
            background-image: none;
          `)
        }
        width: 100%;
        background-repeat: no-repeat;
        display: flex;
        background-position-x: 120%;
        background-position-y: 50%;
        background-size: contain;
    `

    const BackgroundGradientWrapper = styled.div`
      background: linear-gradient(
        to right,
        ${Globals.page.backgroundColor} 80%,
        rgba(255, 244, 244, 0) 100%
      );

      padding-right: 80px;
      display: flex;

      ${new MobileView(`
        padding: 0;
        background: none;
        width: 100%;
        justify-content: center;
       `)}
    `

    const HeaderImage = styled.img`
      display: none; 
      ${};
    `

    return (
      <WebPage style={{ padding: "0" }}>
        <Section>
          <BackgroundImageWrapper>
            <BackgroundGradientWrapper>
              {/* HeaderImage only displayed on mobile (defined in definition) */}
              <HeaderImage src={avatarMe} /> 
              <MainInfo>
                <Heading style={{ margin: 0 }} codify>
                  Robbie Cook
                </Heading>
                <Text>
                  Hello! I'm a developer living in Auckland, New Zealand. I love
                  coding, making stuff, learning, and teaching.
                  <Spacer height="10px" />
                  Check out my <Link to="/about">About</Link> page to find out
                  more :)
                </Text>
                <IconWrapper>
                  <a href="https://github.com/Robbie-Cook">
                    <i class="icon fab fa-github-square" />
                  </a>
                  <a href="https://www.linkedin.com/in/robbie-cook/">
                    <i class="icon fab fa-linkedin" />
                  </a>
                  <div class="iconWrapper2">
                    <a href="mailto:robbie@robbie.pw">
                      <i class="icon fas fa-envelope-square" />
                      <span>robbie@robbie.pw</span>
                    </a>
                  </div>
                </IconWrapper>
              </MainInfo>
            </BackgroundGradientWrapper>
          </BackgroundImageWrapper>
        </Section>
      </WebPage>
    )
  }
}

export default HomePage
