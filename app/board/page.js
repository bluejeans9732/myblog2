import ListComponent from './ListComponent';
import WriteButton from './WriteButton';


async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lists`, { cache: 'no-store' });
  
  return res.json();
}

export default async function Page() {
  const data = await getData();

   return (
      <main>
         <ListComponent posts={data.posts} />
         <WriteButton />
      </main>
   );
}
