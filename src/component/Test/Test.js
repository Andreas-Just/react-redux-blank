import React from 'react';
import { connect } from 'react-redux';
import { incrementIndex } from '../../store/actions';
import './Test.css'

const Test = ({ increment, data }) => (
  <div className='Test'>
    <button onClick={() => increment(10)}>ON</button>
    <h2>{data}</h2>
  </div>
);

const mapStateToProps = (state) => ({
  data: state.index
});
const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(incrementIndex(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
