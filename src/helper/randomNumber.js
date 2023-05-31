const getRandom = () =>{
    return new Promise( resolve =>{
        const randomNumber = Math.floor((Math.random()*20)+1)

        setTimeout(()=>{
            resolve(randomNumber)
        }, 1000);

    })
}


export default getRandom