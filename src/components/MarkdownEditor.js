import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import Spinner from './Spinner'; // Importando nosso componente Spinner

const MarkdownEditor = ({ content, onContentChange, onCommit, isLoading }) => (
  <Card bg="dark" className="mt-4">
    <Card.Body>
      <Card.Title className='label-form'>Conteúdo Gerado</Card.Title>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={15}
          value={content}
          onChange={(e) => onContentChange(e.target.value)}
          className="font-monospace"
        />
      </Form.Group>
      <div className="d-grid mt-3">
        <Button variant="success" onClick={onCommit} disabled={isLoading}>
          {isLoading ? <Spinner text="Commitando..." /> : 'Commitar no Repositório'}
        </Button>
      </div>
    </Card.Body>
  </Card>
);

export default MarkdownEditor;