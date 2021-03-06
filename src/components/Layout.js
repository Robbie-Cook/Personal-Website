/**
 * A component which defines Row and Col for layout
 */

import PropTypes from "prop-types"
import React, { PureComponent } from "react"
import styled from "styled-components"
import { MobileView } from "./Views"

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;

  ${new MobileView(`
    flex-direction: column;
  `)}
`
class Col extends PureComponent {
  MyCol = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px 20px 0;
    width: ${this.props.width};

    ${new MobileView(`
  width: 100%;
`)}
  `
  render() {
    return <this.MyCol>{this.props.children}</this.MyCol>
  }
}
Col.propTypes = {
  width: PropTypes.string, // Given as a string,
  // not as a number, e.g. 50%
}

export { Col, Row, LayoutWrapper }
