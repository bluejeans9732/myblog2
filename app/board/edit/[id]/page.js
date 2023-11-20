import { connectDB } from '@/utils/database'
import { ObjectId } from "mongodb";
import Textarea from './textarea';

export default async function boardedit(props) {

    const client = await connectDB();
    const db = client.db('practsx');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    return (
        <main>
          <div className=''>
            <h4 className='mb-3 mt-8 text-center text-2xl text-cyan-900 font-bold'>
              글 수정
            </h4>
            <form action="/api/post/edit" method="POST" className='h-[60vh]'>
              <div className='flex flex-col mt-10 mb-10'>
                <div className='text-cyan-900 font-bold p-2'>제목</div>
                <input
                  name='title'
                  className='mt-4 flex border-2 p-2 focus:outline-none '
                  defaultValue={result.title}
                />
              </div>
              <div className='flex flex-col mt-10 mb-10'>
                <div className='text-cyan-900 font-bold p-2'>내용</div>
                <textarea
                  name="content"
                  style={{ height: '200px', resize: 'none', overflowY: 'auto' }}
                  className="mt-[16px] border-[2px] p-[8px] focus:outline-none"
                  defaultValue={result.content}
                ></textarea>
              </div>
              <input
                name='_id'
                className='mb-2 p-2 hidden'
                defaultValue={result._id.toString()}
              />
              <div className="w-full flex justify-center">
                 <button
                    type='submit'
                    className='bg-cyan-700/75 text-white rounded-lg p-4 mt-10'
                 >
                  수정하기
                 </button> 
               </div>  
            </form>
          </div>
        </main>
      );
    
}