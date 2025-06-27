
import React, { useState } from 'react';
import { generateDocumentation, commitReadme } from './services/apiService';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import GitHubForm from './components/GitHubForm';
import MarkdownEditor from './components/MarkdownEditor';
import Notification from './components/Notification';

function App() {
  const [credentials, setCredentials] = useState(null);
  const [markdownContent, setMarkdownContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleAsyncOperation = async (apiCall, onSuccess) => {
    setIsLoading(true);
    setNotification({ message: '', type: '' });
    try {
      const result = await apiCall();
      onSuccess(result);
    } catch (err) {
      setNotification({ message: err.message, type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerate = (formData) => {
    setCredentials(formData);
    setMarkdownContent('');
    handleAsyncOperation(
      () => generateDocumentation(formData),
      (generatedContent) => setMarkdownContent(generatedContent)
    );
  };

  const handleCommit = () => {
    if (!credentials || !markdownContent) return;
    const commitData = { ...credentials, markdownContent };
    handleAsyncOperation(
      () => commitReadme(commitData),
      (successMessage) => {
        setNotification({ message: successMessage, type: 'success' });
        setMarkdownContent('');
      }
    );
  };

  return (
    <Container className="py-4">
      <Header />
      <main>
        <GitHubForm onGenerate={handleGenerate} isLoading={isLoading} />
        <Notification message={notification.message} type={notification.type} />
        {markdownContent && (
          <MarkdownEditor
            content={markdownContent}
            onContentChange={setMarkdownContent}
            onCommit={handleCommit}
            isLoading={isLoading}
          />
        )}
      </main>
    </Container>
  );
}

export default App;