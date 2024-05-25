let tasks = [];
let validation =  /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/g
const getAllTasks = (req, res) => {
  try {
    res.status(200).send({ status: true, data: tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
}

const getTaskById = (req, res) => {
  try {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (!task)
      return res.status(404).send({ satus: false, message: "Task not found" });
    res.status(200).send({ status: true, data: task });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

const createTask = (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title )
      return res
        .status(400)
        .send({ status: false, message: "Title is required" });
        if (!description )
          return res
            .status(400)
            .send({ status: false, message: "Description is required" });
       

    const task = {
      id: tasks.length + 1,
      title,
      description,
    };
    tasks.push(task);
    res.status(201).send({ status: true, data: task });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

const updateTask = (req, res) => {
  try {
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (!task)
      return res.status(404).send({ status: false, message: "Task not found" });

    const { title, description } = req.body;
    if (!title || !description)
      return res
        .status(400)
        .send({ status: false, message: "Title and description are required" });

    task.title = title;
    task.description = description;
    res.status(200).send({ status: true, data: task });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

const deleteTask = (req, res) => {
  try {
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (taskIndex === -1)
      return res.status(404).send({ status: false, message: "Task not found" });

    tasks.splice(taskIndex, 1);
    res.status(200).json({ status: true, message: "Task is deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
