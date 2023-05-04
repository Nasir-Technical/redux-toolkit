import { useDispatch } from "react-redux";
import { add } from "../reducer/singupSlice";

export default function SignUp() {
    const Dispatch = useDispatch();

    const signUp =()=>{
        let obj = {
            username:"Zyan",
            email:"abc@gmail.com",
            password: "123456",
        };
        Dispatch(add(obj));
    }
    return (
      <div>
        <h1>Sign Up</h1>
        <button onClick={signUp}>Sign Up</button>
      </div>
    )
  }