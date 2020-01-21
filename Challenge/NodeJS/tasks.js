/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  console.clear();
  var arr = text.split(/(\s+)/);
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (arr[0] === "hello") {
    if (arr[2] == " ") {
      hello(" ");
    } else {
      hello(arr[2]);
    }
  } else if (text === "help\n") {
    help();
  } else if (text === "tasks\n") {
    tasks();
  } else if (arr[0] === "add") {
    if (arr[2] != "") {
      add(arr);
    } else {
      console.log("error");
    }
  } else if (arr[0] === "remove") {
    remove(arr[2]);
  } else if (arr[0] === "edit") {
    if (arr[2] != " ") {
      edit(arr[2], arr);
    } else console.log("error");
  } else if (arr[0] === "check") {
    if (arr[2] != "") {
      check(arr[2]);
    } else console.log("error");
  } else if (arr[0] === "uncheck") {
    if (arr[2] != "") {
      uncheck(arr[2]);
    } else console.log("error");
  }

  //   if (arr[2]==1){
  //     remove(arr[2]);
  //   }
  //   else if (arr[2]==2){
  //     remove(arr[2]);
  //   }

  // else remove(arr[2]);}
  else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name) {
  if (name == "") {
    console.log("hello!");
  } else console.log("hello " + name + "!");
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

/**
 * Lists all the possible commands
 * @returns {void}
 */
function help() {
  var list =
    "Please enter one of these commands: " +
    "\n" +
    "-----------------------------------" +
    "\n" +
    "quit/exit:" +
    "\t" +
    "\t" +
    "Exits the program" +
    "\n" +
    "help:" +
    "\t" +
    "\t" +
    "\t" +
    "List all the possible commands" +
    "\n" +
    "hello <name>:" +
    "\t" +
    "\t" +
    "Return a welcome message depending on the <name> input" +
    "\n" +
    "add <x>:" +
    "\t" +
    "\t" +
    "Add a task <x> and store it in a list(array)" +
    "\n" +
    "remove <number>:" +
    "\t" +
    "Remove a task depending on the <number> input, default remove the last task" +
    "\n" +
    "edit <newtext>:" +
    "\t\t" +
    "Edit a task depending on the <newtext> input, default edit the last task";
  console.log(list);
}

/**
 * list all tasks
 * @returns {voids}
 */
var list = [
  { task: "banana", done: true },
  { task: "strawberry", done: false },
  { task: "papaya", done: false },
  { task: "kiwi", done: true }
];
function tasks() {
  for (let i = 0; i < list.length; i++) {
    let checkMark = "";
    if (list[i].done) {
      checkMark = "✓";
    } else {
      checkMark = " ";
    }
    console.log("[" + checkMark + "] " + (i + 1) + "- " + list[i].task);
  }
}

function add(x) {
  x.shift();
  x.shift();
  let newTaskDesc = x.join("").replace(/(\r\n|\n|\r)/gm, "");
  let newTaskObject = {
    task: newTaskDesc,
    done: false
  };
  list.push(newTaskObject);
  console.log(list);
  tasks();
}

function remove(x) {
  if (x == 0 || x <= 2) {
    list.splice(x - 1, 1);
    tasks();
  } else console.log("number doesn't exist");
}

function edit(id, newtext) {
  newtext.shift();
  newtext.shift();
  newtext.pop();
  newtext.pop();

  if (!parseInt(id)) {
    list[list.length - 1].task = newtext.join("");
    tasks();
  } else {
    newtext.shift();
    newtext.shift();
    list[id - 1].task = newtext.join("");

    tasks();
  }
}

function check(y) {
  list[y - 1].done = true;

  tasks();
}
function uncheck(z) {
  list[z - 1].done = false;
  tasks();
}

// The following line starts the application
startApp("Abdulkader Freij");

/**
 *
 * hello <name> : return a welcome message depending on the <name> input
 * exit         :
 */
