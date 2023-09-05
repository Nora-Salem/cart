import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ login }) => {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, []);

  const postCollection = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postCollection, {
      title,
      post,
      auther: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  return (
    <>
      <div className="post-container">
        <h1>Create Post</h1>
        <div className="inputGP">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="inputGP">
          <label>Post:</label>
          <input
            type="text"
            placeholder="Write Anything..."
            onChange={(e) => setPost(e.target.value)}
          />
        </div>
        <button onClick={createPost}>Create Post</button>
      </div>
    </>
  );
};

export default CreatePost;
