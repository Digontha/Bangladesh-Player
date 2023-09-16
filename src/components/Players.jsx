


const Players = ({ data ,handleName}) => {
    const { name,age,img,player_role, } = data;
    
    return (
        <div className="card w-[300px] mx-auto lg:w-[300px] bg-base-100 shadow-xl border">
            <figure><img className=" w-[200px] md:w-[200px] h-fit" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="font-bold">Age: {age}</p>
                <p className="font-bold">Role: {player_role}</p>
                <div  className="card-actions justify-between">
                   <div onClick={()=>{handleName(data)}}>
                   <button className="btn btn-primary">Select</button>
                   </div>
                    <div>
                    <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;