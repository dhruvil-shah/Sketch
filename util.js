'use strict'
import {screenshotDesktop} from 'screenshot-desktop';


const capture=()=>{
    screenshotDesktop().then((img) => {
        console.log(img);
      }).catch((err) => {
        console.log(err);
      })
}
