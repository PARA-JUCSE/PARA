import "../index.css";
import "./PostButton.css";

function PostButton({handleClick, children, style}) {
  return (
    <div className="pst-btn" onClick={handleClick} style={style} >
      <h2>{children}</h2>
    </div>
  );
}

export default PostButton;