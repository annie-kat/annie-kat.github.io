
const style = {
    background: "#fff",
    border: "2px solid lightblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none"
  };
  
  function Box({ letter, onClick }) {
    return (
      <button style={style} onClick={onClick}>
        {letter}
      </button>
    );
  }
  
  export default Box;