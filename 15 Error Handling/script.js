const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function() {
    try{
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch(error) {
        alert(error)
    }

});

function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=97ed753d&s=' + keyword)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => {
            if(response.Response === "False"){
                throw new Error(response.Error);
            }
            return response.Search
        });
}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCards(m));

    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}


// event binding
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;

        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);

    }
})


function getMovieDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=97ed753d&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


function showCards(movie){
    return `<div class="col-md-4 my-3">
                <div class="card">
                <img class="card-img-top" src="${movie.Poster}">
                <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">2016</h6>
                    <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                <div class="col-md-3">
                    <img src="${m.Poster}" class="img-fluid">
                </div>
                <div class="col-md">
                    <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                    <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
                    </ul>
                </div>
                </div>
            </div>`;
}