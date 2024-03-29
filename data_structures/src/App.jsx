import Example from "./Example.jsx";
import FlatTree from "./FlatTree.jsx";
import MapExample from "./MapExample.jsx";
import NaiveMap from "./NaiveMap.jsx";
import Queue from "./Queue.jsx";
import SetExample from "./SetExample.jsx";
import Stack from "./Stack.jsx";
import Tree from "./Tree.jsx";

export default function App() {
  return (
    <div className="container">
      <Example name="Tree" component={<Tree />} />
      <Example name="Flat Tree" component={<FlatTree />} />
      <Example name="Naive Map" component={<NaiveMap />} />
      <Example name="Map" component={<MapExample />} />
      <Example name="Set" component={<SetExample />} />
      <Example name="Queue" component={<Queue />} />
      <Example name="Stack" component={<Stack />} />
    </div>
  );
}
