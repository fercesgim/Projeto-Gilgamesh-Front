const API_BASE_URL = 'http://localhost:8080/api/documentation';

const callApi = async (endpoint, body) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const responseText = await response.text();
  if (!response.ok) {
    throw new Error(responseText || `Erro na chamada para ${endpoint}`);
  }
  return responseText;
};

export const generateDocumentation = (credentials) => {
  return callApi('/generate', credentials);
};

export const commitReadme = (commitData) => {
  return callApi('/commit', commitData);
};