import axiosInstance from "@/utils/axios";

export const registerUser = async(name,email,password,setLoading,setError,router) =>{
    try {
        setError("");
        if(!email || !password || !name){
            setError("All fields are required");
            return;
        }
        setLoading(true);
        const {data}=await axiosInstance.post("/register",{
            name,email,password
        });

        if(!data){
            setError("account creation failed");
            setLoading(false);
            return;
        }
        // console.log(data);
        localStorage.setItem("token",data.token);
        setLoading(false);
        router.push("/todo");
    } catch (error) {
        console.log(error.response.data);
        if(error.response.data?.errors){
            setError(error.response.data?.errors[0].msg);
        }else{
            setError(error.response.data.message);
        }
        setLoading(false);
    }
}