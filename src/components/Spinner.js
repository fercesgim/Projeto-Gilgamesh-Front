import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

// Este componente encapsula o Spinner do Bootstrap para ser reutilizado
const Spinner = ({ text = 'Carregando...' }) => (
  <>
    <BootstrapSpinner
      as="span"
      animation="border"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    <span className="ms-2">{text}</span>
  </>
);

export default Spinner;