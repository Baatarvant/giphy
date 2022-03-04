const input = document.getElementById('input');
const main = document.getElementById('main');
const getGiphy = (batman) => {
    const data = fetch('https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=${batman}')
    .then(response => response.json())
    return data}
    const searchGip = async () => {
    const gifsUrl = await getGiphy(input.value);
    gifsUrl.data.forEach(el => {
    addData(gif/${el.id}, { 
    imgURl:el.images.fixed_height.url,             titel: el.title,          })     //     console.log(el)     //     // const img = document.createElement('img')     //     // img.src = el.images.fixed_height.url;     //     // img.setAttribute = ('class', 'child')     //     // main.append(img)     // }) }
    const getDocData = async (path) => {
    const data = await db.doc(path).get();
    return data
}
