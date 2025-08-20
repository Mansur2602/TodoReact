const Content = ({value, setValue}) =>
{
    return(
        <>
        <div className="content">
            <p>{value}</p>
            <input value = {value} onChange={(e) => setValue(e.target.value)} className="content__input"/>
        </div>
        </>
    )
}
export default Content;