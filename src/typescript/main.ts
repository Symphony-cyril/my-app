interface user {
  name: string;
  firstname: string;
}

function inter(title: user) {
  console.log("title.name" + " " + "title.firstname");
}

let interfaceUser = { name: "cyril", firstname: "ruffa" };

inter(interfaceUser);
