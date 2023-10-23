import { connectDB } from '@/utils/database'
import { ObjectId } from "mongodb";

export default async function board(props) {

    const client = await connectDB();
    const db = client.db('practsx');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col w-[70vw]">
                <h4 className='mb-3 mt-8 text-center text-2xl text-cyan-900 font-bold'>
                    {result.title}
                </h4>
                <div
                    className='text-wrap mt-10'
                    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                >
                    {result.content}
                </div>
            </div>
        </div>
    )
    
}