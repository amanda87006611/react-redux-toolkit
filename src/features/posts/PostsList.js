import { useSelector } from "react-redux";
import {selectAllPosts} from "./postsSlice"
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostList = () =>{
    const posts = useSelector(selectAllPosts)
    const orderedPosts = [...posts].sort((a,b)=>b.date.localeCompare(a.date))
    const rerenderPosts = orderedPosts.map((post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
        </article>
    )))

    return(
       <section>
           <h2>POSTS</h2>
           {rerenderPosts}
       </section>
    )
}

export default PostList