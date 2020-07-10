#### Livepeer

#### HLS

HTTP Live Streaming (also known as HLS) is an HTTP-based adaptive bitrate streaming communications protocol developed by Apple Inc. and released in 2009.

## Installation

- [Set up broadcast node using Livepeer and OBS](https://github.com/livepeer/wiki/wiki/Blueprint:-set-up-a-broadcasting-node-using-Livepeer-and-OBS)

- livepeer -network rinkeby -ethUrl https://rinkeby.infura.io/v3/<id> -broadcaster -v 6

- Get stream id: curl http://localhost:7935/manifestID

- ffplay http://localhost:8935/stream/<stream id>.m3u8

- http://<your-ip-or-hostname>/stream/<your-stream-id>.m3u8

_LivePeer Cli_

> livepeer_cli
