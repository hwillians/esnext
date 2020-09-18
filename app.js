console.log('-.-.-.-.-let-.-.-.-.-')
// Créer une variable favoriteCityId (à l’aide mot clé let) qui contient la chaîne de caractères : "rome".
let favoriteCityId = 'rome'

// Afficher dans la console (console.log(...)) la variable favoriteCityId.
console.log(favoriteCityId)

// Affecter une nouvelle valeur à la variable favoriteCityId : une chaînes de caractères : "paris".
favoriteCityId = 'paris'

// Afficher dans la console (console.log(...)) la variable favoriteCityId.
console.log(favoriteCityId)

// Vérifier le résultat dans la console

console.log('\n-.-.-.-.-const-.-.-.-.-')// const
// Créer une constante citiesId (
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro']

// Afficher dans la console la constante citiesId.
console.log(citiesId)

// Vérifier le résultat dans la console .
// Affecter une nouvelle valeur à la constante citiesId : un tableau vide par exemple. 

//citiesId = []

// Ajouter un nouvel élément au tableau : "tokyo".
citiesId.push('tokyo')
console.log(citiesId)
// Afficher dans la console la constante citiesId.


console.log('\n-.-.-.-.-Création d’objet-.-.-.-.-')// Création d’objet
// • Créer une fonction getWeather qui possède un paramètre cityId.
function getWeather(cityId) {

    // • Dans cette fonction, ajouter 2 variables locales :
    // ◦ city qui stocke la valeur du paramètre cityId en lettres majuscules.
    let city = cityId.toUpperCase()
    // ◦ temperature valorisé à 20.
    let temperature = 20
    // ◦ Utiliser la nouvelle syntaxe ES2015, pour retourner un objet de la forme {city: "PARIS", temperature: 20}.
    return { city, temperature }
}
// • Créer une constante weather qui exécute la fonction getWeather en lui passant en paramètre favoriteCityId.
const weather = getWeather(favoriteCityId)
// • Afficher dans la console constante weather
console.log(weather)

console.log('\n-.-.-.-.-Affectation destructurée-.-.-.-.-')// Affectation destructurée
// • Avec la nouvelle syntaxe d’affectation destructurée, créer deux constantes city et temperature qui récupère leurs valeurs à partir de la constante weather.
const { city, temperature } = weather;

// • Afficher dans la console la valeur de constante city.
console.log(city);

// • Afficher dans la console la valeur de constante temperature.
console.log(temperature);

console.log('\n-.-.-.-.-Rest operator-.-.-.-.-')// Rest operator
// • A l’aide du rest operator, créer à partir du tableau citiesId, 3 constantes : parisId, nycId et othersCitiesId.
const [parisId, nycId, ...othersCitiesId] = citiesId

// • Afficher dans la console la valeur de constante parisId.
console.log(parisId)
// • Afficher dans la console la valeur de constante nycId.
console.log(nycId)
// • Afficher dans la console la taille du tableau othersCitiesId.
console.log(othersCitiesId.length)

console.log('\n-.-.-.-.-Classe-.-.-.-.-')// Classe
// • Créer une classe Trip.
class Trip {
    // • Ajouter un constructeur avec les propriétés : id, name, imageUrl.
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    //Ajouter la méthode toString() qui permet d’avoir l’affichage ci-après Trip [paris, Paris, img/paris.jpg] 
    // Compléter la méthode toString() pour qu’elle affiche la valeur de _price.
    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`
    }

    // Ajouter un getter et un setter pour la propriété price. La classe sauvegardera 
    //la valeur dans une variable privée appellée _price.
    get price() {
        return this.privatePrice
    }
    set price(newPrice) {
        this.privatePrice = newPrice
    }

    // • Ajouter à la classe Trip une méthode statique getDefaultTrip() 
    //qui retourne une instance de la classe Trip valorisée avec les informations suivantes :
    // ◦ id : rio-de-janeiro
    // ◦ name : Rio de Janeiro
    // ◦ imageUrl : img/rio-de-janeiro.jpg
    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
}

// • Créer un objet parisTrip avec la classe Trip avec les informations suivantes :
// ◦ id : paris /  name : Paris / imageUrl : img/paris.jpg
const parisTrip = new Trip('paris', 'Paris', 'img/paris.png')
// ◦ Afficher dans la console :
// ▪ l’objet parisTrip.
console.log(parisTrip)
// ▪ la propriété name de l’objet parisTrip. • Vérifier le résultat dans la console.
console.log(parisTrip.name)

//Afficher  dans la console le résultat de l'exécution de la méthode toString() sur l’objet parisTrip.
console.log(parisTrip.toString())

// • Valoriser à 100 la propriété price de l’objet parisTrip.
parisTrip.price = 100

// • Afficher dans la console, le résultat de la méthode toString() de l’objet parisTrip.
console.log(parisTrip.toString())

// • Créer une constante defaultTrip qui récupère le résultat de l’exécution de la méthode getDefaultTrip().
const defaultTrip = Trip.getDefaultTrip()
// • Afficher dans la console defaultTrip.toString().
console.log(defaultTrip.toString())

console.log('\n-.-.-.-.-Héritage-.-.-.-.-')// Héritage
// • Créer la classe FreeTrip qui étends Trip.
class FreeTrip extends Trip {
    // • Elle se construit avec les informations suivantes : id, name et imageUrl.
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl)
    }

    //  La propriété price est valorisé par défaut à 0.
    get price() {
        return 0
    }
    // Redéfinir la méthode toString() dont le résultat est la concaténation de la chaîne de caractères 
    //Free et du résultat de l’exécution de la méthode toString() de la classe Trip.
    toString() {
        return `Free${super.toString()}`
    }

}
// • Créer une constante freeTrip, instance de la classe FreeTrip avec les informations suivantes :
// ◦ id : nantes / ◦ name : Nantes / ◦ imageUrl : img/nantes.jpg
const freeTrip = new FreeTrip('nantes', 'Nates', 'img/nantes.jpg')

// • Afficher dans la console freeTrip.toString()
console.log(freeTrip.toString())

console.log('\n-.-.-.-.-Promise, Set, Map, Arrow Function-.-.-.-.-')//Promise, Set, Map, Arrow Function

class TripService {
    // • Compléter le constructeur de la classe TripService pour initialiser un Set de 3 objet Trip.
    constructor() {
        // TODO Set of 3 trips
        this.trips = new Set()

        const trip1 = new Trip('paris', 'Paris', 'img/paris.jpg')
        const trip2 = new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        const trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

        this.trips.add(trip1)
        this.trips.add(trip2)
        this.trips.add(trip3)
    }

    // Compléter la méthode findByName(tripName) pour qu’elle renvoie une promesse.
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la  recherche 

                this.trips.forEach(trip => {
                    if (trip.name == tripName) {
                        // ◦ Renvoyer l’objet Trip correspondant au nom du voyage en paramètre.
                        resolve(trip)
                    }
                    // ◦ Si aucun voyage ne correspond au nom en paramètre, renvoyer une erreur
                })
                reject(`No trip with name ${tripName}`)
            }, 2000)

        });
    }
}

class PriceService {

    // • Compléter le constructeur de la classe PriceService pour initialiser une 
    //Map (clé == identifiant voyage, valeur == prix). Stocker y 2 prix pour les villes Paris et Rio de Janeiro.
    constructor() {
        // TODO Map of 2 trips
        this.prices = new Map()
        this.prices.set('paris', 100)
        this.prices.set('rio-de-janeiro', 800)
        this.prices.set('nantes')
    }
    // Compléter la méthode findPriceByTripId pour qu’elle renvoie une promesse. 




    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            // ◦ Utiliser la méthode setTimeout(fn,delay) pour créer une latence de 2s.
            setTimeout(() => {
                // TODO utiliser resolve et reject en fonction du résultat de la recherche

                if (this.prices.has(tripId)) {
                    // ◦ Renvoyer la valeur du prix si trouvé
                    resolve(this.prices.get(tripId))
                } else {
                    // ◦ Si aucun prix trouvé, renvoyer l’erreur No price found for id xxxx.
                    reject(`No price found for id ${tripId}`)
                }

            }, 2000)
        });
    }
}

// Créer une instance de TripService et une instance de PriceService.
const tripService = new TripService()
const priceService = new PriceService()

// • Effectuer une recherche par nom de voyage avec la valeur Paris. Afficher dans la console le résultat trouvé.
tripService.findByName('Paris').then(trip => console.log(trip)).catch().catch(err => console.log(err))

//Effectuer une recherche par nom de voyage avec la valeur Toulouse. Afficher dans la console le résultat trouvé.
tripService.findByName('Toulouse').then(trip => console.log(trip)).catch(err => console.log(err))

//Chainer l’utilisation des services TripService et PriceService pour récupérer le prix du voyage 'Rio de Janeiro'.
tripService.findByName('Rio de Janeiro').then(trip => priceService.findPriceByTripId(trip.id)
    .then(price => console.log(price)).catch(errr => console.log(err))).catch(err => console.log(err))

//Chainer l’utilisation des services TripService et PriceService pour récupérer le prix du voyage 'Nantes'.
tripService.findByName('Nantes').then(trip => priceService.findPriceByTripId(trip.id)
    .then(price => console.log(price)).catch(errr => console.log(err))).catch(err => console.log(err))
