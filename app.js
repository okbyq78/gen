const losujBtn = document.querySelector('button');
const alienImg = document.querySelector('img');

const alienImages = [
  'https://static.wikia.nocookie.net/5yl/images/d/d7/Heatblast_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/d/d5/Wildmutt_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/2/28/Diamondhead_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/f/f3/XLR8_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/7/76/Grey_Matter_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/3/33/Stinkfly_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/8/8e/Ghostfreak_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/f/fc/Four_Arms_%28New%29.png',
  'https://static.wikia.nocookie.net/5yl/images/e/ef/Cannonbolt_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/6/6f/Upgrade_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/1/11/Ripjaws_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/d/dd/Swampfire_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/9/97/Arctiguana.png',
  'https://static.wikia.nocookie.net/5yl/images/a/a1/Way_Big.png',
  'https://static.wikia.nocookie.net/5yl/images/6/66/Waterhazard_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/4/4e/Brainstorm_Base.png',
  'https://static.wikia.nocookie.net/5yl/images/5/5e/Spidermonkey_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/2/21/God_Posters_Atomix.png',
  'https://static.wikia.nocookie.net/5yl/images/6/62/Spitter.png',
  'https://static.wikia.nocookie.net/5yl/images/f/f0/Alien_X.png',
  'https://static.wikia.nocookie.net/5yl/images/c/c7/Chamalien.png',
  'https://static.wikia.nocookie.net/5yl/images/4/43/Bloxx_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/f/f3/Goop_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/8/8d/Feedback_2020.png',
  'https://static.wikia.nocookie.net/5yl/images/8/82/5YL_Wildvine.png',
  'https://static.wikia.nocookie.net/5yl/images/6/68/Nanomech_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/4/49/Armodrillo_V2.png',
  'https://static.wikia.nocookie.net/5yl/images/0/0d/Eye_Guy.png',
  'https://static.wikia.nocookie.net/5yl/images/5/51/Frankenstrike.png',
  'https://static.wikia.nocookie.net/5yl/images/5/5e/Snare-Oh.png',
];

losujBtn.addEventListener('click', () => {
  alienImg.src = alienImages[Math.floor(Math.random() * alienImages.length)];
});
