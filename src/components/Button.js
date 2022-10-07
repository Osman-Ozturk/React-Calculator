import '../styles/Button.css'

const Button = ({ symbol, bg, onClick }) => {
  return (
    <div
      onClick={() => onClick(symbol)}
      className="button"
      style={{ backgroundColor: bg }}
    >
      {symbol}
    </div>
  );
};

export default Button;