import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput.jsx";
import MyButton from "./UI/button/MyButton.jsx";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                type="text"
                placeholder="Title"
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
                value={post.body}
                type="text"
                placeholder="Descr"
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton style={{margin: '15px 0 0 0'}} onClick={addNewPost}>Add Post</MyButton>
        </form>
    );
};

export default PostForm;