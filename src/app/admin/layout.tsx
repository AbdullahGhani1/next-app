import Image from 'next/image';
interface Props {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <div className="flex  bg-base-100">
        <aside className="bg-slate-200 p-5 mr-5 h-[100vh]">Admin Sidebar</aside>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default AdminLayout;
