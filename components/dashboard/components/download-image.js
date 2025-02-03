// pages/api/download-image.js
export default async function handler(req, res) {
    const { imageUrl } = req.query;
  
    try {
      if (!imageUrl) {
        return res.status(400).json({ error: 'Image URL is required' });
      }
  
      const response = await fetch(imageUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status}`);
      }
  
      const contentType = response.headers.get('content-type');
      const arrayBuffer = await response.arrayBuffer();
  
      // Set appropriate headers
      res.setHeader('Content-Type', contentType);
      res.setHeader('Content-Disposition', 'attachment; filename=generated-image.png');
      
      // Send the image data
      res.status(200).send(Buffer.from(arrayBuffer));
    } catch (error) {
      console.error('Download error:', error);
      res.status(500).json({ error: 'Failed to download image' });
    }
  }