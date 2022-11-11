let inputs = document.getElementById("inp");
let visi = document.getElementById("error");

let id;
let d = [];
let i;
let n;

let z;

let arr = [];

let apps = () => {
  fetch("/api/v1/tasks")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let output = `<h2>LISTS</h2>`;
      data.tasks.map((item) => {
        /*    ids = item._id;
        console.log(ids); */
        z = 2;
        z = z + 1;
        id = item._id;
        console.log("lists : " + id);

        d.push(id);
        /*  console.log(d); */

        output += `<div>
        
         
       <div class ="lists"> <h4> ${item.name} </h4> <!--  <button> ${id} </button> --> </div> 
       
        
        </div>`;
      });
      console.log(data);
      document.getElementById("output").innerHTML = output;
    });

  console.log(d);

  /* console.log(d); */
};

let posts = () => {
  fetch("/api/v1/tasks", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("inp").value,
    }),
  })
    .then((res) => console.log(res))
    .then((data) => {
      console.log({ ids: id });
      apps();
    });
  if (inputs.value == "") {
    visi.innerText = "input field cannot be empty!";
    visi.style.display = "block";
    visi.style.color = "orange";
    setTimeout(() => {
      visi.style.display = "none";
    }, 3000);
  } else {
    visi.innerText = "Task Added!";
    visi.style.display = "block";
    visi.style.color = "green";

    inputs.value = "";
    setTimeout(() => {
      visi.style.display = "none";
    }, 3000);
  }
};

let patchs = () => {
  fetch("/api/v1/tasks/6367f927b926242288e997b2", {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("inp").value,
    }),
  })
    .then((res) => console.log(res))
    .then((data) => {
      console.log(data);
    });
};

let deletes = () => {
  fetch(`/api/v1/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => console.log(res))
    .then((data) => {
      console.log(data);
      apps();

      setTimeout(() => {
        visi.style.display = "none";
      }, 3000);

      if (!id) {
        visi.innerText = "No Task!";
        visi.style.display = "block";
        visi.style.color = "red";

        setTimeout(() => {
          visi.style.display = "none";
        }, 3000);
      } else {
        visi.innerText = "Task Deleted!";
        visi.style.display = "block";
        visi.style.color = "red";
      }
    });
};

console.log({ ids: id });

apps();
/* document.getElementById("butt").addEventListener("click", apps); */
document.getElementById("posting").addEventListener("click", posts);
/* document.getElementById("patching").addEventListener("click", patchs); */
document.getElementById("deleting").addEventListener("click", deletes);
