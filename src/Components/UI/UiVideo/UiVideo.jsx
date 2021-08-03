import React from 'react'
import cn from 'classnames';
import PropeTypes from 'prop-types';
import styles from './UiVideo.module.css';


const UiVideo = ({
  src,
  classes,
  playbackRate = 1.0

}) => {
  return (
    <video
      className={cn(styles.video, classes)}
      playbackRate={playbackRate}
    >
      <source src={src} />

    </video>
  )
}
UiVideo.prototype = {
  src: PropeTypes.string,
  classes: PropeTypes.number,
  playbackRate: PropeTypes.string

}

export default UiVideo
