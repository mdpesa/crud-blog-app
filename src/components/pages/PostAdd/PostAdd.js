import { Col, Row } from 'react-bootstrap';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const PostAdd = () => {
  return (
    <Row className='d-flex justify-content-center'>
      <Col>
        <h1>Add post</h1>
        <AddPostForm/>
      </Col>
    </Row>
  );
};

export default PostAdd;
