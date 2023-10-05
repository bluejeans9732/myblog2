import { connectDB } from '@/utils/database'
import Link from 'next/link';
import DeleteButton from './DeleteButton'

export default async function ListComponent() {

    const client = await connectDB;
    const db = client.db('practsx');
    let result = await db.collection('post').find().toArray();
    
    return (
        <div className='list-none bg-gray-200 p-[10px]'>
            { 
                result.map((post, i) => (
                    <div className='list-item' key={i}>
                      <Link href={`/board/${post._id}`}>
                        <h4>{post.title}</h4>
                      </Link>
                      <div className='flex justify-between'>
                        <p>{post.content}</p>
                        <DeleteButton postId={JSON.parse(JSON.stringify(post._id))} />
                      </div>
                    </div>
                  ))
            }
        </div>
    )
}