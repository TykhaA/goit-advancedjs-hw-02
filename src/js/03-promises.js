import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form')

form.addEventListener('submit', handleSubmit);

iziToast.settings({
    timeout: 3000, 
    resetOnHover: true,
    position: 'topRight',
});
 
function handleSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;

  const delayValue = delay.value;
  const stepValue = step.value;
  const amauntValue = amount.value;
  if (delayValue && stepValue && amauntValue) {
    let firstDelae = delayValue;
    for (let i = 1; i <= amauntValue; i++){
      createPromise(i, firstDelae)
        .then(({ position, delay }) => {
          iziToast.success({
            message: `✅ Fulfilled promise ${position} in ${delay}ms`,
          
          });
        })
        .catch(({ position, delay }) => {
          iziToast.error({
            message: `✅ Rejected promise ${position} in ${delay}ms`,
          });
        })
        .finally(() => form.reset());
      firstDelae = +firstDelae + +stepValue;
    }
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    if (shouldResolve) {
      setTimeout(() => {res({position, delay})},delay)
    } else {
     setTimeout(() => {rej({position, delay})},delay)
  }
  })
}
