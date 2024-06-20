import React from "react";

const SearchBar = () => {
  return (
    // <div>
    <div className=" max-sm:hidden w-2/3  flex justify-between items-center gap-2  ">
       <form className="h-full ">
            <div className=" flex text-gray-900 border-[1px] border-[#262627] rounded-full text-sm overflow-hidden  ">
            <input type="text" placeholder="Search" className="bg-black no-underline outline-none md:w-56 lg:w-[500px] pl-3 placeholder:text-base"/>
            <div className="bg-[#262627] h-full w-14 flex justify-center items-center py-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
            
            </div>
       </form>
       <div className="speaker bg-[#262627] rounded-full inline-flex items-center justify-center w-10 h-10 px-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            fill="white"
          >
            <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
          </svg>
        </div>
    {/* <div className="main max-sm:hidden  flex gap-3  w-[400px]">
        <div className="searchbar  flex items-center border-[1px] border-[#262627] pl-4 rounded-full overflow-hidden ">
          <input type="text" placeholder="Search" className="bg-black no-underline outline-none " />
          <div className="bg-[#262627] h-full w-16 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        
      </div> */}
    </div>

    
  );
};

export default SearchBar;
