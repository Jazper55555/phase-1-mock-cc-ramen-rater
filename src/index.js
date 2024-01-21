// FETCH the data first
// Use a forEach to get each image from the data
// Create img tag
// Append the image to the #ramen-menu div

document.addEventListener('DOMContentLoaded', (event) => {
    // event.preventDefault
    // console.log('DOM works')
    fetchData()
})

function fetchData() {
    // console.log('function works')
    fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then((data) => {
        // console.log(data)
        const ramenData = data
        // console.log(imagesData)
        const imageContainer = document.getElementById('ramen-menu')
        // console.log(imageContainer)

        ramenData.forEach((ramen) => {
            const imageUrl = ramen['image']
            // console.log(imageUrl)
            const imageData = document.createElement('img')
            // console.log(imageData)
            imageData.src = imageUrl
            // console.log(imageData)
            imageContainer.appendChild(imageData)

            // Create click event for imageData
            // Get info and display inside #ramen-detail
            // Name and Restaurant go inside class='name' & class='restaurant'
            // Rating goes in id='rating-display'
            // Comment goes in id='comment-display'
            imageData.addEventListener('click', (event) => {
                // event.preventDefault
                // const ramenDetails = document.getElementById('ramen-detail')
                // console.log(ramenDetails)
                const image = document.querySelector('.detail-image')
                // console.log(image)
                const name = document.querySelector('.name')
                // console.log(name)
                const restaurant = document.querySelector('.restaurant')
                // console.log(restaurant)
                const rating = document.getElementById('rating-display')
                // console.log(rating)
                const comment = document.getElementById('comment-display')
                // console.log(comment)
            
                image.src = imageUrl

                const nameData = ramen['name']
                // console.log(nameData)
                name.textContent = nameData
                
                const restaurantData = ramen['restaurant']
                // console.log(restaurantData)
                restaurant.textContent = restaurantData

                const ratingData = ramen['rating']
                // console.log(ratingData)
                rating.textContent = ratingData

                const commentData = ramen['comment']
                // console.log(commentData)
                comment.textContent = commentData
            })
        })

        // Make sure you are receiving input data from the form first
        // Create an event listener for 'submit' with code to POST new data to json server
        // Make a POST request with the submitted data (POTENTIALLY NOT NEEDED)
        // const postNewRamen = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         name: 
        //     })
        // }

        const newRamenForm = document.querySelector('#new-ramen')

        newRamenForm.addEventListener('submit', formSubmitButton)

        function formSubmitButton(event) {
            event.preventDefault()

            const newName = document.getElementById('new-name') 
            // console.log(newName)   
            const newNameValue = newName.value
            // console.log(newNameValue)       
            
            const newRestaurant = document.getElementById('new-restaurant')
            const newRestaurantValue = newRestaurant.value

            const newImage = document.getElementById('new-image')
            const newImageValue = newImage.value   
            
            const newRating = document.getElementById('new-rating')
            const newRatingValue = newRating.value

            const newComment = document.getElementById('new-comment')
            const newCommentValue = newComment.value

            const image = document.querySelector('.detail-image')
            // console.log(image)
            const name = document.querySelector('.name')
            // console.log(name)
            const restaurant = document.querySelector('.restaurant')
            // console.log(restaurant)
            const rating = document.getElementById('rating-display')
            // console.log(rating)
            const comment = document.getElementById('comment-display')
            // console.log(comment)

            image.src = newImageValue
            name.textContent = newNameValue
            restaurant.textContent = newRestaurantValue
            rating.textContent = newRatingValue
            comment.textContent = newCommentValue
        }
    })
    .catch((error) => {
        console.error('Error:', error)
    })
}