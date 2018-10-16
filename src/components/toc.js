import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CaretSquareDown } from "styled-icons/fa-regular/CaretSquareDown.cjs";
import { CaretSquareUp } from "styled-icons/fa-regular/CaretSquareUp.cjs";

import withColor from "components/withcolors";
import { rhythm } from "utils/typography";

const ShowToC = withColor(
  c => c.primary.black,
  styled.button`
    background: none;
    border: none;
    outline: none;
    width: 100%;
    text-align: center;
    color: ${props => props.color};
  `
);

const ToCHTML = styled.div`
  ul {
    list-style: none;
  }
  > ul {
    margin: 0;
    > li {
      & > p,
      & > a {
        font-weight: bold;
      }
    }
  }
`;

const ToCContainer = withColor(
  c => c.secondary.white,
  styled.div`
    background: ${props => props.color};
    margin: ${rhythm(1)} 0;
    padding: ${rhythm(1)};
  `
);

export default class TableOfContents extends Component {
  static propTypes = {
    tableOfContents: PropTypes.string.isRequired,
    show: PropTypes.bool
  };
  state = { show: this.props.show || false };
  toggle = () => {
    const show = !this.state.show;
    this.setState({ show });
  };
  render() {
    const { show } = this.state;
    const caret = show ? (
      <CaretSquareUp size="1em" />
    ) : (
      <CaretSquareDown size="1em" />
    );
    const msg = "Table of Contents";
    return (
      <ToCContainer>
        <ShowToC onClick={this.toggle}>
          {caret} {msg}
        </ShowToC>
        {show && (
          <ToCHTML
            dangerouslySetInnerHTML={{ __html: this.props.tableOfContents }}
          />
        )}
      </ToCContainer>
    );
  }
}
