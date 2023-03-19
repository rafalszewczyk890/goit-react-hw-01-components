import { Component } from 'react';

class Toggle extends Component {
  state = { isOpen: true, someProp: 123 };

  show = () => {
    this.setState({ isOpen: true });
  };

  hide = () => {
    this.setState({ isOpen: false });
  };

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    console.log(this.state);
    return (
      <div>
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
        <button onClick={this.toggle}>{isOpen ? 'Hide' : 'Show'}</button>

        {isOpen && children}
      </div>
    );
  }
}

export default Toggle;
