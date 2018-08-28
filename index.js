var RssBraider = require('rss-braider'),
    feeds = {},
    fs = require('fs'),
    cron = require('node-cron');

feeds.ppa = require("./config/feed-config").feed;

var braider_options = {
    feeds               : feeds,
    indent              : "    ",
    date_sort_order     : "desc", // Newest first
    plugins_directories : [__dirname + "/plugins/"],
    log_level           : 'debug'
};
var rss_braider = RssBraider.createClient(braider_options);

// Set logging level (debug, info, warn, err)
rss_braider.logger.level('info');
cron.schedule('0 * * * *', function(){
  console.log('Building XML; It does this once per hour');

  rebuild();
});

function rebuild() {
  rss_braider.processFeed('ppa', 'rss', function(err, data){
    if (err) {
      return console.log(err);
    }
    fs.writeFile('./dist/feed.xml', data, function (err) {
      if (err) {
         console.error(err);
      } else {
         console.log('Peoria Podcast Feed written');
      }
    });
  });
}

rebuild();
