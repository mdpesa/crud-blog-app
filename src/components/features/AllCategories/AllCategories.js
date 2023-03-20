import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesRedux';

const AllCategories = () => {
  const categories = useSelector(getAllCategories);
  return (
    <section>
      <h1 className='mx-5'>All categories</h1>
      <Row xs={1} md={1}>
        {categories.map((category) => (
          <Col key={category} className='mx-5'>
            <Button
              variant='link'
              as={NavLink}
              to={'/allCategories/' + category}
            >
              {category}
            </Button>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default AllCategories;
