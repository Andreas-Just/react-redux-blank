import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../../actions/actionCreator';
import './Test.css';

const Test = ({ incrementConnect, test }) => (
  <div className="test">
    <div className="test__btn">
      <button
        type="button"
        onClick={() => incrementConnect(10)}
        data-hover="Increment"
      >
        Increment
      </button>
    </div>
    <h2>{test}</h2>
  </div>
);

Test.propTypes = {
  test: PropTypes.number.isRequired,
  incrementConnect: PropTypes.func.isRequired,
};

export default connect(({ test }) => ({
  test,
}), { incrementConnect: increment })(Test);

/*
export default connect(state => ({
  index: state.test,
}), { increment })(Test);
*/

/*
const mapStateToProps = (state) => ({
  index: state.test.index
});
const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(increment(number))
});
export default connect(mapStateToProps, mapDispatchToProps)(Test);
*/
