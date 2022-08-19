export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tp0ugKwI0CbtB1WwLLQQDcjkX2T5jHna&q=${category}&limit=10`
    const resp = await fetch(url)
    /** se hace esto para asegurarnos que siempre es un arreglo
     * y como tal podemos usar un map           */
    const { data = [] } = await resp.json()
    //console.log(data)

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    //console.log(gifs)
    return gifs
}