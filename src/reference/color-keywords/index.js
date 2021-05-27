const greyColorTable = document.getElementById('grey-color-table')
greyColors.forEach((color) => {
  greyColorTable.insertAdjacentHTML('beforeend', `<div class="color-cell">${color}</div>`)
})

const redColorTable = document.getElementById('red-color-table')
redColors.forEach((color) => {
  redColorTable.insertAdjacentHTML('beforeend', `<div class="color-cell">${color}</div>`)
})

const blueColorTable = document.getElementById('blue-color-table')
blueColors.forEach((color) => {
  blueColorTable.insertAdjacentHTML('beforeend', `<div class="color-cell">${color}</div>`)
})

const tables = document.querySelectorAll('.table');
for (let i = 0; i < tables.length; i++) {
  [...tables[i].children].forEach((cell) => {
    const color = cell.textContent;
    cell.textContent = '';
    cell.style.backgroundColor = color;
    cell.dataset.color = color;
  
    cell.addEventListener('mouseover', () => {
      const tooltip = document.createElement('div');
      tooltip.textContent = color;
      tooltip.classList.add('tooltip');
      cell.addEventListener(
        'mouseleave',
        () => {
          tooltip.remove();
        },
        {
          once: true,
        }
      );
      cell.append(tooltip);
    });
  
    cell.addEventListener('click', () => {
      copyColorClipboard(color);
      
    });
  });

}

function copyColorClipboard(color) {
  const textarea = document.createElement('textarea');
  textarea.textContent = color;
  document.body.append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}
