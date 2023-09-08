
import PropTypes from "prop-types";

const Button = ({ clickHandler, text }) => {
    return (
        <button
            className="button"
            onClick={clickHandler}
        >
            {text}
        </button>
    );

}
    Button.defaultProps = {
        clickHandler: () => { },
        text: 'Click here',
    };

    Button.propTypes = {
        clickHandler: PropTypes.func,
        text: PropTypes.string,

    };

    export default Button;