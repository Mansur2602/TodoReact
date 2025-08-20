const now = new Date();
const Time = () =>
{
    return(
        <>
        <h1>{now.getHours()}</h1>
        <h1>{now.getHours() > 18 || now.getHours() < 9 ? "Извините, мы не работаем" : "Здраствуйте"}</h1>
        </>
        
    )
}
export default Time