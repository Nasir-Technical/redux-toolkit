import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigation = useNavigate();

    const data = useSelector((a)=> a);
    console.log(data)

    const moveToHome = () => {
        navigation("about", {
            state: {
                id: 1,
                name: "ABC",
            },
        });
    };

    return(
        <>
          <h1>Home</h1>
          <button onClick={moveToHome}>click</button>
        </>
    );
};

export default Home;