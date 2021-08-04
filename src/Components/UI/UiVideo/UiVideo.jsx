import React,{useEffect,useRef} from 'react'
import cn from 'classnames';
import PropeTypes from 'prop-types';
import styles from './UiVideo.module.css';


const UiVideo = ({
  src,
  classes,
  playbackRate = 1.0

}) => {
  const videoRef = useRef(null)
  useEffect(()=>{
     videoRef.current.playbackRate = playbackRate
  },[])

  return (
    <video
            loop
            autoPlay
            muted
            className={cn(styles.video,classes)}
            ref={videoRef}
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
