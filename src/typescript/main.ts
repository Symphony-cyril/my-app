interface user {
  name: string;
  firstname: string;
}

function userData(title: user) {
  console.log("title.name" + " " + "title.firstname");
}

let interfaceUser = { name: "cyril", firstname: "ruffa" };
