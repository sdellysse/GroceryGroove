import { PropTypes } from 'react';
import React from 'react';

class SnackBar extends React.PureComponent {

  componentDidMount() {
    if (this.props.show) {
      //Following the autoHideDuration, call the requestClose func
      this.setState({
        timeoutHandle: setTimeout(this.props.onRequestClose, this.props.autoHideDuration),
      });
    }
  }

  componentDidUpdate() {
    if (this.props.show) {
      //Following the autoHideDuration, call the requestClose func
      this.setState({
        timeoutHandle: setTimeout(this.props.onRequestClose, this.props.autoHideDuration),
      });
    }
  }

  componentWillUnmount() {
    const handle = this.state ? this.state.timeoutHandle : void(0);
    clearTimeout(handle);  
    this.props.onRequestClose();
  }

  render() {
    let classList = [
      'snackbar',
    ];
    if (this.props.show) {
      classList.push('show');
    }

    return (
      <div className={classList.join(' ')}>
        <span className='text'>{this.props.text}</span>
      </div>
    );
  } 
};

SnackBar.defaultProps = {
  show: false,
  autoHideDuration: 4000,
};

SnackBar.propTypes = {
  text: PropTypes.string.isRequired,
  show: PropTypes.bool,
  autoHideDuration: PropTypes.number,
  onRequestClose: PropTypes.func.isRequired,
};

export default SnackBar;
