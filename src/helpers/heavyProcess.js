export const heavyProcess = (iterations = 5000) => {
    for(let i = 0; i < iterations ; i++){
        console.log('Here we go')
    }

    return `${iterations} iterations done`
}