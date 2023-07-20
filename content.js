// Remove unwanted elements from the page
const removeElements = (selector) => {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.remove();
  }
};

// Remove explicit and adult content from Google search results
const applyStrictSafeSearch = () => {
  const searchResults = document.querySelectorAll('.g .r > a');
  for (const result of searchResults) {
    const url = result.getAttribute('href');
    if (shouldBlock(url)) {
      result.parentNode.parentNode.remove();
    }
  }
};

removeElements('.ad'); // Remove ads
applyStrictSafeSearch(); //strict safe search for Google


const shouldBlock = (url) => {
  
};
