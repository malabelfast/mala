let jsNav =
`
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html"><span class="line left">MALA</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="about.html">ABOUT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="placeholder.html">SHOP</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>
`;

document.querySelector(".js-nav").innerHTML = jsNav;

let jsFooter =
`
<footer>
            <div class="footer_container">
                <h2 class="mx-auto mx-md-0 mb-4 mb-md-0 line left">
                    MALA
                </h2>
                <div class="row justify-content-between text-center text-md-left">
                    <div class="col-12 col-md-3 mt-4">
                        <ul class="list-unstyled">
                            <li>
                                <h5>FOLLOW US</h5>
                            </li>
                            <li><a href="https://www.instagram.com/malabelfast/">INSTAGRAM</a></li>
                            <li><a href="https://www.facebook.com/malaecobags/">FACEBOOK</a></li>
                            <li><a href="https://www.linkedin.com/company/mala-belfast/">LINKEDIN</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3 mt-4">
                        <ul class="list-unstyled text-lg-center">
                            <li>
                                <h5>SHOP</h5>
                            </li>
                            <li><a href="https://www.etsy.com/">ETSY</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-3 mt-4">
                        <ul class="list-unstyled text-lg-right">
                            <li>
                                <h5>CONTACT</h5>
                            </li>
                            <li><a href="mailto:hello@malabelfast.com">email us</a></li>
                            <li><a href="https://www.instagram.com/malabelfast/">INSTAGRAM</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer_bottom">
                    <hr class="page_container_escape">
                    <p class="px-3 px-md-0">
                        © Oliwia Widuto for Mala 2020
                    </p>
                </div>
            </div>
        </footer>
`;

document.querySelector(".js-footer").innerHTML = jsFooter;

/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html"><span class="line left">MALA</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="about.html">ABOUT</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        SHOP
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="shop.html"><span style="font-weight:bolder; text-decoration: underline;">THE RANGE</span></a>
                        <a class="dropdown-item" href="products/product1.html">The Bum Bag</a>
                        <a class="dropdown-item" href="products/product2.html">The Phone Pouch</a>
                        <a class="dropdown-item" href="products/product3.html">The Pencil Case</a>
                    </div>
                    <li class="nav-item">
                    <a class="nav-link active" href="contact.html">CONTACT</a>
                </li>
                </li>
            </ul>
        </div>
    </nav>
*/