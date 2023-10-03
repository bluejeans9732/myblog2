

export default function Write(){
    return (
        <div className="bg-gray-200 p-20">
            <h4>글 작성</h4>
            <form action="/api/post/new" method="POST" className="flex flex-col">
                <input name="title" placeholder="글제목"/>
                <input name="content" placeholder="글내용"/>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}