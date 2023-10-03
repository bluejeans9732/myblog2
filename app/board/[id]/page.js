import { connectDB } from '@/utils/database'
import { ObjectId } from "mongodb";

export default async function board(props) {

    const client = await connectDB;
    const db = client.db('practsx');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    return (
        <div className="">
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}