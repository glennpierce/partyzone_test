import {bindable} from 'aurelia-framework';
import 'materialize-css';

export class NavBar {
  @bindable router = null;

  attached() {
    //alert('hhhh');
    //$('.button-collapse').sideNav();
  }
}