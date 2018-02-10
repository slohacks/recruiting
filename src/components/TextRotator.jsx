import React from 'react';
import PropTypes from 'prop-types';

class TextRotator extends React.Component {
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
        currentWordIndex: (this.state.currentWordIndex + 1) % this.props.words.length,
        currentColorIndex: (this.state.currentColorIndex + 1) % this.props.colors.length,
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
