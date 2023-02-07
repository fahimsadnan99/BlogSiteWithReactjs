import React, { useState, useRef } from "react";
import MyEditor from "./MyEditor";
import { motion } from "framer-motion"

const CreatePost = () => {
  const heading = useRef(null)
  const editor = useRef(null);
  const [content, setContent] = useState("");


  const handleSubmit = ()=>{
    console.log(heading.current.value);
    console.log("🚀 ~ file: CreatePost.jsx:8 ~ CreatePost ~ content", content)
  }
  return (
    <motion.div animate={{x : 0, opacity : 2}} transition={{type : "spring", stiffness : 60}} initial={{x : 4000, opacity : 0.1}}>
      <h4 className="mt-4 createPostHeading">Type Your Headline</h4>
      <div className="my-4" style={{ width: "95%" }}>
        <textarea
          className="form-control"
          type="text"
          name="heading"
          cols={35}
          rows={2}
          style={{ resize: "none", width: "100%" }}
          ref={heading}
        />
      </div>
      <div className="" style={{ width: "95%" }}>
        <MyEditor editor={{ editor, content, setContent }}></MyEditor>
      </div>

      <div className="text-center">
        <button onClick={handleSubmit} className="postSubmitBtn">Submit</button>
      </div>
    </motion.div>
  );
};

export default CreatePost;
