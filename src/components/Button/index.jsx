import { Component } from "react";
import "./styles.css";
import P from "prop-types";

export class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <button onClick={onClick} className="button" disabled={disabled}>
        {text}
      </button>
    );
  }
}
Button.defaultProps = {
  disabled: false,
};
Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
};
