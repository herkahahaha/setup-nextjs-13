// fetch data like serverSide

import Link from "next/link";

async function getSample() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sample`);
  const data = response.json();
  return data as unknown as any[];
}

export default async function Files() {
  const mutations = await getSample();
  // const shortMutate = mutations.slice(0, 9);

  return (
    <div className="">
      <h3>From file page</h3>
      {mutations?.map(({ title, id }) => {
        return (
          <div key={id} className="">
            <Link href={`/files/${id}`}>
              <p>{title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
