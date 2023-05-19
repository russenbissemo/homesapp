import { Injectable } from '@angular/core';
import {Housinglocation} from './housinglocation';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url ='http://localhost:3000/locations';
  

  constructor() { 
    
  }



 // Le async mot-clé avant la déclaration de la fonction indique 
 // que la fonction est asynchrone et renverra implicitement une Promise.
  async getAllHousingLocations(): Promise<Housinglocation[]>{
// La getAllHousingLocations fonction est déclarée asynchrone et 
// renvoie une promesse qui se résout en un tableau d' HousingLocationobjets.
    const data = await fetch(this.url);
// Le await mot-clé est à nouveau utilisé pour attendre que la réponse 
// soit résolue et les données résultantes sont affectées à la datavariable.
    return await data.json() ?? [];
// La data.json()méthode est appelée pour analyser 
// les données de réponse au format JSON et renvoie également une promesse.
  }

  async getHousingLocationById(id:number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {} ;
    //return this.housingLocationList.find(housinglocation => housinglocation.id === id)
  }

  submitApplication(firstName: string , lastName:string, email:string) {
    //console.log(`, email:Homes application received: firtsName:${firstName}, lastName:${lastName},email: ${email}`)
    console.log(firstName, lastName, email)
  }
  
}
