import { getPostById } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Post = () => {
  const { postId } = useParams();
  const postData = useSelector((state) => getPostById(state, postId));
  if (!postData) return <Navigate to='/' />;
  return (
    <>
      <Row className='d-flex justify-content-center'>
        <Col className='col-6'>
          <Card border='light'>
            <Card.Body>
              <Card.Title>{postData.title}</Card.Title>
              <Card.Text>
                <strong>Author: </strong>
                {postData.author} <br />
                <strong>Published: </strong>
                {postData.publishedDate} <br />
              </Card.Text>
              <Card.Text>{postData.shortDescription}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='d-flex justify-content-end align-items-center'>
          <Button variant='outline-info' as={NavLink} to={'/post/edit/' + postId}>
            Edit
          </Button>
          <Button variant='outline-danger'>Delete</Button>
        </Col>
      </Row>
    </>
  );
};

export default Post;
