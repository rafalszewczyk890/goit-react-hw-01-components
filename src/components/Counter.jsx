import { Component } from 'react';
import style from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       counterValue: this.props.initialValue,
  //     };
  //   }

  state = {
    counterValue: this.props.initialValue,
  };

  handleDecrement = event => {
    this.setState((state, props) => {
      return {
        counterValue: state.counterValue - props.step,
      };
    });
  };

  handleIncrement = event => {
    this.setState((state, props) => {
      return {
        counterValue: state.counterValue + props.step,
      };
    });
  };

  render() {
    const { step } = this.props;
    const { counterValue } = this.state;
    return (
      <div className={step === 7 ? style.counter : style.seven}>
        <h5>I'm a counter</h5>
        <div>Counter value: {counterValue}</div>
        <button
          type="button"
          className={style.increase}
          onClick={this.handleIncrement}
        >
          Increment by {step}
        </button>
        <button
          type="button"
          className={style.decrease}
          onClick={this.handleDecrement}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}

export default Counter;
