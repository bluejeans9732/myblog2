

export default function Write(){
    return (
        <main>
            <div className=''>
                <h4 className='mb-3 mt-8 text-center text-2xl text-cyan-900 font-bold'>
                글 작성
                </h4>
                <form action="/api/post/new" method="POST" className="flex flex-col h-[60vh]">
                    <input 
                        name="title" 
                        placeholder="글제목"
                        className="mt-4 flex border-2 focus:outline-none"
                    />
                    <textarea 
                        name="content"
                        style={{ height: '200px', resize: 'none', overflowY: 'auto' }}
                        placeholder="글내용"
                        className="mt-[16px] border-[2px] p-[8px] focus:outline-none"
                    />
                    <button
                        type='submit'
                        className='bg-cyan-700/75 text-white rounded-lg mx-auto p-4 mt-40'
                    >
                        작성하기
                    </button>
                </form>
            </div>  
        </main>
    )
}
