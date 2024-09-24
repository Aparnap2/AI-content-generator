export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { template, description } = req.body;
  
      // Query the Gemini API for a static website template
      try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
          },
          body: JSON.stringify({
            query: `Generate a static website template for a ${template} website with the following details: ${description}`,
          }),
        });
  
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch from Gemini API' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  