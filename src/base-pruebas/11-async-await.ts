export async function getImage(): Promise<string> {
  try {
    const apiKey = 'khYjRcs5FrIybMjGIbhp6kFiKG09W8Xt';
    const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await response.json();
    const { url } = data.imagen.original;
    return url;
  } catch (err) {
    console.log(err);
    return 'No se encontro la imagen';
  }
}
