const Child = ({info}) => {


    return (  
        <>
        {info.map((infos)=>(
            <div className="">
                {infos.name}
            </div>
        ))}
        </>
    );
}
 
export default Child;