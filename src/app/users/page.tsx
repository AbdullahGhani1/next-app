import Link from 'next/link';
import { sort } from 'fast-sort';
interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
    phone: string;
    website: string;
  };
}

interface QueryParams {
  searchParams: {
    sortOrder: string;
  };
}

const page = async ({ searchParams: { sortOrder } }: QueryParams) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache:'no-store'
    next: {
      revalidate: 10,
    },
  });
  const users: User[] = await res.json();
  const sorted = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );
  return (
    <>
      <h1>{sortOrder} Page</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted
            .map((user) => (
              <tr key={user.id}>
                <td>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </td>
                <td>
                  <Link href={`/users/${user.id}`}>{user.email}</Link>
                </td>
              </tr>
            ))
            .sort()}
        </tbody>
      </table>
    </>
  );
};
export default page;
