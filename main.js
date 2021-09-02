

const searchBook = () => {
    const searchInput = document.getElementById('srarch-input');
    const searchText = searchInput.value;
    searchInput.value = " ";

    if (searchText.length > 0) {
        document.getElementById("default-search").classList.remove("d-none");

    } else {
        document.getElementById("default-search").innerHTML =
            "<p class='text-center text-white mx-auto w-50 p-3 bg-secondary'><b>Please enter a book name</b></p>";
    }

    const url = ` http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => bookDisply(data.docs))

    fetch(url)
        .then(res => res.json())
        .then(data => totalBook(data))

}

const totalBook = bookList => {

    const totalArray = document.getElementById('total-array');
    totalArray.textContent = " ";
    const div = document.createElement('div');
    div.innerHTML = `
    <h4 class="text-center">Total Book Found : ${bookList.numFound}</h4>
    `
    totalArray.appendChild(div);
}




const bookDisply = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = " ";

    books.forEach(book => {

        document.getElementById("default-search").classList.add("d-none");
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `        
                <div class="card-body">
                <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class=" card-img-top" alt="...">
                    <h4 class="card-title">Book Name : ${book.title}</h4>
                    <h5 class="card-title">Author Name : ${book.author_name}</h5>
                    <h6 class="card-title">Publisher Name : ${book.publisher}</h6>
                    <p class="card-title">Publish Date : ${book.first_publish_year}</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
    });

}