import React, { Component } from "react"

/* Imports */
/* Stylesheets etc. */
import { Heading, Text } from "../Typography"
import WebPage from "../Page"
import { Container } from "../Wrappers"
import { Col, Row, LayoutWrapper } from "../Layout"
import styled from "styled-components"
import PropTypes from "prop-types"
import Globals from "../Globals"
import { BorderBox } from "../Boxes"
import { MobileView } from "../Views"

import Song from "../music/Song"

class Playlist extends Component {
  render() {
    // Behaviour changes based on whether jsonData is passed
    const jsonData = this.props.jsonData
    let jsonGeneratedSongs = []
    let title = this.props.title

    // If data is given by JSON, extract data from there
    if (jsonData) {
      title = jsonData.name
      jsonData.tracks.items.forEach(item => {
        const track = item.track
        jsonGeneratedSongs.push(
          <Song
            name={track.name}
            artist={track.artists[0].name}
            spotifySongId={track.id}
          />
        )
      })
    }

    return (
      <BorderBox
        style={`
        width: 550px; 
        height: 100%;
        margin-right: 20px;
        flex-shrink: 0;
        
        ${new MobileView(`
          width: 377px;
          `)}
      `}
        verticalScroll
      >
        <Heading type="h3" style={{ marginTop: "-10px" }}>
          {title}
        </Heading>
        {/* If JSON data is provided, populate with JSON generated data, otherwise use the children */}
        {jsonData ? jsonGeneratedSongs : this.props.children}
      </BorderBox>
    )
  }
}
Playlist.propTypes = {
  // Songs passed as this.props.children
  title: PropTypes.string,
  // If left undefined, json is not used
  jsonData: PropTypes.string,
}

export default Playlist