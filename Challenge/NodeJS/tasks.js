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
    if (arr[1] == " ") {
      add(arr[2]);
    } else {
      console.log("error");
    }
  } else {
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
    "quit/exit: Exits the program" +
    "\n" +
    "help: List all the possible commands" +
    "\n" +
    "hello <name>: Return a welcome message depending on the <name> input";
  console.log(list);
}

/**
 * list all tasks
 * @returns {voids}
 */
var list = ["banana", "apple", "cherry", "lemon"];
function tasks() {
  for (let i = 0; i < list.length; i++) {
    console.log(i + 1 + "- " + list[i]);
  }
}

function add(x) {
  list.push(x);
  tasks();
}

// The following line starts the application
startApp("Abdulkader Freij");

/**
 *
 * hello <name> : return a welcome message depending on the <name> input
 * exit         :
 */
