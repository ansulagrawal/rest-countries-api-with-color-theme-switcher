import React from "react";

export default function Error() {
  return (
    <div className="text-color text-center flex flex-col gap-10 justify-center items-center ease-in-out duration-300">
      <h2 className="font-semiBold text-5xl">Oops Error 404</h2>
      <p className="text-xl">This error message is commonly seen on websites when a page or resource cannot be found!</p>
      <p className="text-lg">Please verify your url.</p>
    </div>
  );
}
