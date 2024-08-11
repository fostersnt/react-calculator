import React from "react";

interface HomeProps{
    name: String,
    cost: Number
}

const Home: React.FC<HomeProps> = ({name, cost}) => {
    return (
        <div>
            <h1>Home</h1>
            <p>
                The name of the app is {name} and the cost is Ghs{cost.toString()} 
            </p>
        </div>
    )
}

export default Home;