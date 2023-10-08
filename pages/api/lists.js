import { fetchPosts } from '@/utils/fetchdata';

export default async function handler(요청, 응답) {
  if (요청.method === 'GET') {
    try {
      const posts = await fetchPosts();
      응답.status(200).json({ posts });
    } catch (error) {
      console.error('Error fetching posts:', error);
      응답.status(500).json({ error: 'Unable to fetch posts' });
    }
  } else {
    응답.status(405).json({ error: 'Method not allowed' });
  }
}