import { useDispatch } from "react-redux"
import { add } from "../reducer/loginslice";
export default function Login() {
    const Dispatch = useDispatch();

    const loginUser = () => {
        let obj = {
            email:"abc@gmail.com",
            password: "123456",
        };
        Dispatch(add(obj));
    };
    
  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginUser}>Login</button>
    </div>
  )
}
