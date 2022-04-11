import React, { useEffect, useState } from "react";
import "./Feed.css";
import {
  Create,
  Event,
  Photo,
  VideoCallSharp,
  ArtTrackOutlined,
} from "@material-ui/icons";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebaseDatabase";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

function Feed() {
  const { user } = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
      console.log(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      message: input,
      name: user.name,
      description: user.email,
      photoUrl: user.profile || "",
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption Icon={Photo} title="Photo" color="#70B5F9" />
          <InputOption Icon={Event} title="Event" color="#e7a33e" />
          <InputOption Icon={VideoCallSharp} title="Video" color="#7fc15e" />
          <InputOption
            Icon={ArtTrackOutlined}
            title="Article"
            color="#fb9295"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map((post, index) => (
          <Post
            photoUrl={post.photoUrl || false}
            key={index}
            name={post.name}
            description={post.description}
            message={post.message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
