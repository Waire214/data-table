const table = document.getElementById("table-list");
let temp ="";
fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(data => {
        console.log(data.data);
        data.data.map(item => {console.log(`${item}`)
        temp+=`<tr><td>${item.id}</td>`
        temp+=`<td>${item.first_name}</td>`
        temp+=`<td>${item.last_name}</td>`
        temp+=`<td><img src="${item.avatar}">
        </td></tr>`
    });
            table.innerHTML = temp;
    });  
