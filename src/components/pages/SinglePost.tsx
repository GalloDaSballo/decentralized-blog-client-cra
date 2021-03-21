import { usePosts } from "../../context/PostContext"
const SingPost: React.FC<{match: any}> = ({match}) => {
  const posts = usePosts()
  const found = posts.find(post => post.id === match.params.id)
  return (
    <div>
      <h2>
        {found?.title}
      </h2>
      <p>{found?.content}</p>
      

    </div>
  )
}

export default SingPost