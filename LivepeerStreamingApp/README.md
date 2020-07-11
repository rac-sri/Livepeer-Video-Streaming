# LivepeerStreamingApps

## A React implementation of stream video player.

## Installation

- [Set up broadcast node using Livepeer and OBS](https://github.com/livepeer/wiki/wiki/Blueprint:-set-up-a-broadcasting-node-using-Livepeer-and-OBS)

- livepeer -network rinkeby -ethUrl https://rinkeby.infura.io/v3/<id> -broadcaster -v 6

- Get stream id: curl http://localhost:7935/manifestID

- Change values in `config.js`.

- ffplay http://localhost:8935/stream/<stream id>.m3u8

- http://<your-ip-or-hostname>/stream/<your-stream-id>.m3u8

---

_LivePeer Cli_

> livepeer_cli

---

_Errors_

![](LivepeerChatApp/images/68747470733a2f2f692e696d6775722e636f6d2f6c476d4f6276672e706e67.png)
![](LivepeerChatApp/images/68747470733a2f2f692e696d6775722e636f6d2f30494f4f3134312e706e67.png)

For both of these errors, the solution is to set the price you're willing to pay to be higher. The smart contract first filters by price, then by stake. On the testnet, Livepeer maintains some nodes that you can rely on that charge a higher fee so that you can make sure you're matched with them. Otherwise you might be paired with a transcoder that's not working correctly or is offline.
From the livepeer CLI, choose 15 (Set Broadcast Config) and enter 200

---
