
const Tarjeta = ({ children, className, onClick }: any) => {
    return (
        <div
            className={`grid m-auto w-fit p-12  bg-white/30 dark:bg-black/30  dark:border-white/20  shadow-lg shadow-black  rounded-xl ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default Tarjeta