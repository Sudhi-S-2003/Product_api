fetch('http://localhost:3000/').then(response => response.json())
.then(data => displaydata(data));
function displaydata(data){
    console.log(data);
    data.forEach(element => {
        document.getElementById('productcontainer').insertAdjacentHTML('beforeend',`  <div class="col-md-3 col-sm-6">
                <div class="container">
                  
                    <div class="card text-center border-2 border-warning" style="max-width: 300px; height:375px">
                        <div class="card-body">
                            <img src="${element.url}" alt="${element.name}" class="card-img-top" style="height:150px">
                            <h2 class="card-title">${element.name}</h2>
                            <p class="card-text">${element.description}
                            <br>
                                <a href class="fw-light text-decoration-none"><span> Price : ${element.Price}</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>`);
    });
}