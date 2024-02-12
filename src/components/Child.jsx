
const Child = (props) => {
  const { a, b } = props;

  return (
    <div className="bg-red-300 text-xl ">
      <h2 className="text-center">{a}</h2>
      <h2 className="text-center">{b}</h2>
    </div>
  );
};

export default Child;
