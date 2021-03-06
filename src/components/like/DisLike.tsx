import { Component } from "react";

class DisLike extends Component {
  state = { liked: false };
  toggle = () => {
    let localLiked = this.state.liked;
  
    // Toggle the state variable liked
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  };
  render() {
    return (
      <div className="container">
        <div>
          <div
            className="container"
            style={{ border: "none", width: "50%" }}
            onClick={() => this.toggle()}
          >
            {this.state.liked === false ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
                <i className="fa-regular fa-heart"></i>
            )}
          </div>
        </div>
      </div>
    );
  }
}
  
export default DisLike;