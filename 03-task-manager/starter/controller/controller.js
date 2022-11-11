const Task = require("../model/Task");

const getTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(404).send(err);
  }
};

const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (err) {
    res.status(404).send(err);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    res.status(200).json({ task });
  } catch (err) {
    res.status(404).send(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.send("file does not exist");
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(404).send(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    res.send();
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  getTask,
  postTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
