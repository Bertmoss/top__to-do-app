/* import "./style.scss"; */
import {header} from "./header/header"
import {mainDiv} from "./main/main" 
import {footer} from "./footer/footer"


let body = document.querySelector("body");

body.appendChild(header);

body.appendChild(mainDiv);

body.appendChild(footer);


