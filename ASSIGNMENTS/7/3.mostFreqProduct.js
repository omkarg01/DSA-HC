import { PriorityQueue } from "datastructures-js";

function mostFreqProducts(products) {
    // creating map for mainting frequency of each products
    const productsMap = new Map();
    products.forEach((product) => {
        if (productsMap.has(product)) {
            productsMap.set(product, productsMap.get(product) + 1);
        } else {
            productsMap.set(product, 1);
        }
    });

    // converting map to arrays eg - { redHat : 2, greenPants : 1}  will be covert to - [[redHat, 2], [greenPants, 1]]
    // this converion has been done for the ease of comparision
    const productsEntries = [...productsMap.entries()];
    // console.log(productsEntries)

    // storing productsEntries array in MaxHeap : product with highest freq will appeared at the top
    const maxHeap = PriorityQueue.fromArray(productsEntries, (a, b) => b[1] - a[1])

    // get the top 2 products of maxHeap using pop
    const firstProduct = maxHeap.pop();
    const secondProduct = maxHeap.pop();

    let res = [];
    // compare if the top 2 products has the equal freq then store them in res[] arr and sort it
    if (firstProduct[1] === secondProduct[1]) {
        // push first and second product (which we pop earlier) into the res[] arr
        res.push(firstProduct[0])
        res.push(secondProduct[0])

        // push the remaing products into the res[] arr, if there is any product with same freq as firstProduct
        while (maxHeap.front()[1] === firstProduct[1]) {
            res.push(maxHeap.pop()[0])
        }
    } else {
        // if top 2 products are not equal then return the firstProduct
        console.log(firstProduct)
    }
    // sort for lexicography
    console.log(res.sort())
}

const products = ['yellowShirt', 'redHat', 'cap', 'cap', 'blackShirt', 'bluePants', 'redHat', 'pinkHat', 'pinkHat', 'blackShirt', 'yellowShirt',
    'greenPants', 'greenPants', 'greenPants'];

mostFreqProducts(products)


// Time Complexity : O(nLogn)
// array sort is the highest time consuming in the code