// Import necessary components from react-router-dom and other parts of the application.
import { useParams } from "react-router-dom";
import {useEffect, useContext} from "react";
import {Context} from "../store/context";

function Practice (){
     const parametros = useParams();
     const {actions, store} = useContext(Context);

     useEffect(()=> {},[]);

     return <h1>Profile {store.counter}</h1>; 

}

export default Practice;
