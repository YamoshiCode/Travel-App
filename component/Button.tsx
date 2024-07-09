type Buttonprops = {
    title : string
    iconcond : boolean
    color : string
}

const Button = ({title , iconcond , color}:Buttonprops) => {
  return (
<button
        title={title}
        iconcond = {iconcond}
        color= {color}
        className={`${color} marker:flex items-center py-3 flex px-8 me-2 mb-2 text-lg font-medium text-white focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}
      >
        { iconcond && (
        <svg
          className="h-9 w-9 text-white pr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        )}
        <span>{title}</span>
      </button>
  )
}

export default Button;
