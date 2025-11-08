const productsEndpoint = "https://dummyjson.com/products"

export async function fetchProductCategoryData() {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return fetch(productsEndpoint + '/categories')
        .then(res => res.json())
        .then(json => json)
}

export async function fetchProductsData() {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return fetch(productsEndpoint)
        .then(res => res.json())
        .then(json => json)
}
