const somePromise = fetch("https://reqres.in/api/users?page=2");
somePromise
.then((data)=>data.json())
.then((result)=>{
    const userArr = result.data;
    for(let i = 0; i<userArr.length; i++){
        const newElement = document.createElement('p');
        const imge = document.createElement('img');
        newElement.innerText =`
        Name:-${userArr[i].first_name} ${userArr[i].last_name}
        Email:-${userArr[i].email}`;
        imge.src = userArr[i].avatar
        document.querySelector('h1').appendChild(newElement);
        document.querySelector('h1').appendChild(imge);

    }
})
.catch((error) => console.log("got some error -",error));