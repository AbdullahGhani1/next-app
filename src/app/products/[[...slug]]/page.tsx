import { useRouter } from 'next/router';

interface Props {
  params: {
    slug: String[];
  };
  searchParams: {
    sortOrders: String;
  };
}
const DynamicRoute = ({
  params: { slug },
  searchParams: { sortOrders },
}: Props) => {
  return (
    <div>
      DynamicRoute <span className="flex gap-2 bg-amber-400">{slug}</span>
      {sortOrders}
    </div>
  );
};
export default DynamicRoute;
