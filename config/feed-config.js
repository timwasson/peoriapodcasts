feed = {
    "feed_name"             : "feed",
    "default_count"         : 25,
    "no_cdata_fields"       : [], // Don't wrap these fields in CDATA tags
    //"plugins_directories"     : ["plugins/"],
    "plugins": ['add_itunes_elements'],
    "meta" : {
        "title": "Peoria Podcast Alliance",
        "description": "The Peoria Podcast Alliance is a group of podcasters from Central Illinois who do shows on a wide variety of topics. ",
        "language": "en",
        "generator": "PPA",
        "feed_url": "http://peoriapodcasts.com/feed.xml",
        "site_url": "http://peoriapodcasts.com/",
        "image_url": "http://peoriapodcasts.com/img/ppa.jpg",
        "custom_elements" : [
          {'language': 'en-us'},
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
        },
        {
            "name"              : "Makers on Tap",
            "count"             : 5,
            "feed_url"          : "https://makersontap.com/feed/podcast/makers-on-tap"
        },
        {
            "name"              : "Champagne Tuesdays",
            "count"             : 5,
            "feed_url"          : "http://champagnetuesday.blubrry.net/feed/podcast/"
        },
        {
            "name"              : "Part Time Parent",
            "count"             : 5,
            "feed_url"          : "https://parttimeparentpodcast.podbean.com/feed.xml"
        },
        {
            "name"              : "Do or Dice",
            "count"             : 5,
            "feed_url"          : "https://doordicepodcast.podbean.com/feed/"
        },
        {
            "name"              : "Pop Culure Leftovers",
            "count"             : 5,
            "feed_url"          : "http://www.popcultureleftovers.com/feed/podcast/"
        },
        {
            "name"              : "Fire Drill Podcast",
            "count"             : 5,
            "feed_url"          : "https://firedrillpodcast.com/feed/podcast/"
        },
        {
            "name"              : "Throwin' Wrenches",
            "count"             : 5,
            "feed_url"          : "http://throwinwrenches.com/feed"
        },
        {
            "name"              : "Geek Dive",
            "count"             : 5,
            "feed_url"          : "https://anchor.fm/s/69a20a8/podcast/rss"
        },
        {
            "name"              : "NatPark Stories",
            "count"             : 5,
            "feed_url"          : "http://natparkstories.libsyn.com/rss"
        },
        {
            "name"              : "Pabcast",
            "count"             : 5,
            "feed_url"          : "https://rss.simplecast.com/podcasts/7664/rss"
        }
    ]
};

exports.feed = feed
