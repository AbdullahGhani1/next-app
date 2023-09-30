import Link from 'next/link';

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

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    // cache:'no-store'
    next: {
      revalidate: 10,
    },
  });
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>
                <Link href={`/users/${user.id}`}>{user.email}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default page;
