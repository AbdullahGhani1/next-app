import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex bg-slate-200  items-center p-5">
      <Link href="/" className="mr-5">
        NextJs
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/products" className="mr-5">
        Products
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
    </div>
  );
};
export default Navbar;
