import Link from 'next/link';
import UserTables from './UserTables';

interface QueryParams {
  searchParams: {
    sortOrder: string;
  };
}

const page = ({ searchParams: { sortOrder } }: QueryParams) => {
  return (
    <>
      <h1>{sortOrder != null ? sortOrder : 'Users'}</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTables sortOrder={sortOrder} />
    </>
  );
};
export default page;
