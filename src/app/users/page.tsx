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

      <UserTables sortOrder={sortOrder} />
    </>
  );
};
export default page;
