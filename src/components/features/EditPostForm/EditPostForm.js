import PostForm from '../PostForm/PostForm';
import { editPost, getPostById } from '../../../redux/postsRedux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const EditPostForm = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, postId }));
    navigate('/');
  };
  if (!postData) return <Navigate to='/' />;
  return (
    <PostForm
      id={postId}
      action={handleSubmit}
      actionText='Edit post'
      title={postData.title}
      author={postData.author}
      publishedDate={postData.publishedDate}
      shortDescription={postData.shortDescription}
      content={postData.content}
    />
  );
};

export default EditPostForm;
