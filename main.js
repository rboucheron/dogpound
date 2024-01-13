import "./src/css/bootstrap.min.css";
import "./src/css/mind.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<header class="border border-bottom-1 border-blue-sky">
<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <img src="./assets/thedogslogo.svg" alt="" style="width: 65px;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#Accueil">Accueil</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Portée</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Chiots</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link active" href="#">Contact</a>
                </li>

            </ul>
        </div>
    </div>
</nav>
</header>



<section class="container mt-5 mb-2" id="Accueil">

<div class="row">
    <div class="col-sm-5">
        <h1 class="mt-sm-5 text-center color-blue-sky display-4 text-Alata">La portée de Sally</h1>
        <p class="color-blue fs-4 text-poppins">Le 22 décembre 2023, Sally, chien Finnois de Laponie, a donné
            naissance à 4
            chiots : <br />3 femelles et 1 mâle</p>
    </div>
    <div class="col-1"></div>
    <div class="col-sm-6">

        <img src="./assets/sallychiot3.png" class="d-block w-100 rounded-2" alt="...">

    </div>
</div>

</section>
<section class="container mt-5 mb-2">
<div class="row">
    <img src="./assets/iorek.jpg" alt="le roi Iorek" class="col-sm-4">

    <div class="col-12 col-sm-4 text-center color-blue fs-4 mt-5 text-Alata">
        Roi Iorek et Sally se sont rencontrés le 24 octobre 2023
    </div>

    <img src="./assets/Sally.jpeg" alt="" class="col-sm-4">

</div>

</section>
<div class=" mt-5 border-3 dashed-b border-accent"></div>
<div class="container">
<div class="row mt-2">
    <div class="col-1"></div>
    <div class="col-10 color-blue-sky display-4 text-Alata"> Nous avons le plaisir de vous présenter : </div>
    <div class="col-1"></div>
</div>
</div>

<div class="container-fluid">
<div class="row">
    <div class="col-2">

    </div>


    <div class="d-flex justify-content-center col-12 col-sm-4 sm-m-2">
        <div class="card " style="width: 100%;">
            <img src="./assets/coliergris.jpg" class="card-img-top" alt="petit chienne sur une napes rouge"
                style="height: 265px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">Collier Gris</h5>
                <p class="card-text">Une femelle de couleur Sable</p>
                <a href="#" class="btn bg-blue color-mauve">En savoir plus</a>
            </div>
            <div class="day">J'ai 10 jours</div>
        </div>
    </div>
    <div class="d-flex justify-content-center  col-12 col-sm-4 sm-m-2">
        <div class="card " style="width: 100%;">
            <img src="./assets/coliervert.jpg" class="card-img-top" alt="petit chienne sur une napes rouge"
                style="height: 265px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">Collier Vert</h5>
                <p class="card-text">Une femelle de couleur Sable</p>
                <a href="colier-vert.html" class="btn bg-blue color-mauve">En savoir plus</a>
            </div>
            <div class="day">J'ai 10 jours</div>
        </div>
    </div>

    <div class="col-2">

    </div>
</div>
<div class="row">
    <div class="col-2">
    </div>
    <div class="d-flex justify-content-center col-12 col-sm-4 sm-m-2">
        <div class="card " style="width: 100%;">
            <img src="./assets/colierrose.jpg" class="card-img-top" alt="petit chienne sur une napes rouge"
                style="height: 265px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">Collier Rose</h5>
                <p class="card-text">Une femelle de couleur Sable</p>
                <a href="#" class="btn bg-blue color-mauve">En savoir plus</a>
            </div>
            <div class="reserve">Réservé</div>
            <div class="day">J'ai 10 jours</div>
        </div>
    </div>
    <div class="d-flex justify-content-center col-12 col-sm-4 sm-m-2">
        <div class="card " style="width: 100%;">

            <img src="./assets/colierjaune.jpg" class="card-img-top" alt="petit chienne sur une napes rouge"
                style="height: 265px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">Collier Jaune</h5>
                <p class="card-text">Un Mâle de couleur noir et sable </p>
                <a href="#" class="btn bg-blue color-mauve">En savoir plus</a>
            </div>
            <div class="reserve">Réservé</div>
            <div class="day">J'ai 10 jours</div>
        </div>
    </div>
    <div class="col-2">
    </div>
</div>
</div>
`;

setupCounter(document.querySelector("#counter"));
