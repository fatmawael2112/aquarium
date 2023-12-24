var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-",
      "name": "Entrance ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9997724329625441,
          "pitch": 0.14656659528476368,
          "rotation": 0,
          "target": "1-walk-around"
        },
        {
          "yaw": 0.026640654366271832,
          "pitch": -0.1971848590232952,
          "rotation": 0,
          "target": "2-platform-on-the-first-floor"
        },
        {
          "yaw": -0.46157343876120116,
          "pitch": 0.019879377311692537,
          "rotation": 0,
          "target": "3-seating-below-the-sea-creatures"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-walk-around",
      "name": "walk around",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5466017030856136,
          "pitch": 0.013278378282439718,
          "rotation": 0,
          "target": "0-entrance-"
        },
        {
          "yaw": 0.4999700755301735,
          "pitch": -0.14322160288840102,
          "rotation": 0,
          "target": "2-platform-on-the-first-floor"
        },
        {
          "yaw": -0.515232000203028,
          "pitch": 0.011593246828509152,
          "rotation": 0,
          "target": "3-seating-below-the-sea-creatures"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-platform-on-the-first-floor",
      "name": "Platform on the first floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4345184316405337,
          "pitch": 0.08639602043140471,
          "rotation": 0,
          "target": "0-entrance-"
        },
        {
          "yaw": -1.7438113327440412,
          "pitch": 0.007528433558654513,
          "rotation": 0,
          "target": "1-walk-around"
        },
        {
          "yaw": 0.5541084219839476,
          "pitch": 0.23682818117128512,
          "rotation": 0,
          "target": "3-seating-below-the-sea-creatures"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-seating-below-the-sea-creatures",
      "name": "seating below the sea creatures",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9155693903230588,
          "pitch": 0.04597249310494078,
          "rotation": 0,
          "target": "1-walk-around"
        },
        {
          "yaw": 0.43086009610018294,
          "pitch": -0.13040089506331576,
          "rotation": 0,
          "target": "2-platform-on-the-first-floor"
        },
        {
          "yaw": 1.6490220545448935,
          "pitch": 0.00642574908941107,
          "rotation": 0,
          "target": "0-entrance-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
