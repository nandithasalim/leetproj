import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

// Get API key from environment variable or use placeholder
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'YOUR_API_KEY_HERE';

const app = express();

// ✅ Enable CORS for all routes & methods
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

app.post('/explain', async (req, res) => {
  const { code } = req.body;

  if (!code || !code.trim()) {
    return res.status(400).json({ error: 'Code is required' });
  }

  try {
    // Split code into lines for line-by-line analysis
    const codeLines = code.split('\n').filter(line => line.trim() !== '');
    
    const prompt = `Explain this code line by line in simple terms. For each line, just tell me what that line does in one sentence.

Format your response as:
Line 1: [simple explanation of what this line does]
Line 2: [simple explanation of what this line does]
...and so on.

Code to analyze:
${code}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAbgVJ1wAhfshIbQoCKWXhi_QKv45WupQM`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 2048,
          }
        }),
      }
    );

    const data = await response.json();
    
    if (data.error) {
      console.error('Gemini API Error:', data.error);
      return res.status(500).json({ error: 'API Error: ' + data.error.message });
    }

    const explanation = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No explanation generated.';
    res.json({ explanation, codeLines });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Failed to fetch explanation' });
  }
});

app.listen(3001, () => console.log('✅ Server running on http://localhost:3001'));
