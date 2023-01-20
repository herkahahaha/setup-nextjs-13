async function FilePage(id: string) {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`,
  //   {
  //     next: {
  //       revalidate: 10,
  //     },
  //   },
  // );
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/sample/${id}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  const data = await response.json();
  return data;
}

export default async function File({ params: { id } }: any) {
  const dataStore = await FilePage(id);
  return (
    <>
      <p>{dataStore.body}</p>
    </>
  );
}

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/sample/`, {
    next: {
      revalidate: 10,
    },
  });
  const data = await response.json();
  return data.map((val: any) => ({
    id: val.id.toString(),
  }));
}
