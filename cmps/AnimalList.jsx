export function AnimalList(props) {
  return (
      <section className="animal-list">
        <h2 className={"animal-header"}>Rare Animals</h2>
        <table>
          {props.animals.map(animal =>
              <tr key={animal.type}>
                <th>{animal.type}</th>
                <th>{animal.count}</th>
                <th><a href={`https://www.google.com/search?q=${animal.type}`}>Search</a></th>
              </tr>
          )}
        </table>
      </section>
  )
}