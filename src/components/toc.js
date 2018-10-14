import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { CaretSquareDown } from "styled-icons/fa-regular/CaretSquareDown.cjs";
import { CaretSquareUp } from "styled-icons/fa-regular/CaretSquareUp.cjs";

const ShowToC = styled.button`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  text-align: center;
  color: #666;
`;

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

const ToCContainer = styled.div`
  background: #eee;
  margin: 1em 0;
  padding: 1em;
`;

export default class TableOfContents extends Component {
  state = { show: this.props.show || false };
  toggle = () => {
    const show = !this.state.show;
    this.setState({ show });
  };
  static propTypes = {
    tableOfContents: PropTypes.string.isRequired,
    show: PropTypes.bool
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
