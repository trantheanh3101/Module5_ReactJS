import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";

function Alert(props) {
    return (
        <>
            <div className="alert alert-warning" role="alert">
                {props.text}
            </div>
        </>
    );
}

Alert.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Alert;