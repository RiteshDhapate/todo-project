import axiosInstance from "@/utils/axios";

export const getTodos = async(setData,setLoading,setError,router) =>{
    try {
        setError("");
        setLoading(true);
        const {data}=await axiosInstance.get("/todos");

        if(!data){
            setError("todos not found");
            setLoading(false);
            return;
        }
        console.log("todos",data);
        setData(data);
        setLoading(false);
    } catch (error) {
        console.log(error);
        if(error.response.data?.errors){
            setError(error.response.data?.errors[0].msg);
        }else if(error.response.data.message=="Unauthorized!"){
            localStorage.removeItem("token");
            router.push("/login")
        }else{
            setError(error.response.data.message);
        }
        setLoading(false);
    }
}