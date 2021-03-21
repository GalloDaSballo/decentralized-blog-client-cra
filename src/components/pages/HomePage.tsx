import { usePosts } from "../../context/PostContext"
import {Link} from "react-router-dom"
const HomePage: React.FC = () => {
  const posts = usePosts()
  return (
    <div>
      <h2>
        HomePage
      </h2>
      {posts.map(post => (
              <Link to={`/post/${post.id}`}>
                <div>
                  <img src={post.imageHash} alt={post.title}/>
                  <h3>{post.title}</h3>
                </div>
            </Link>
      ))}

    </div>
  )
}

export default HomePage