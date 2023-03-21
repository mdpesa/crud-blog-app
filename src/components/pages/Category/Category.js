import { Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getPostByCategory } from '../../../redux/postsRedux';
import { dateToStr } from '../../../utils/dateToStr';

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

export default Category;
