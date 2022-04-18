class Storage {
    defaultValue = '666';

    constructor(name, storageType = 'local') {
        this.name = name;

        if (storageType === 'local') {
            this.storage = localStorage;
        } else if (storageType === 'session') {
            this.storage = sessionStorage;
        } else {
            alert('Wrong storage type');
        }

        this.storage.setItem(this.name, JSON.stringify(this.defaultValue));
    }

    set(value = this.defaultValue) {
        this.storage.setItem(this.name, JSON.stringify(value));
    } 
    
    get() {
        return JSON.parse(this.storage.getItem(this.name))
    }

    clear() {
        this.storage.removeItem(this.name)
    }

    isEmpty() {
        const value = this.get();
        
        return !value;
    }
}

const names = new Storage('names');
names.set('0');

alert(names.get());
// names.clear();
alert(names.isEmpty());

const names2 = new Storage('names2', 'sessio');
names2.set();

alert(names2.get());
// names2.set('undefined');
alert(names2.isEmpty());