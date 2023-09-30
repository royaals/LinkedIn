import React, { useEffect, useState } from "react";
import "./feed.css";
import {
  Create as CreateIcon,
 EventNote as EventNoteIcon,
  CalendarViewDay as CalendarViewDayIcon,
} from "@mui/icons-material";
import MmsIcon from '@mui/icons-material/Mms';
import InputOption from "./InputOption";
import Post from "./Post";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
} from "firebase/firestore";
import { db } from "./firebase";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

import { selectUser } from "./features/userSlice";

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsQuery = query(
      collection(db, "posts"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const sendPost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            ></input>
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={MmsIcon} title="Media" color="#378fe9" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c37d16" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#e06847 "
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp}
            />
          )
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;
