'use strict';


const getStorage = () => (localStorage.getItem('phonebook') ?
  JSON.parse(localStorage.getItem('phonebook')) : []);

const setStorage = (data) => {
    localStorage.setItem('phonebook', JSON.stringify(data));
  };

const removeStorage = (phone) => {
    const data = getStorage('phonebook');
    const newData = data.filter(item => item.phone !== phone);
    setStorage(newData);
  };

const addStorage = (data) => {
    const newData = getStorage('phonebook');
    newData.push(data);
    setStorage(newData);
  };

export default {
  getStorage,
  setStorage,
  removeStorage,
  addStorage,
};
