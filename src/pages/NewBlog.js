import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../contexts/BlogContext";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const NewBlog = () => {
  const { currentUser } = useAuth();
  const [newBlog, setNewBlog] = useState({
    author: currentUser.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now(),
  });
  const { addBlog } = useBlog();
  const navigate = useNavigate();

  const newBlogHandler = (e) => {
    e.preventDefault();
    try {
      addBlog(newBlog);
      // console.log(newBlog);
      navigate("/");
      toastSuccessNotify("Blog added successfully!");
    } catch (error) {
      console.log("Error", error);
      toastErrorNotify("Blog can not be added");
    }
  };

  // console.log("currentBlogs", currentBlogs);

  return (
    <div style={{ marginTop: 90 }}>
      <BlogForm
        newBlog={newBlog}
        setNewBlog={setNewBlog}
        newBlogHandler={newBlogHandler}
      />
    </div>
  );
};

export default NewBlog;
