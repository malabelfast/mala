let images = document.querySelectorAll('.js-image');

// Loop through each item

for (let i = 0; i < images.length; i++) {
  let element = images[i];

  console.log(element);

  // Find the current item's :after pseudo element, and return its 'content: ""' style

  // .replace(/"|'/g, '') removes unnecessary quotes

  let link = getComputedStyle(element, ':after').content.replace(/"|'/g, '');

  element.href = link;
}