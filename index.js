
const form = document.querySelector('form');
const list = document.querySelector('ul');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 
  const input = form.querySelector('input[type="text"]');
  const taskName = input.value.trim();
  if (taskName) {
    
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskName;
    li.appendChild(span);
   
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.addEventListener('click', function() {
      li.remove(); 
    });
    li.appendChild(button);
    list.appendChild(li);
    input.value = '';
  }
});
