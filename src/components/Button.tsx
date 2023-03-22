
const Button = ({ children, className, onClick }:any) => {
    return (
        <button
            className={`p-2 rounded-md hover:scale-125 ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button

//hover:ring-2 hover:ring-gray-800 dark:hover:ring-gray-300