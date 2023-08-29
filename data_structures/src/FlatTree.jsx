const flatMenu = [
    {id: 1, name: "Almoço", children: [2, 7], isRoot: true},
    {id: 2, name: "Vegano", children: [3, 4, 5, 6]},
    {id: 3, name: "Salada Ceaser"},
    {id: 4, name: "Salada do Verão" },
    {id: 5, name: "Salada de Azeitonas" },
    {id: 6, name: "Salada de Folhas" },
    {id: 7, name: "Carnívoro", children: [8, 9, 10, 11]},
    {id: 8, name: "T-Bone Steak", children: [15, 16]},
    {id: 9, name: "Bife Acebolado" },
    {id: 10, name: "Smack Burger" },
    {id: 11, name: "Tonkatsu" },
    {id: 12, name: "Janta", children: [13, 14], isRoot: true},
    {id: 13, name: "Leve", children: [17]},
    {id: 14, name: "Pesado", children: [18]},
    {id: 15, name: "Well Done" },
    {id: 16, name: "Bloody" },
    {id: 17, name: "Prensadão" },
    {id: 18, name: "Mexido" }
]

const MenuItem = (({ id, items }) => {
    const item = items[id]
    
    if (item.children) {
        return (
            <>
            <li>
                {item.name}
            </li>
            <NestedMenu key={id} ids={item.children} items={items} />
            </>
        )
    }

    return (
        <li>{item.name}</li>
    )
})

const NestedMenu = ({ ids, items }) => {
    return (
        <ul>
            {ids.map((id) => (
                <MenuItem key={id} id={id} items={items} />
            ))}
        </ul>
    )
}

const RootMenu = () => {
    const itemsIds = flatMenu
    .filter((item) => item.isRoot)
    .map((item) => item.id)
    
    const itemsById = flatMenu.reduce(
        (prev, item) => ({ 
            ...prev, 
            // [item.id]: {name: item.name, children: item.children, isRoot: item.isRoot} }),
            [item.id]: {...item} }),
        {}
    )

    return <NestedMenu ids={itemsIds} items={itemsById} />
}

export default function FlatTree() {
    return <RootMenu />
}