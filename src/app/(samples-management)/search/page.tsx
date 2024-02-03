export default async function Search() {
  console.log('############################## rendering search page');

  const response  = await fetch(`${process.env.REST_API_URL}/test-samples`, { cache: 'no-store' });

  const data = await response.json();

  console.log('############################## date', Date.now());
  console.log('############################## data', data);

  return (
    <div>
      <div>this is search page {data.data.length}</div>
      <div>{Date.now()}</div>
    </div>
  )
}

export const revalidate = 0;
