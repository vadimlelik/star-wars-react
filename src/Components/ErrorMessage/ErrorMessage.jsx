import styles from './ErrorMessage.module.css';
import errorVideo from './video/video.mp4';
import UiVideo from '@components/UI/UiVideo';

const ErrorMessage = () => {
  return (
    <>

      <p className={styles.text}>
        The dark side of the force has won.<br />
        We cannot display data.<br />
        Come back when we fix everything
      </p>
      <UiVideo src={errorVideo} className={styles.video} />
    </>
  )
}

export default ErrorMessage;
