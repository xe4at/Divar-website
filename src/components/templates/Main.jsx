import { sp } from "../../utils/numbers";

function Main({ posts }) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return (
    <div>
      {posts.data.posts.map((post) => (
        <div key={post._id}>
          <div>
            <p>{post.options.title}</p>
            <div>
              <p>{sp(post.amount)}</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img src={`${baseUrl}${post.images[0]}`} />
        </div>
      ))}
    </div>
  );
}

export default Main;
