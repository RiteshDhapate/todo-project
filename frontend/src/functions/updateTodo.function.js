import axiosInstance from "@/utils/axios";

export const updateTodo = async (
  id,
  title,
  stage,
  setLoading,
  setError,
  router
) => {
  try {
    setError("");
    setLoading(true);
    const { data } = await axiosInstance.put("/todos", {
      title,
      id,
      stage,
    });

    if (!data) {
      setError("todos not found");
      setLoading(false);
      return null;
    }
    setLoading(false);
    return data;
  } catch (error) {
    console.log(error);
    if (error.response.data?.errors) {
      setError(error.response.data?.errors[0].msg);
    } else if (error.response.data.message == "Unauthorized!") {
      localStorage.removeItem("token");
      router.push("/login");
    } else {
      setError(error.response.data.message);
    }
    setLoading(false);
    return null;
  }
};
