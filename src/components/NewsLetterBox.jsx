import React from "react";

function NewsLetterBox() {

    const onSubmitHandler = (event)=>{
     event.preventDefault()
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-slate-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-slate-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nihil
        fugiat officiis quisquam a minima cumque atque. Facilis quasi maxime,
        placeat dolore excepturi, magni porro voluptates molestiae maiores
        deleniti illum.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
