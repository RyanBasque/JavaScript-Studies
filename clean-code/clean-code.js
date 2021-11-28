// ruim
const y = new Date().getFullYear();

// bom
const currentYear = new Date().getFullYear();

// ruim - mantenha padrões de nomenclatura
const customerId = Math.random().toString(35).substr(2, 9);
const clientname = 'Robson Pereira';
const userAge = 54;

// bom
const userId = Math.random().toString(35).substr(2, 9);
const userName = 'Robson Pereira';
const userAge = 54;

// ruim 
const userInfo = {
  userId: Math.random().toString(35).substr(2, 9),
  userName: 'Robson Pereira',
  userAge: 54,
};

// bom
const userInfo = {
  id: Math.random().toString(35).substr(2, 9),
  name: 'Robson Pereira',
  age: 54,
};

// ruim

function insertName (name) {
  if(name) {
    document.getElementById('userName').innerHTML = name;
  } else {
    document.getElementById('userName').innerHTML = 'Sem nome!';
  }
}

// bom

function insertName (name = 'Sem nome!') {
  document.getElementById('userName').innerHTML = name;
}