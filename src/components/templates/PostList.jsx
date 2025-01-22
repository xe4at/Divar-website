import { useQuery } from "@tanstack/react-query";
import { getPost } from "../../services/user";
import Loader from "../modules/Loader";

import styles from "./PostList.module.css";
import { sp } from "../../utils/numbers";

function PostList() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { data, isLoading } = useQuery(["my-post-list"], getPost);
  console.log(data);

  return (
    <div className={styles.posts}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>آگهی های شما</h3>
          {data.data.posts.map((post) => (
            <div key={post._id}>
              {post.images[0] ? (
                <img src={`${baseUrl}${post.images[0]}`} />
              ) : (
                <div className={styles.placeholder}>بارگذاری نشده</div>
              )}
              <div className={styles.details}>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div className={styles.meta }>
                <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                <span>{sp(post.amount)} تومان</span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
