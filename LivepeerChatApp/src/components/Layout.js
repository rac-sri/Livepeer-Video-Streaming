import React, { Component } from "react";
import io from "socket.io-client";
import { USER_CONNECTED, LOGOUT } from "../Events";
import LoginForm from "./LoginForm";
import ChatContainer from "./chats/ChatContainer";
import ReactHLS from "react-hls";
import config from "react-global-configuration";
import VideoContainer from "./videoContainer";

const socketUrl = "http://localhost:3231";
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socketUrl: "http://" + config.get("serverIp") + ":3231",
      socket: null,
      user: null,
      connectedUsers: {},
    };
  }

  componentWillMount() {
    this.initSocket();
  }

  initSocket = () => {
    const socket = io(socketUrl);

    socket.on("connect", () => {
      console.log("Connected");
    });

    this.setState({ socket });
  };

  setUser = (user) => {
    const { socket } = this.state;
    socket.emit(USER_CONNECTED, user);
    this.setState({ user });
  };

  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    const { title, streamId } = this.props;
    const { socket, user } = this.state;
    const broadcaster = config.get("broadcasterInfo");
    return (
      <div className="body-container">
        <div className="stream-header-container">
          <div className="stream-title default-font">{broadcaster.title}</div>
          <img className="globe-icon" src="/images/globe.png"></img>
          <div className="broadcaster-info-container default-font default-font-color">
            <div className="broadcasters-name">{`${broadcaster.firstName} ${broadcaster.lastName}`}</div>
            <div className="broadcasters-city">{`${broadcaster.city},`}</div>
            <div className="broadcasters-country">{broadcaster.country}</div>
          </div>
        </div>
        <div className="main-body-container">
          <VideoContainer
            streamId={streamId}
            connectedUsers={this.state.connectedUsers}
          />
          <div className="chat-container">
            <div className="chat-container-inner">
              <div className="stream-count-container">
                <img src="/images/users.png" className="users-logo"></img>
                <div className="stream-count default-font default-font-color">
                  {`Viewers: ${Object.keys(this.state.connectedUsers).length}`}
                </div>
              </div>
              {!user ? (
                <LoginForm socket={socket} setUser={this.setUser} />
              ) : (
                <ChatContainer
                  socket={socket}
                  user={user}
                  logout={this.logout}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
