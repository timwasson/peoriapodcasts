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
    log_level           : 'debug',
    custom_namespaces   : {
      'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
      'xsl': 'http://www.w3.org/1999/XSL/Transform'
    }
};
var rss_braider = RssBraider.createClient(braider_options);

// Set logging level (debug, info, warn, err)
rss_braider.logger.level('info');

rss_braider.processFeed('ppa', 'rss', function(err, data){
  if (err) {
    return console.log(err);
  }
  console.log(data);
  fs.writeFile('./dist/feed.xml', data, function (err) {
    if (err) {
       console.error(err);
    } else {
       console.log('Peoria Podcast Feed written');
    }
  });
});
