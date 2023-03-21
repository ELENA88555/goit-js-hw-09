import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formSubmit = document.querySelector('.form');
formSubmit.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();

  let delay = Number(event.currentTarget.delay.value);
  const step = Number(event.currentTarget.step.value);
  const amount = Number(event.currentTarget.amount.value);


  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
      
      })
      .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
      ;
      });
      delay += step;
    event.currentTarget.reset()
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => 
  setTimeout(() => {
    {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }
  }, delay)
  
    
  )
}