import {useMemo, useState} from 'react'
import './styles/App.css'
import PostList from "./components/PostList.jsx";
import PostForm from "./components/PostForm.jsx";
import PostFilter from "./components/PostFilter.jsx";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "aaa", body: "smth"},
        {id: 2, title: "ccc", body: "zxcvdf"},
        {id: 3, title: "bbb", body: "asasd"}
    ])
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        console.log('Function getSortedPosts() is called')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSelectedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    },[filter.query, sortedPosts])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <>
            <div className="App">
                <PostForm create={createPost}/>
                <hr style={{margin: '15px 0'}}/>
                <PostFilter filter={filter} setFilter={setFilter} />
                <PostList remove={removePost} posts={sortedAndSelectedPosts} title="Smth das"/>
            </div>
        </>
    )
}

export default App
