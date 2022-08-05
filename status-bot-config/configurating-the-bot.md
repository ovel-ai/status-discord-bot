# Configurating the Bot

{% hint style="info" %}
**Good to know:** Our Services are Configured with the best ability to configure our bots..
{% endhint %}

## Configuration&#x20;

### Settings Config Definition

* **maintenance** - Puts the bot into Maintenance mode in case of development
* **nodeStatus** - Enables the Embed for the IP Monitoring System
* **autoLeave** - Leaves other servers and only stays in the main server.
* **anticrash** - Enables the Anti Crash system to prevent any errors crashing the bot.
* **nodeStatusDelay** - The Delay between Times of the IP Monitoring System Update
* **guildID** - Main Guild ID
* **admin** - The System Administrator of the Bot
* **owner** - User ID of the Owner of the Server
* &#x20;**welcomemsg** - The Message that will be displayed on the welcome embed
* **welcomeimg** - The Image of the Welcoming System Embed\\
* **statusOnMaintainance -** Status of the bot when Maintenance Mode is Enabled

```
"settings": {
        "maintenance": false,
        "nodeStatus": true,
        "autoLeave": true,
        "anticrash": true,

        "nodeStatusDelay": 15,

        "guildID": "",
        "admin": [""],
        "owner": "",

        
        "welcomemsg": "WELCOMEMESSAGEHERE",
        "welcomeimg": "IMAGELINKHERE",

        "statusOnMaintenance": "On Maintenance mode"
    },
    
    
```

### Channel ID Configuration

* **welcome** - Welcome & Leaving System Embed Channel
* **bye** - Welcome & Leaving System Embed Channel
* **nodeStatus** - Channel the Embed should be sent for the IP Monitor System
* **suggestions** - The Suggestion Channel

```
"channelID": {
        "welcome":"",
        "bye":"",
        "nodeStatus": "",
        "suggestions": ""
    },
```

### Roles Configuration

* **staff** - The Id of your Staff Role&#x20;
* **support** - The Id of your Support Role
* **member -** Your Member Role ID
* **admin** - Your Admin Role ID

```
    "roleID": {
        "staff": "",
        "support": "",
        "member": "",
        "admin": ""
    },
```

### Bot Configuration

* **token** - The Bot's Token | Can be Found in [..](../ "mention")
* **prefix** - The Prefix of your bot

```
"bot":{
        "token": "",
        "prefix": "!"
    },
```

### IP Monitoring System Configuration

* All of the "yourip.com" should be Replaced with the IP you want to monitor.
* To Change the Names on the embed Change them in `autoRun` File and `status.js`

```
"PingIP": {

        "IP1":"yourip.com", 
        "IP2":"yourip.com",
        "IP3":"yourip.com",
        "IP4":"yourip.com",
        "IP5":"yourip.com"
    },
```

### Lavalink Configuration&#x20;

* **host** - Lavalink Host IP
* **port** - The Port of the Lavalink
* **password** - Password of the Lavalink Server
* **retryDelay** - The Delay to connect again when connection fails
* **secure** - Secure server for Lavalink or not

```
"lavalink": {
        "nodes": [
            {
                "host": "lavalink.oops.wtf",
                "port": 443,
                "password": "www.freelavalink.ga",
                "retryDelay": 3000,
                "secure": true
            }
        ]
    }
}
```
