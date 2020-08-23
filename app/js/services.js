app.service('clientService', function($http, $rootScope) {
  
    this.getAll = function() {
        return JSON.parse(localStorage.getItem('clients'));
    }
    
    this.getSingle = function(id) {
        let items =  JSON.parse(localStorage.getItem('clients'));

        let item = items.filter((el)=>{
            if (el.id == id) return el
        })

        return item[0];
    }

    this.create = function(name, age, gender) {

        let client = {
            id: this._uuid(),
            name: name,
            age: age,
            gender: gender,
        }
        
        if (!localStorage.getItem('clients')) {
            let clientsArray = new Array();
            clientsArray.push(client);
            localStorage.setItem('clients', JSON.stringify(clientsArray))
        } else {

            let items = JSON.parse(localStorage.getItem('clients'));
            
            items.push(client)
            
            localStorage.setItem('clients', JSON.stringify(items))
        }

    };

    this.update = function(id, name, age, gender) {

        let client = {
            id: id,
            name: name,
            age: age,
            gender: gender,
        }
        
        
        let items = JSON.parse(localStorage.getItem('clients'));

         items.forEach(el => {
            if (el.id == client.id ) {
                el.name = client.name,
                el.age = client.age,
                el.gender = client.gender
            }
         });

        localStorage.setItem('clients', JSON.stringify(items))

    };

    this.delete = function(id) {
        let items = JSON.parse(localStorage.getItem('clients'));

        let itemsUpdated =  items.filter(el => {
            if (el.id != id ) return el
         });

        localStorage.setItem('clients', JSON.stringify(itemsUpdated))
    }

  
    this._uuid = function() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
});
