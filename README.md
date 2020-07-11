## Livepeer

Livepeer is a decentralized video broadcasting platform powered by a crypto token on the Ethereum blockchain.

### Transcoder

Transcoding is the process of taking an input video in one format and bitrate, and converting it into many formats and bitrates to make it playable on the majority of devices on the planet at any connection speed.

In The Livepeer network, nodes who play the role of transcoder, perform this very important function, and as a result it’s important that they have high bandwidth connections, sufficient hardware, and reliable devOps practices. These nodes are delegated towards and elected to perform this role, and they are rewarded with the ability to earn fees from the network.

### BroadCaster

On sending video into your broadcaster node and viewing the output transcoded video. In order to see more detailed logs, run your broadcaster with -v 6 to enable verbose logging.

After receiving a stream, your broadcaster will try to connect to a set of orchestrators (ether based on the registered orchestrators on-chain or based on the orchestrators specified using the -orchAddr flag). Your broadcaster might reject certain orchestrators based on their required price or ticket parameters.

#### HLS

HTTP Live Streaming (also known as HLS) is an HTTP-based adaptive bitrate streaming communications protocol developed by Apple Inc. and released in 2009.

#### OBS

Free and open source software for video recording and live streaming.

## Installation

- [Set up broadcast node using Livepeer and OBS](https://github.com/livepeer/wiki/wiki/Blueprint:-set-up-a-broadcasting-node-using-Livepeer-and-OBS)

- livepeer -network rinkeby -ethUrl https://rinkeby.infura.io/v3/<id> -broadcaster -v 6

- Get stream id: curl http://localhost:7935/manifestID

- ffplay http://localhost:8935/stream/<stream id>.m3u8

- http://<your-ip-or-hostname>/stream/<your-stream-id>.m3u8

_LivePeer Cli_

> livepeer_cli

_Errors_

![](./LivepeerChatApp/images/68747470733a2f2f692e696d6775722e636f6d2f6c476d4f6276672e706e67.png)
![](./LivepeerChatApp/images/68747470733a2f2f692e696d6775722e636f6d2f30494f4f3134312e706e67.png)

For both of these errors, the solution is to set the price you're willing to pay to be higher. The smart contract first filters by price, then by stake. On the testnet, Livepeer maintains some nodes that you can rely on that charge a higher fee so that you can make sure you're matched with them. Otherwise you might be paired with a transcoder that's not working correctly or is offline.
From the livepeer CLI, choose 15 (Set Broadcast Config) and enter 200
