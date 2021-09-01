const searchBook = () => {
    const searchInput = document.getElementById('srarch-input');
    const searchText = searchInput.value;
    //console.log(searchText)
    const url = ` http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => bookDisply(data.docs))
}

const bookDisply = books => {
    // console.log(books)
    const searchResult = document.getElementById('search-result')
    for (const book of books) {
        console.log(book)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        
        
                <div class="card-body">
                    <h5 class="card-title">Book Name : ${book.title}</h5>
                    <h5 class="card-title">Author Name : ${book.author_name}</h5>
                    <h5 class="card-title">Publish Date : ${book.publish_date}</h5>
                    
                    

                </div>
            </div>
        `
        searchResult.appendChild(div);
    }
}