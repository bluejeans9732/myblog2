import { fetchPosts } from '@/utils/fetchdata';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await fetchPosts();
      res.status(200).json({ posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
      res.status(500).json({ error: 'Unable to fetch posts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}