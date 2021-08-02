import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UiInput.module.css';
import ImgCancel from './img/cancel.svg';
import '../index.css';

const UiInput = ({
  value, handleInputChange,
  placeholder,
  classes
}) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      <img
        onClick={() => value && handleInputChange('')}
        className={cn(styles.clear, !value && styles.clear__disabled)}
        src={ImgCancel}
        alt="cancel"
      />
    </div>
  )
}
UiInput.prototype = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string

}

export default UiInput