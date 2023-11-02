import { connectDB } from '@/utils/database'
import { ObjectId } from "mongodb";

import { getServerSession } from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'

import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';
import Comment from './Comment';

export default async function board(props) {
    let session = await getServerSession(authOptions)

    const client = await connectDB();
    const db = client.db('practsx');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    /**보이는 조건 현재로그인 이메일 == 글쓴사람 아이이 + guest 추후 마스터 권한 조건 추가 완료 */
    let showButtons = (session?.user?.email === result.author) || (result.name === 'guest') || (session?.user?.role === 'administrator');

    return (
        <div className="flex items-center justify-center py-8 px-4 mx-auto max-w-screen-xl lg:py-6 lg:px-6">
            <div className="flex flex-col w-[70vw]">
                <h4 className='mb-3 mt-8 text-center text-2xl text-cyan-900 font-bold'>
                        {result.title}
                </h4>
                {showButtons && (
                    <div className='flex justify-end '>
                        <EditButton postId={JSON.parse(JSON.stringify(result._id))} />
                        <DeleteButton postId={JSON.parse(JSON.stringify(result._id))} />
                    </div>
                )}
                
                <div
                    className='text-wrap mt-24'
                    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                >
                    {result.content}
                </div>
                <Comment _id={result._id.toString()}/>
            </div>
        </div>
    )
    
}