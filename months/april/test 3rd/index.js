const somePromise = fetch('https://reqres.in/api/users')

    somePromise
        .then(data => data.json())
        .then(result => {
            // console.log(result)
            const userArr = result.data
            for(let i=0; i< userArr.length; i++){
                // console.log(userArr[i])
                const newElement = document.createElement('p')
                newElement.innerText = 
                `${userArr[i].first_name}, ${userArr[i].last_name}, ${userArr[i].email}, ${userArr[i].avatar}`
                document.querySelector('h1').appendChild(newElement)
            }
        })
        .catch(error => console.log("got some error - ", error))