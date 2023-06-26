'use client'

const Button = () => {

  const handleClick = () => alert('button clicked');

  return (
    <button style={{width: "50px", float: "right"}} onClick={handleClick}>click me</button>
  );
};

export default Button;