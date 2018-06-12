feed = {
    "feed_name"             : "feed",
    "default_count"         : 25,
    "no_cdata_fields"       : [], // Don't wrap these fields in CDATA tags
    //"plugins_directories"     : ["plugins/"],
    "plugins": ['add_itunes_elements'],
    "meta" : {
        "title": "Peoria Podcast Alliance",
        "description": "The Peoria Podcast Alliance is a group of podcasters from Central Illinois who do shows on a wide variety of topics. ",
        "generator": "PPA",
        "feed_url": "http://peoriapodcasts.com/feed.xml",
        "site_url": "http://peoriapodcasts.com/",
        "image_url": "http://peoriapodcasts.com/img/ppa.jpg",
        "language": "en-us",
        "custom_elements" : [
          {'itunes:subtitle': 'Podcasts created by members of the Peoria Podcast Alliance'},
          {'itunes:author': 'PPA'},
          {'itunes:summary': 'Shows created by the Peoria Podcast Alliance'},
          {'itunes:explicit': 'Yes'},
          {'itunes:owner': [
              {'itunes:name': 'PPA'},
              {'itunes:email': 'wasson@gmail.com'}
            ]},
            {'itunes:image': {
              _attr: {
                href: 'http://peoriapodcasts.com/img/ppa.jpg'
              }
            }},
            {'itunes:category': [
              {_attr: {
                text: 'Technology'
              }},
              {'itunes:category': {
                _attr: {
                  text: 'Gadgets'
                }
              }}
            ]}
        ]
    },
    "custom_namespaces" : {
      'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
      'xsl': 'http://www.w3.org/1999/XSL/Transform'
    },
    
    "language": 'en',
    "categories": ['Category 1','Category 2','Category 3'],
    "sources" : [
        {
            "name"              : "Graveyard Duck",
            "count"             : 5,
            "feed_url"          : "http://feeds.feedburner.com/GraveyardDuck",
        },
        {
            "name"              : "Challenged",
            "count"             : 5,
            "feed_url"          : "http://feeds.feedburner.com/Challenged"
        },
        {
            "name"              : "Geek Nerdery",
            "count"             : 5,
            "feed_url"          : "http://feeds.feedburner.com/GeekNerderyPodcast"
        },
        {
            "name"              : "Midnight Drive-In",
            "count"             : 5,
            "feed_url"          : "http://feeds.feedburner.com/TheLastHorrorcast"
        },
        {
            "name"              : "Beer Report",
            "count"             : 5,
            "feed_url"          : "http://www.thebeerreport.com/mainblog/?feed=podcast"
        },
        {
            "name"              : "Drunken Lullabies",
            "count"             : 5,
            "feed_url"          : "http://drunkenlullabiespodcast.libsyn.com/rss"
        },
        {
            "name"              : "Couch Pilots",
            "count"             : 5,
            "feed_url"          : "http://couchpilotspodcast.libsyn.com/rss"
        },
        {
            "name"              : "The Importance of Seeing Ernest",
            "count"             : 5,
            "feed_url"          : "http://seeingernest.libsyn.com/rss"
        },
        {
            "name"              : "Broken Funny Bone",
            "count"             : 5,
            "feed_url"          : "http://brokenfunnybonepodcast.libsyn.com/rss"
        },
        {
            "name"              : "Karaok Big E",
            "count"             : 5,
            "feed_url"          : "http://feeds.feedburner.com/karaokbige"
        },
        {
            "name"              : "Heel vs. Face",
            "count"             : 5,
            "feed_url"          : "http://feeds.feedburner.com/heelvsfacepodcast"
        },
        {
            "name"              : "Liberty Plays",
            "count"             : 5,
            "feed_url"          : "http://libertyplays.com/category/podcast/feed"
        },
        {
            "name"              : "Dishing Disney",
            "count"             : 5,
            "feed_url"          : "http://dishingdisney.libsyn.com/rss"
        },
        {
            "name"              : "Craft Beer Digest",
            "count"             : 5,
            "feed_url"          : "http://craftbeerdigest.libsyn.com/rss"
        }
    ]
};

exports.feed = feed