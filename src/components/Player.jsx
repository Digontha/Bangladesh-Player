

const Player = ({details,index}) => {
    const{name}= details
    console.log(details);
    return (
        <div>
            <p>{++index}.{name}</p>
        </div>
    );
};

export default Player;