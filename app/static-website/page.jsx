'use client'
import { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Input } from '@nextui-org/input';

export default function StaticWebsiteGenerator() {
  const [template, setTemplate] = useState('portfolio');
  const [description, setDescription] = useState('');
  const [generatedWebsite, setGeneratedWebsite] = useState('');

  const generateWebsite = async () => {
    try {
      const res = await fetch('/api/website', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ template, description }),
      });
      const data = await res.json();
      setGeneratedWebsite(data.result);
    } catch (error) {
      console.error('Error generating website:', error);
    }
  };

  return (
    <div className="container">
      <h2>Generate Static Website</h2>
      <Listbox value={template} onChange={(e) => setTemplate(e.target.value)}>
        <ListboxItem.Option value="e-commerce">E-commerce</ListboxItem.Option>
        <ListboxItem.Option value="portfolio">Portfolio</ListboxItem.Option>
        <ListboxItem.Option value="blog">Blog</ListboxItem.Option>
      </Listbox>
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description of the website"
        rows={5}
      />
      <Button onClick={generateWebsite}>Generate Website</Button>
      {generatedWebsite && (
        <div>
          <h3>Generated Website:</h3>
          <pre>{generatedWebsite}</pre>
        </div>
      )}
    </div>
  );
}