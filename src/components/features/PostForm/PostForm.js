import { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const PostForm = (action, actionText, ...props) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(
    props.shortDescription || ''
  );
  const [content, setContent] = useState(props.content || '');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    action({title, author, publishedDate, shortDescription, content });
  };

  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3 w-50'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3 w-50'>
        <Form.Label>Author</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3 w-50'>
        <Form.Label>Published</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter title'
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group className='mb-3 w-75'>
        <Form.Label>Short description</Form.Label>
        <FloatingLabel
          controlId='floatingTextarea2'
          label='Leave a comment here'
          className='text-muted'
        >
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '100px' }}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className='mb-3 w-75'>
        <Form.Label>Main content</Form.Label>
        <FloatingLabel
          controlId='floatingTextarea2'
          label='Leave a comment here'
          className='text-muted'
        >
          <Form.Control
            as='textarea'
            placeholder='Leave a comment here'
            style={{ height: '200px' }}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>

      <Button
        className='mt-3'
        type='submit'
        variant='primary'
      >
        {/* {actionText}  */}
      </Button>
    </Form>
  );
};
export default PostForm;
