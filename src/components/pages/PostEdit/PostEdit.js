import { Col, Row } from "react-bootstrap";
import EditPostForm from "../../features/EditPostForm/EditPostForm";


const PostEdit = () => {
    return (
        <Row className='d-flex justify-content-center'>
          <Col>
            <h1>Add post</h1>
            <EditPostForm/>
          </Col>
        </Row>
      );
    };
    

export default PostEdit;
