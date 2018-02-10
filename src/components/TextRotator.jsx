import React from 'react';
import PropTypes from 'prop-types';

class TextRotator extends React.Component {
  static cycleIndex(index, arr) {
    return (index + 1) % arr.length;
  }

  constructor() {
    super();
    this.state = {
      currentWordIndex: 0,
      currentColorIndex: 0,
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({
        currentWordIndex: TextRotator.cycleIndex(this.state.currentWordIndex, this.props.words),
        currentColorIndex: TextRotator.cycleIndex(this.state.currentColorIndex, this.props.colors),
      });
    }, this.props.delay);
  }

  render() {
    return (
      <span
        style={{
          color: this.props.colors[this.state.currentColorIndex],
        }}
      >
        {this.props.words[this.state.currentWordIndex]}
      </span>
    );
  }
}

TextRotator.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number.isRequired,
};

export default TextRotator;
