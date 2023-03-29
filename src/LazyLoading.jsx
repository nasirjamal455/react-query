import { useQuery } from 'react-query';
import { Suspense } from 'react';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

const LazyLoading = () => {
  const { data, isLoading } = useQuery('myData', fetchData, {
    lazy: true,
  });
console.log("data", data)
  return (
    <div>
      <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
            <ul>
            {data?.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
      </Suspense>
    </div>
  );
};

export default LazyLoading;
