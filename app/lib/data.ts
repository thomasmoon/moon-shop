const productsEndpoint = "https://dummyjson.com/products"

export async function fetchProductCategoryData() {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return fetch(productsEndpoint + '/categories')
        .then(res => res.json())
        .then(json => {
            console.log('Product categories', json);
            return json
        })
}

export async function fetchProductsData() {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return fetch(productsEndpoint)
        .then(res => res.json())
        .then(json => {
            console.log('Products', json);
            return json
        })
}
