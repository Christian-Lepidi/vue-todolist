const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Crea Task",
      tasks: [
        {
          name: "Task 1",
          done: true,
        },
        {
          name: "Task 2",
          done: true,
        },
        {
          name: "Task 3",
          done: false,
        },
        {
          name: "Task 4",
          done: true,
        },
        {
          name: "Task 5",
          done: false,
        },
        {
          name: "Task 6",
          done: false,
        },
        {
          name: "Task 7",
          done: true,
        },
      ],
      newTask: {
        name: "",
        done: false,
      },
    };
  },

  methods: {
    saveNewTask() {
      const newTaskCopy = { ...this.newTask };
      if (this.newTask.name != "") {
        this.tasks.push(newTaskCopy);
      }

      this.newTask.name = "";
    },
    deleteTask(i) {
      this.tasks.splice(i, 1);
    },
  },
}).mount("#app");
