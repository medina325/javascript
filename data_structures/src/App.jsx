import FlatTree from "./FlatTree.jsx";
import Tree from "./Tree.jsx";

export default function App() {
  return (
    <div className="container">
      <div className="example">
        <h3>Tree</h3>
        <Tree />
      </div>
      <div className="example">
        <h3>Flat Tree</h3>
        <FlatTree />
      </div>
    </div>
  );
}
