function Menu(){
    const handleClick =(item) => {
        alert(`vous avez cliqué sur : ${item}`);
    };

    return(
        <nav style={navStyle}>
            <ul style={ulStyle}>
                {["Notes", "Etudiants", "Matières", "A propos"].map((item)=>(
                    <li key={item} style={liStyle} onClick={() => handleClick(item)}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

const navStyle = {
    padding: '1rem',
};

const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'center',
    gap: '2rem',
    padding: 0,
    margin: 0,
  };
  
  const liStyle = {
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  export default Menu;