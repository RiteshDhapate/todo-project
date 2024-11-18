"use client"
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Plus,
  Trash2,
  CheckCircle2,
  Pencil,
  Clock,
  AlertCircle,
  CheckCircle,
  Sparkles,
  Loader,
} from "lucide-react";
import { useRouter } from 'nextjs-toploader/app';
import { getTodos } from "@/functions/getTodos.function";
import { updateTodo } from "@/functions/updateTodo.function";
import { createTodo } from "@/functions/createTodo.function";
import { deleteTodo } from "@/functions/deleteTodo.function";
import toast from 'react-hot-toast';


export default function Todo() {
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [tasks, setTasks] = useState({
    incomplete: [],
    doing: [],
    completed: [],
  });



  const [todos,setTodos]=useState([]);
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const [todoCreateLoadings,setTodoCreateLoad]=useState(false);
  const router = useRouter();


  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(!token){
      router.push("/login");
    }
  },[]);

  useEffect(()=>{
    (
      async () => {
         toast.promise(
          getTodos(setTodos, setLoading, setError, router),
          {
            loading: "Loading Todos...",
            success: "Todos loaded successfully!",
            error: (err) => `Error: ${err.message}`,
          }
        );
      }
    )();
  }, []);

  // Simulating API call to fetch todos
  useEffect(() => {

    // Group todos by stage
    const groupedTodos = todos.reduce(
      (acc, todo) => {
        acc[todo.stage].push(todo);
        return acc;
      },
      { incomplete: [], doing: [], completed: [] },
    );

    setTasks(groupedTodos);
  }, [todos]);

  const addTask = async() => {
    if (!newTask.trim()) return;
   const todoData = await createTodo(newTask,setTodoCreateLoad,setError,router)

    if(!todoData) return;

    setTasks((prev) => ({
      ...prev,
      incomplete: [todoData,...prev.incomplete],
    }));

    setNewTask("");
  };

  const deleteTask = (listId, taskId) => {
    deleteTodo(taskId,setLoading,setError,router)
    setTasks((prev) => ({
      ...prev,
      [listId]: prev[listId].filter((task) => task._id !== taskId),
    }));
  };

  const moveTask = (
    fromList,
    toList,
    taskId,
  ) => {
    const task = tasks[fromList].find((t) => t._id === taskId);
    if (!task) return;

    updateTodo(
      taskId,
      task.title,
      toList,
      setLoading,
      setError,
      router
    )

    const updatedTask = {
      ...task,
      stage: toList,
      updatedAt: new Date().toISOString(),
    };

    setTasks((prev) => ({
      ...prev,
      [fromList]: prev[fromList].filter((t) => t._id !== taskId),
      [toList]: [...prev[toList], updatedTask],
    }));
  };

  const startEditing = (task) => {
    setEditingTask(task);
    setEditedContent(task.title);
  };

  const updateTask = async() => {
    if (!editedContent.trim() || !editingTask) return;
     updateTodo(
      editingTask._id,
      editedContent,
      editingTask.stage,
      setLoading,
      setError,
      router
    )
    setTasks((prev) => ({
      ...prev,
      [editingTask.stage]: prev[editingTask.stage].map((task) =>
        task._id === editingTask._id
          ? {
              ...task,
              title: editedContent,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    }));

    setEditingTask(null);
    setEditedContent("");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "incomplete":
        return (
          <AlertCircle
            className="h-5 w-5 text-yellow-500"
          />
        );
      case "doing":
        return (
          <Clock
            className="h-5 w-5 text-blue-500"
          />
        );
      case "completed":
        return (
          <CheckCircle
            className="h-5 w-5 text-green-500"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 min-h-[80vh]">
      {/* Add Task Input */}
      <div
        className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto"
      >
        <div className="relative flex-1 w-full">
          <Input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="bg-black/50 border-white/10 text-white placeholder:text-gray-400 focus:border-purple-500 h-12 pr-12 w-full"
            onKeyPress={(e) => e.key === "Enter" && addTask()}
          />

          <Sparkles
            className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-400 animate-pulse"
          />
        </div>
        <Button
          onClick={addTask}
          disabled={todoCreateLoadings}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-12 px-6 rounded-xl w-full sm:w-auto"
        >
          {
            todoCreateLoadings ? <Loader className="h-5 w-5 sm:mr-2 animate-spin"/>: <Plus className="h-5 w-5 sm:mr-2" />
          }
         
          <span className="hidden sm:inline">
            Add Task
          </span>
        </Button>
      </div>

      {/* Task Lists */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {(Object.keys(tasks)).map((listId) => (
          <Card
            key={listId}
            className="bg-black/40 border-white/10 backdrop-blur-lg overflow-hidden group hover:border-purple-500/30 transition-colors duration-300"
          >
            <CardHeader
              className="border-b border-white/10 bg-white/5"
            >
              <div
                className="flex items-center justify-between"
              >
                <div
                  className="flex items-center gap-2"
                >
                  {getStatusIcon(listId)}
                  <CardTitle
                    className="text-xl font-semibold capitalize text-white"
                  >
                    {listId}
                  </CardTitle>
                  <span
                    className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white"
                  >
                    {tasks[listId].length}
                  </span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-4">
              <div className="space-y-3">
                {tasks[listId].sort((first,second)=>{
                  if(first.updatedAt>secod.updatedAt){
                    return 1;
                  }else if(first.updatedAt<second.updatedAt){
                    return 2;
                  }else{
                    return 0;
                  }
                }).map((task) => (
                  <div
                    key={task._id}
                    className="group/item relative p-4 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
                  >
                    {editingTask?._id === task._id ? (
                      <div className="flex gap-2">
                        <Input
                          value={editedContent}
                          onChange={(e) => setEditedContent(e.target.value)}
                          className="bg-black/50 border-white/10 text-white flex-1"
                          onKeyPress={(e) => e.key === "Enter" && updateTask()}
                          autoFocus
                        />

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={updateTask}
                          className="text-purple-400 border-purple-400/50"
                        >
                          <Pencil
                            className="h-4 w-4"
                          />
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex-1">
                          <p
                            className="text-white text-sm break-words"
                          >
                            {task.title}
                          </p>
                          <span
                            className="text-xs text-gray-400"
                          >
                            {formatDate(task.updatedAt)}
                          </span>
                        </div>

                        <div
                          className="flex absolute right-0 top-0 bg-black p-1 rounded-full gap-2 opacity-100 sm:opacity-0 group-hover/item:opacity-100 transition-opacity"
                        >
                          {listId !== "completed" && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                moveTask(
                                  listId,
                                  listId === "incomplete"
                                    ? "doing"
                                    : "completed",
                                  task._id,
                                )
                              }
                              className="h-8 w-8 hover:bg-white/10 rounded-full"
                            >
                              {listId === "incomplete" ? (
                                <Clock
                                  className="h-4 w-4 text-yellow-500"
                                />
                              ) : (
                                <CheckCircle2
                                  className="h-4 w-4 text-green-500"
                                />
                              )}
                            </Button>
                          )}

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => startEditing(task)}
                            className="h-8 w-8 hover:bg-white/10 rounded-full"
                          >
                            <Pencil
                              className="h-4 w-4 text-blue-500"
                            />
                          </Button>

                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteTask(listId, task._id)}
                            className="h-8 w-8 hover:bg-white/10 rounded-full"
                          >
                            <Trash2
                              className="h-4 w-4 text-red-500"
                            />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

