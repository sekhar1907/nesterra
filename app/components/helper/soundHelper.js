import Sound from 'react-native-sound';

export const soundePlay = () => {
  //   alert('ddsffsda');
  const mu = require('../../images/first.wav');
  const soundVar = new Sound(mu, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log(error);
      console.log('NOT ABLE TO PLAY SOUND');
    }
  });

  soundVar.play(success => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });
  soundVar.release();
};
