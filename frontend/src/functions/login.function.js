import axiosInstance from "@/utils/axios";

export const loginUser = async(email,password,setLoading,setError,router) =>{
    try {
        setError("");
        if(!email || !password){
            setError("All fields are required");
            return;
        }
        setLoading(true);
        const {data}=await axiosInstance.post("/login",{
            email,password
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