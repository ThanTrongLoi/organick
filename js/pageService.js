const servicePage = () => {
    let btnShowVideo = document.getElementById('video__text--btn')
    btnShowVideo.onclick = () => {
      document.querySelector('.popup-video').style.display = 'block';
    }
    document.querySelector('.popup-video span').onclick = () => {
      let obj = document.querySelector('.popup-video');
      let vid = document.getElementById('myVideo');
      if (vid.play) {
        obj.style.display = 'none';
        vid.pause();
      }
    }
}

export default servicePage