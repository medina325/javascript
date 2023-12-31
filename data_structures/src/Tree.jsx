// Trees are nested data structures, where elements
// (nodes, edges, parents, etc.) can have many
//  children, and children only have one parent.

// Example: let's represent a menu of nested items, for example,
// we could have a website for a restaurant, with nested options of meals.

// Challenge: this time implement it using React. The idea is to map the data
// structure to a nested HTML list.

const menu = [
  {
    name: "Almoço",
    children: [
      {
        name: "Vegano",
        children: [
          {name: "Salada Ceaser"},
          {name: "Salada do Verão"},
          {name: "Salada de Azeitonas"},
          {name: "Salada de Folhas"},
        ],
      },
      {
        name: "Carnívoro",
        children: [
          {
            name: "T-Bone Steak",
            children: [{name: "Well Done"}, {name: "Bloody"}],
          },
          {name: "Bife Acebolado"},
          {name: "Smack Burger"},
          {name: "Tonkatsu"},
        ],
      },
    ],
  },
  {
    name: "Janta",
    children: [
      {
        name: "Leve",
        children: [{name: "Prensadão"}],
      },
      {
        name: "Pesado",
        children: [{name: "Mexido"}],
      },
    ],
  },
];

const NestedMenu = ({menu}) => {
  return (
    <ul>
      {menu.map(({name, children}, idx) => (
        <li key={idx}>
          {name}
          {children && <NestedMenu menu={children} />}
        </li>
      ))}
    </ul>
  );
};

const RootMenu = () => <NestedMenu menu={menu} />;

export default function Tree() {
  return <RootMenu />;
}
