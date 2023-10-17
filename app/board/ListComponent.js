'use client'

import Link from 'next/link';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { useEffect, useState } from 'react';

export default function ListComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/lists');
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts);
        } else {
          console.error('Error fetching posts:', response.status);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='list-none bg-gray-200 p-[10px]'>
      {posts && posts.map((post, i) => (
        <div className='list-item' key={i}>
          <Link href={`/board/${post._id}`}>
            <h4>{post.title}</h4>
          </Link>
          <div className='flex justify-between'>
            <p>{post.content}</p>
            <div className='flex'>
              <EditButton postId={JSON.parse(JSON.stringify(post._id))} />
              <DeleteButton postId={JSON.parse(JSON.stringify(post._id))} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}