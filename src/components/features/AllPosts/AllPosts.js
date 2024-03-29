import { Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { NavLink } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';

const AllPosts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.id} xs='12' md='6' lg='4'>
          <Card key={post.id} className='mt-4'>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <strong>Author: </strong>
                {post.author} <br />
                <strong>Published: </strong>
                {dateToStr(post.publishedDate)} <br />
                <strong>Category: </strong>
                {post.category}
              </Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <Button variant='primary' as={NavLink} to={'/post/' + post.id}>
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllPosts;
