export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Missing GEMINI_API_KEY on server.' });
  }

  const body = req.body || {};
  const prompt = typeof body.prompt === 'string' ? body.prompt : '';
  const isJson = Boolean(body.isJson);
  const systemInstruction = typeof body.systemInstruction === 'string' ? body.systemInstruction : '';

  if (!prompt.trim()) {
    return res.status(400).json({ error: 'Prompt is required.' });
  }

  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  if (systemInstruction.trim()) {
    payload.systemInstruction = { parts: [{ text: systemInstruction }] };
  }

  if (isJson) {
    payload.generationConfig = { responseMimeType: 'application/json' };
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = data?.error?.message || `Gemini request failed with HTTP ${response.status}`;
      return res.status(response.status).json({ error: message });
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text || typeof text !== 'string') {
      return res.status(502).json({ error: 'Gemini returned an empty response.' });
    }

    return res.status(200).json({ text });
  } catch (error) {
    return res.status(502).json({ error: error?.message || 'Failed to reach Gemini.' });
  }
}
