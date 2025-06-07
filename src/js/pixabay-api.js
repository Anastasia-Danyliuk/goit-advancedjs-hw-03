export const fetchPhotosByQuery = searchQuery => {
  const requestParams = new URLSearchParams({
    q: searchQuery,
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    key: '50729371-43a7836f0c474a05c441d935f',
  });

    return fetch(`https://pixabay.com/api/?${requestParams}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
}