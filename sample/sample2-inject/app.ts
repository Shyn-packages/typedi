import {Container} from "../../src/Container";
import {CoffeeMaker} from "./CoffeeMaker";

let coffeeMaker = Container.get<CoffeeMaker>(CoffeeMaker);
coffeeMaker.make();