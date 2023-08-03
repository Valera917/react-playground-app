import {useRef, useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import MySelect from "./components/UI/select/MySelect.jsx";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "aaa", body: "smth"},
        {id: 2, title: "ccc", body: "zxcvdf"},
        {id: 3, title: "bbb", body: "asasd"}
    ])
    const [selectedSort, setSelectedSort] = useState('')


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <>
            <div className="App">
                <PostForm create={createPost}/>
                <hr style={{margin: '15px 0'}}/>
                <div>
                    <MySelect
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultValue={'Сортировка'}
                        options={[
                            {value: 'title', 'name': 'По названию'},
                            {value: 'body', 'name': 'По описанию'},
                        ]}
                    />
                </div>

                {posts.length
                    ? <PostList remove={removePost} posts={posts} title="Smth das"/>
                    : <h1 style={{textAlign: 'center'}}>Posts does not exist yet.</h1>
                }
            </div>
        </>
    )
}

export default App
