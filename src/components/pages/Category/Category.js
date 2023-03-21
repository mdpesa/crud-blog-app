import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostByCategory } from '../../../redux/postsRedux';
import Post from '../Post/Post';

const Category = () => {
  const { category } = useParams();
  const postsCategory = useSelector((state) =>
    getPostByCategory(state, category)
  );

  if (postsCategory.length === 0)
    return (
      <>
        <h1>Category: {category}</h1>
        <p>No posts in this category...</p>
      </>
    );
  else
    return (
      <Row>
        {postsCategory.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            category={post.category}
            shortDescription={post.shortDescription}
            content={post.content}
          />
        ))}
      </Row>
    );
};

export default Category;
