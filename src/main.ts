import angular from "angular";
import './style.css';

import { temperatureCtrl } from "./temperature/index.controller";

angular.module("MyApp", [])
  .controller("temperatureCtrl", temperatureCtrl)