import React from "react";
/**
 *
 * @returns Header components
 */
const Header = () => {
  return (
    <header className="w-full">
      <div className="flex flex-1 justify-end mt-4 p-12">
        <div className="flex ">
          <ul className="flex flex-row justify-end gap-6">
            <li className="text-black  flex justify-end">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Book</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="">
                <button>Login/Signup</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
