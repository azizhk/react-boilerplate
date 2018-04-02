/* @flow */

import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  increment,
  decrement,
  incrementIfEven,
} from '../actions/CounterActions';
import type { State } from '../types/State';
import type { Dispatch } from '../types/Store';
import type {ExtractReturn} from '../types/ExtractReturn';


const Container = styled.div`
  padding: 48px;
  width: 500px;
  margin: auto;
`;

const Count = styled.div`
  font-family: sans-serif;
  font-size: 52px;
  color: #443b5d;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
`;

const Actions = styled.div`
  text-align: center;
`;

const Button = styled.button`
  display: inline-block;
  background: #56acdf;
  color: #fff;
  border-radius: 2px;
  border: 0;
  font-size: 16px;
  padding: 8px;
  margin: 2px;
  min-width: 32px;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: #60c0f7;
  }

  &:active {
    background: #4d98c4;
  }
`;

const mapStateToProps = ({ counter }: State):* => ({
  counter,
});

const mapDispatchToProps = (dispatch: Dispatch):* =>
  bindActionCreators(
    {
      increment,
      decrement,
      incrementIfEven,
    },
    dispatch
  );

type Props = {
  label: string
} & ExtractReturn<typeof mapStateToProps> & ExtractReturn<typeof mapDispatchToProps>;

class Counter extends React.Component<Props> {
  render() {
    const { props } = this;

    return (
      <Container>
        <Count>{props.label}</Count>
        <Count>{props.counter}</Count>
        <Actions>
          <Button key="increment" onClick={() => props.increment(1)}>
            +
          </Button>
          <Button key="decrement" onClick={() => props.decrement(1)}>
            -
          </Button>
          <Button
            key="incrementIfEven"
            onClick={() => props.incrementIfEven(1)}
          >
            % 2 ? +
          </Button>
        </Actions>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
