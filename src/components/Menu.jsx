function Menu({items, activeItem, onItemClick}){
    return(
        <nav style={navStyle}>
      <ul style={ulStyle}>
        {items.map((item) => (
          <li
            key={item}
            style={{
              ...liStyle,
              color: item === activeItem ? "blue" : "black",
              textDecoration: item === activeItem ? "underline" : "none",
            }}
            onClick={() => onItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const navStyle = {
    backgroundColor: "#f5f5f5",
    padding: '1rem',
};

const ulStyle = {
    display: "flex",
    listStyle: "none",
    justifyContent: "center",
    gap: "2rem",
    padding: 0,
    margin: 0,
  };
  
  const liStyle = {
    cursor: "pointer",
    fontWeight: "bold",
  };

  export default Menu;