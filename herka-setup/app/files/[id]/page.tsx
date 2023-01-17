async function FilePage(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  const data = await response.json();
  return data;
}

export default async function generateStaticParams({ params }: any) {
  const file = await FilePage(params.id);

  return (
    <div className="">
      <p>{file.body}</p>
    </div>
  );
}
