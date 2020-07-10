This project used the following technology :

HLS : HTTP Live Streaming (also known as HLS) is an HTTP-based adaptive bitrate streaming communications protocol developed by Apple Inc. and released in 2009.

## Installation

```
1. [Set up broadcast node using Livepeer and OBS](https://github.com/livepeer/wiki/wiki/Blueprint:-set-up-a-broadcasting-node-using-Livepeer-and-OBS)

2. livepeer -network rinkeby -ethUrl https://rinkeby.infura.io/v3/<id> -broadcaster -v 6

3. Get stream id: curl http://localhost:7935/manifestID

4. ffplay http://localhost:8935/stream/<stream id>.m3u8
```
