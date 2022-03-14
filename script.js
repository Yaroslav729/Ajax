
const getData = async (url) => {
    const user = await fetch(url)
    if (!user.ok) {
        throw new Error(`Ошибка`)
    }
    return await user.json()

}
getData('db.json').then((data))

const sendData = async (url, data) => {
    const user = await fetch(url,{
        metod: "Post",
        body: data,
    })
    if (!user.ok) {
        throw new Error(`Ошибка`)
    }
    return await user.json()
}
