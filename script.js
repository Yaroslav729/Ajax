
const getData = async (url) => {
    const user = await fetch(url)
    if (!user.ok) {
        throw new Error(`Ошибка`)
    }
    return await user.json()

}

const sendData = async (url, data) => {
    const user = await fetch(url,{
        method: "Post",
        body: JSON.stringify(data)
    })
    if (!user.ok) {
        throw new Error(`Ошибка`)
    }
    return await user.json()

}
getData('db.json').then((data) => sendData("https://jsonplaceholder.typicode.com/posts", data))
