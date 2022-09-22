import { createRow } from './createElements.js';


import {
  getStorage,
  setStorage,
  addStorage } from './serviceStorage.js';

const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', openModal);

  formOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === formOverlay ||
    target.closest('.close')) {
    closeModal();
    }
    });
    return {
      closeModal,
  };
};

const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
  document.querySelectorAll('.delete').forEach(del => {
    del.classList.toggle('is-visible');
  });
  });

  list.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.del-icon')) {
    target.closest('.contact').remove();
    console.log(target);

    let newStorage = getStorage();
    newStorage.splice([...document.querySelectorAll('.del-icon')].indexOf(e.target), 1);
    setStorage(newStorage);
    }
  });
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newContact = Object.fromEntries(formData);

    addContactPage(newContact, list);
    addStorage(newContact);
    form.reset();
    closeModal();
  });
};

const hoverRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach(contact => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};

export {
  modalControl,
  deleteControl,
  formControl,
  hoverRow,
};
