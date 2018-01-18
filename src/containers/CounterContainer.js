/* @flow */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import {
  increment,
  decrement,
  incrementIfEven,
} from '../actions/CounterActions';
import type { State } from '../types/State';
import type { Dispatch } from '../types/Store';

const mapStateToProps = ({ counter }: State) => ({
  counter,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  //$FlowFixMe
  bindActionCreators(
    {
      increment,
      decrement,
      incrementIfEven,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
