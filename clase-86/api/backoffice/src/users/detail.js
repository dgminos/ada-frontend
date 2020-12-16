
const params = new URLSearchParams(window.location.search)
for (const param of params) {
    console.log(param)
}
const id = params.get('name');



