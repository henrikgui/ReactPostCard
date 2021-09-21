/* eslint-disable react/react-in-jsx-scope */
import "./styles.css";
import { PostCard } from "../PostCard";
import P from "prop-types";

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        cover={post.cover}
        body={post.body}
        id={post.id}
      />
    ))}
  </div>
);
Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    })
  ),
};
