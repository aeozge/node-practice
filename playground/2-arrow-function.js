const event = {
  name: "Birthday Party",
  guestList: ["Mike", "Mia", "Andrea"],
  printGuestLists() {
    console.log("Guest List for ", this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + " is attending " + this.name);
    });
  },
};
event.printGuestLists();

const tasks = {
  tasks: [
    {
      text: "Grocery Shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksTodo() {
    this.tasks.filter((task) =>
      task.completed === false
        ? console.log("incompleted")
        : console.log("completed")
    );
  },
};

console.log(tasks.getTasksTodo());

