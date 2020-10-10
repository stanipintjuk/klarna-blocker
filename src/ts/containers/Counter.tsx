import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { IAppState } from "../background/store";

class Blocker extends React.Component {
  render() {
    return (
      <CounterContainer>
          Klarna blocker enabled
      </CounterContainer>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Blocker);

const CounterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  padding: 5px;
  margin: 5px;
  background-color: ${(p) => p.theme.backgroundColor};
`;
