'use client'

import Link from 'next/link';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default function ListComponent({ posts }) {
  return (
    <div className='list-none bg-gray-200 p-[10px]'>
      {posts.map((post, i) => (
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
