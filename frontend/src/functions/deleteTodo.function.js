import axiosInstance from "@/utils/axios";

export const deleteTodo = async(id,setLoading,setError,router) =>{
    try {
        setError("");
        setLoading(true);
        const {data}=await axiosInstance.delete(`/todos/${id}`);

        if(!data){
            setError("todos not found");
            setLoading(false);
            return null;
        }
        setLoading(false);
    } catch (error) {
        console.log(error);
        if(error.response.data?.errors){
            setError(error.response.data?.errors[0].msg);
        }else if(error.response.data.message=="Unauthorized!"){
            localStorage.removeItem("token");
            router.push("/login")
        }
        else{
            setError(error.response.data.message);
        }
        setLoading(false);
        return null;
    }
}