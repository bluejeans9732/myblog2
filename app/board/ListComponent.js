'use client'

import Link from 'next/link';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import SearchBar from './SearchBar';
import React, { useEffect, useState } from 'react';


export default function ListComponent() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (value) => setSearchTerm(value);

  const filteredPosts = searchTerm 
    ? posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : posts;
  
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6'>
      <SearchBar onSearch={handleSearch} />
      {filteredPosts.map((post, i) => (
        <article class="p-6 mb-4 bg-white rounded-lg border border-gray-200 shadow-md " >        
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <Link href={`/board/${post._id}`}>
                {post.title}
              </Link>
            </h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap" style={{ maxWidth: '400px' }}>
              {post.content}
            </p>
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img className="w-7 h-7 rounded-full" src={post.image} alt={post.name} />
                    <span className="font-medium">
                      {post.name}
                    </span>
                </div>
                <div className='flex'>
                  <EditButton postId={JSON.parse(JSON.stringify(post._id))} />
                  <DeleteButton postId={JSON.parse(JSON.stringify(post._id))} />
                </div>
            </div>
        </article> 
      ))}
    </div>
  );
}