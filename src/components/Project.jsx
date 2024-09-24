function List(props) {
    return (
      <ul className="list-group">
        {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
        {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
        {props.projects.map(project => (
          <li className="list-group-item" key={project.id}>
            {project.title} 
            {project.link}
            {project.github}
          </li>
        ))}
      </ul>
    );
  }
  export default List;