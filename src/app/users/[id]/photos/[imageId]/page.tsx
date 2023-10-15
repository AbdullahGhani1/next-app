interface Props {
  params: {
    imageId: string;
  };
}
const Photes = ({ params: { imageId } }: Props) => {
  return <div>Photes {imageId}</div>;
};
export default Photes;
