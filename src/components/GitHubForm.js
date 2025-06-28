// src/components/GitHubForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import Spinner from './Spinner'; // Importando nosso componente Spinner

const GitHubForm = ({ onGenerate, isLoading }) => {
  const [formData, setFormData] = useState({
    username: '',
    repositoryName: '',
    githubToken: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <Card bg="dark">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className='label-form'>Usuário do GitHub</Form.Label>
                <Form.Control type="text" name="username" value={formData.username} onChange={handleInputChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className='label-form'>Nome do Repositório</Form.Label>
                <Form.Control type="text" name="repositoryName" value={formData.repositoryName} onChange={handleInputChange} required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group>
                <Form.Label className='label-form'>Token do GitHub</Form.Label>
                <Form.Control type="password" name="githubToken" value={formData.githubToken} onChange={handleInputChange} required />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <div className="d-grid">
                <Button variant="primary" type="submit" disabled={isLoading}>
                  {isLoading ? <Spinner text="Gerando..." /> : 'Gerar Documentação'}
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default GitHubForm;