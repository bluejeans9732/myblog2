import { connectDB } from '@/utils/database'
import Link from 'next/link';

export default async function ListComponent() {

    const client = await connectDB;
    const db = client.db('practsx');
    let result = await db.collection('post').find().toArray();
    
    return (
        <div className='list-none bg-gray-200 p-[10px]'>
            { 
                result.map((a,i)=>
                    <div className="list-item" key={i}>
                    <Link href={'/board/' + result[i]._id}>
                        <h4>{result[i].title}</h4>
                    </Link>
                    <p>{result[i].content}</p>
                    </div>
                )
            }
        </div>
    )
}