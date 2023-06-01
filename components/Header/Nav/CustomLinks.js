import React from 'react'

const CustomLinks = ({}) => {
  return (
    <div className="relative group z-[100]">
    <button
      onClick={setIsAbout}
      className="text-[#201F54] hover:text-black hover:font-bold px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
    >
      Dropdown
    </button>
    {isAbout && (
      <div className="absolute  left-0 mt-2 w-48 bg-white py-2 rounded-md shadow-lg">
        <Link href="/page1"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Page 1
        </Link>
        <Link href="/page2"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Page 2
        </Link>
      </div>
    )}
  </div>
  )
}

export default CustomLinks