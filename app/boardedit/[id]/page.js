import { connectDB } from '@/utils/database'
import { ObjectId } from "mongodb";

export default async function boardedit(props) {

    const client = await connectDB();
    const db = client.db('practsx');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    return (
        <div className=''>
          <div className='p-4 rounded-xl shadow-xl bg-white'>
            <h4 className='mb-3 mt-8 text-center text-2xl text-cyan-900 font-bold'>
              글 수정
            </h4>
            <form action="/api/post/edit" method="POST">
              <div className='flex mt-10 mb-10'>
                <div className='mr-2 text-cyan-900 font-bold p-2'>제목 : </div>
                <input
                  name='title'
                  className='ml-4 w-[75%] flex border-2 p-2 focus:outline-none '
                  defaultValue={result.title}
                />
              </div>
              <div className='flex mt-10 mb-10'>
                <div className='mr-2 text-cyan-900 font-bold p-2'>내용 : </div>
                <input
                  name='content'
                  className='mb-10 ml-4 w-[75%] flex p-2 border-2 focus:outline-none'
                  defaultValue={result.content}
                />
              </div>
              <input
                name='_id'
                className='mb-2 p-2 hidden'
                defaultValue={result._id.toString()}
              />
              <button
                type='submit'
                className='bg-emerald-300 rounded-lg mx-auto p-2 block'
              >
                테스트 글수정 버튼
              </button>
            </form>
          </div>
        </div>
      );
    
}