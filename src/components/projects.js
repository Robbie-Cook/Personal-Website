import React, { Component } from "react"
import styled from "styled-components"
/* Theme */
import Globals from "../components/Globals"
import { Github, Link as GrommetLink } from "grommet-icons"
import { Heading, Text } from "../components/Typography"

/*
Component representing a project

Example usage:
<ProjectBox title="My title">
    <Icon />
    <p>My description</p>
    <ProjectLink to="mypage.html" text="Check out my page">
        <Icon />
    </ProjectLink>
</ProjectBox>
*/
class ProjectBox extends Component {
  render() {
    const ProjectBox = styled.div`
      border: 2px solid #dcd6ce;
      border-radius: 5px;
      padding: 20px;
      background-color: #3c3c3c;
      max-width: 600px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;

      &:nth-child(odd) {
        margin-right: 31px;
      }

      // Responsive design queries
      @media (max-width: 1200px) {
        margin-right: 0 !important;
      }


    `

    const ProjectDescriptionAndImageWrapper = styled.div`
      display: flex;

      // Responsive design queries
      @media (max-width: 600px) {
        flex-direction: column;
      }
    `

    const ProjectTitle = styled.h3`
      margin-top: 0;
      margin-bottom: 0;
    `
    const ProjectDescription = styled.p`
      max-width: 360px;
      margin-right: 20px !important;
    `

    const ProjectImage = styled.div`
      width: auto;
      height: auto;

      & img {
        max-height: 113px;
      }
    `

    const ProjectButton = styled.div`
      margin-top: auto;
    `

    function getGithubLink(link) {
      if (link !== undefined) {
        return <ProjectGithubLink to={link} />
      }
    }

    function getWebLink(link) {
      if (link !== undefined) {
        return <ProjectWebLink to={link[0]} text={link[1]} />
      }
    }

    return (
      <ProjectBox>
        <ProjectTitle>{this.props.title}</ProjectTitle>
        <ProjectDescriptionAndImageWrapper>
          <ProjectDescription>{this.props.desc}</ProjectDescription>
          <ProjectImage>
            <img src={this.props.image} />
          </ProjectImage>
        </ProjectDescriptionAndImageWrapper>
        <ProjectButton>
          {getGithubLink(this.props.githubLink)}
          {getWebLink(this.props.webLink)}
          {this.props.children}
        </ProjectButton>
      </ProjectBox>
    )
  }
}

// Links which sit at the bottom of a project.
// Can be used to make a custom link, or is extended below for
// simple Github and web links
class ProjectButtons extends Component {
  render() {
    //   Original color: #6a77ec
    const ProjectLinkWrapper = styled.div`
      border: 3px solid ${Globals.link.color};
      border-radius: 6px;
      display: inline-block;
      padding: 5px;
      margin-right: 10px;
      margin-top: 5px;
      color: ${Globals.text.color};
      transition: 0.03s;

      /* for svg icons */
      fill: ${Globals.text.color};
      stroke: ${Globals.text.color};

      & p {
        color: inherit;
        margin: 0 10px;
        text-decoration: none;
        border-bottom: 1px solid ${Globals.text.color};
      }

      &:hover {
        & p {
          border-bottom: 1px solid transparent;
        }
        background-color: ${Globals.link.color};
      }
    `
    const InnerWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 27px;
    `
    return (
      <a href={this.props.to}>
        <ProjectLinkWrapper>
          <InnerWrapper>
            {this.props.children} {/* Should be an icon or something similar*/}
            <p>{this.props.text}</p>
          </InnerWrapper>
        </ProjectLinkWrapper>
      </a>
    )
  }
}

// Github link which extends ProjectLink
class ProjectGithubLink extends Component {
  render() {
    return (
      <ProjectButtons to={this.props.to} text="Code on Github">
        <Github fill="inherit" color="inherit" />
      </ProjectButtons>
    )
  }
}

// Web link which extends ProjectLink
class ProjectWebLink extends Component {
  render() {
    return (
      <ProjectButtons to={this.props.to} text={this.props.text}>
        <GrommetLink stroke="inherit" color="inherit" />
      </ProjectButtons>
    )
  }
}

export { ProjectBox, ProjectButtons as ProjectLink, ProjectGithubLink, ProjectWebLink }
