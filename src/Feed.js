import React from "react";
import "./Feed.css";
import { Create } from "@material-ui/icons";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
