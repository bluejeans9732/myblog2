'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'

export default function admin() {
  const router = useRouter();

  useEffect(() => {
    fetch('/api/session') 
      .then(response => response.json())
      .then(data => {
        if (!data.admin) { 
          router.push('/'); 
        }
      })
  }, []);

  return (
    <div>
      관리자
    </div>
  )
}
