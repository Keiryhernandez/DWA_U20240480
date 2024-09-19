const contador=1;

if(true){
  const contador = 5;
  console.log(contador);
}

//--------------------
const persona ={
  nombre: "Keiry", 
  apellido: "Rivas"}

persona.nombre="Daniela"
console.log(persona.nombre);


//Objetos literales y Optional chaining operator

const frutas =["Pera" ,"Manzana" , "Sandia"]
console.log(frutas[2]);

//Objetos Literales, no indexados
const animal={
  color: "Naranja",
  nombre: "Simba",
  rugiendo: true
  }
console.log("Este leon es de color: " +animal.color);
console.log("y su nobre es: " +animal.nombre);

console.log(animal["rugiendo"]);

//----------------------
const tareas = {
  "2359-91gjhfdgujfg" :{
    title: "tarea #01"
  }
}
console.log(tareas["2359-91gjhfdgujfg"].title);


//Objetos Literales, no indexados
const animall={
  color: "Naranja",
  nombre: "Simba",
  rugiendo: true,
  favoritos:{
  dia:{
  ok:true
  },
    noche:{
      ok:false
    }
   }
  }
console.log(animall.favoritos?.dia?.ok);
            
//-------------------------
  const Animal={
  color: "Naranja",
  nombre: "Simba",
  rugiendo: true,
  favoritos:{
  dia:{
  ok:true
  },
    noche:{
      ok:false
    }
   }
  }
//guardar el valor de la propiedad color en una contante 
  const color = Animal.color;
  const nombre= Animal.nombre;
  
  console.log("color: " +color+ ", Animal: " +nombre);


//Destructuring objetos literales...

const Animall={
  Color: "Azul",
  Nombre: "Totogoz",
  volando: true
}

const {Color, Nombre, volando}=Animall;

console.log("El " +Nombre+ " es de color: " +Color);

//Destructuring  indexados

const fruta =["Pera" ,"Manzana" , "Sandia"]

//Destructuring Array
const [Pera, Manzana, Sandia ]= fruta;
console.log(" A mi me gusta mucho la " + Pera );

//Interpolación, Operador ternario


//Keiry Daniela Chávez Hernández 
