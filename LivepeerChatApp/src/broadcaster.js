import React from "react";
import { render } from "react-dom";
import LivepeerSDK from "@livepeer/sdk";

class BroadCaster extends React.Component {
  state = {
    searching: false,
    loading: false,
    broadcaster: "",
    jobs: [],
  };
  async componentDidMount() {
    this.sdk = await LivepeerSDK();
  }
  updateBroadcaster = (e) => {
    this.setState({ broadcaster: e.target.value });
  };
  search = async () => {
    this.setState({
      searching: true,
      loading: true,
    });
    this.setState({
      loading: false,
      jobs: await this.sdk.rpc.getJobs({
        broadcaster: this.state.broadcaster,
      }),
    });
  };
  reset = () => {
    this.setState({
      searching: false,
      loading: false,
      broadcaster: "",
      jobs: [],
    });
  };
  render() {
    const { broadcaster, jobs, loading, searching } = this.state;
    const total = jobs.length;
    return (
      <div className="Broadcaster" style={{ fontFamily: "sans-serif" }}>
        <h4>Broadcaster Jobs on Livepeer</h4>
        {!searching && (
          <div>
            <p>Enter a broadcaster ETH address</p>
            <input
              type="text"
              onKeyDown={this.updateBroadcaster}
              onBlur={this.updateBroadcaster}
              style={{ fontSize: 16 }}
            />
            <button onClick={this.search}>search</button>
          </div>
        )}
        {searching && (
          <div>
            <h2>
              Jobs {!loading && `(${total})`}
              <button onClick={this.reset}>reset</button>
            </h2>
            <div>
              {/* loading state */}
              {loading && "Loading jobs..."}
              {/* job list */}
              {jobs.map((job) => (
                <pre key={job.address}>
                  <code>{JSON.stringify(job, null, 2)}</code>
                  <hr />
                </pre>
              ))}
            </div>
          </div>
        )}{" "}
      </div>
    );
  }
}

export default BroadCaster;
