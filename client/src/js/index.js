// entry point

// import js files
import "./form";
import "./submit";

// import CSS files
import "../css/index.css";

// import Bootstrap
import {Tooltip, Toast, Popover} from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Logo from '../images/lightning.jpg'

window.addEventListener('load', function() {
    this.document.getElementById('logo').src = Logo;
    this.document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});