const Button = ({message})=>{
    console.log(message);
    
    return (
        <>
        <button className="px-4 py-2 m-1 border rounded">{message}</button>
        </>
    );
}
export default Button;