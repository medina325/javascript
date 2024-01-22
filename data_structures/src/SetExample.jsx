import { useState } from "react";

const options = [
  { id: 1, name: "Ice Cream" },
  { id: 2, name: "Cake" },
  { id: 3, name: "Brownie" },
  { id: 4, name: "Cheesecake" },
  { id: 5, name: "Cookie" },
  { id: 6, name: "Pudding" },
  { id: 7, name: "Donut" },
  { id: 8, name: "Cupcake" },
  { id: 9, name: "Fruit Tart" },
  { id: 10, name: "Macaron" },
];

export default function SetExample() {
  const [selectedOptions, setSelectedOptions] = useState(new Set());

  const handleOnChange = (id) => {
    // A ideia em react é que nós não mexemos direto nas variáveis
    // de estado do componente
    const upToDateIds = new Set(selectedOptions);

    if (upToDateIds.has(id)) {
      setSelectedOptions(upToDateIds.delete(id));
    } else {
      setSelectedOptions(upToDateIds.add(id));
    }

    setSelectedOptions(upToDateIds);
  };

  return (
    <table>
      <tbody>
        {options.map(({ id, name }) => (
          <tr key={id}>
            <td>
              <input
                type="checkbox"
                checked={selectedOptions.has(id)}
                onChange={() => handleOnChange(id)}
              />
            </td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
