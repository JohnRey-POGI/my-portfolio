export const getImageUrl = (path) => {
    return new URL(`${path}`, import.meta.url).href;
    // return new URL(`assets/${path}`, import.meta.url).href; if file is saved in directory
}