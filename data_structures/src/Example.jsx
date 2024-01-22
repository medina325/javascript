export default function Example({ name, component }) {
  return (
    <div className="example">
      <h3>{name}</h3>
      {component}
    </div>
  );
}
