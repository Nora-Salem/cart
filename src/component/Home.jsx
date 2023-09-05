import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../config/firebase";
const Home = ({ login }) => {
  const [postList, setPostList] = useState([]);
  const docsData = collection(db, "posts");
  useEffect(() => {
    getPost();
  }, [postList]);

  const getPost = async () => {
    const data = await getDocs(docsData);

    setPostList(
      data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
    );
  };

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="home-container">
      {postList.map((post) => (
        <div className="box" key={post.id}>
          <div className="header">
            <h2>{post.title}</h2>
            {login && post.auther.id === auth.currentUser.uid ? (
              <div className="delete-icon" onClick={() => deletePost(post.id)}>
                X
              </div>
            ) : (
              ""
            )}
          </div>

          <p>{post.post}</p>

          <span>{post.auther.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
