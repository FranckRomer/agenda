
const MsgError = ({titulo, msg}:any) => {
    return (
        <div className='error text-center my-4 p-4 rounded-xl bg-red-500 text-white dark:bg-red-600 '>
            <h2 className="text-xl font-semibold">
                {titulo}
            </h2>
            <p>
                {msg}
            </p>
        </div>
    )
}

export default MsgError