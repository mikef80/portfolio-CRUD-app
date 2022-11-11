import React from "react";

const TextBox = () => {
  return (
    <div>
      <form action="" >
        <input type="text" name="task-box" id="task-box" className="border-solid border-2 disabled:border-black enabled:hover:border-red-500" />
      </form>
    </div>
  );
};

export default TextBox;
