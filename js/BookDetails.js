document.addEventListener('DOMContentLoaded', function() {

    function getItemDetails() {
        // Parse the ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');
    
        // Sample data (replace with your actual data retrieval logic)
        const suppliesRequests = [
               
                { 
                    id: 3,
                    item: 'Imagine Me',
                    category: 'Books',
                    quantity: 3888,
                    bookDetails: {
                        bookName: 'Imagine ME',
                        authors: 'Tahereh Mafi',
                        languages: ['English'],
                        edition: '1st Edition',
                        summary: 'is the sixth and final book in Tahereh Mafis "Shatter Me" series, continuing Juliettes journey as she navigates her newfound leadership role in a world on the brink of war. It delves deeper into the complexities of power, identity, and sacrifice while resolving the series overarching conflicts and character arcs.',
                        image: 'Pictures/imagineme.jpg', // URL to the book's image
                    }
                },

                { 
                    id: 5,
                    item: 'Shatter Me',
                    category: 'Books',
                    quantity:18,
                    bookDetails: {
                        bookName: 'Shatter Me',
                        authors: 'Tahereh Mafi',
                        languages: ['English'],
                        edition: '2st Edition',
                        summary: '"Shatter Me" is a dystopian novel by Tahereh Mafi, following Juliette Ferrars, a girl with a lethal touch locked away by the government. When she is given a chance to use her power against rebels, she discovers secrets that challenge her beliefs and fuel a complex love story in a world of oppression and rebellion',
                        image: 'Pictures/ShatterME.jpg', // URL to the book's image
                    }
                },
                
                { 
                    id: 6,
                    item: 'Ignite Me',
                    category: 'Books',
                    quantity: 38,
                    bookDetails: {
                        bookName: 'Ignite Me',
                        authors: 'Tahereh Mafi',
                        languages: ['English'],
                        edition: '2st Edition',
                        summary: 'continuing Juliette Ferrars journey as she embraces her abilities and joins the fight against the oppressive Reestablishment. The book delves deeper into Juliettes character development, her relationships with others, and the larger conflict between rebellion and tyranny in a dystopian world.',
                        image: 'Pictures/igniteme.jpeg', // URL to the book's image
                    }
                },
                
                { 
                    id: 7,
                    item: 'Restore Me',
                    category: 'Books',
                    quantity: 388,
                    bookDetails: {
                        bookName: 'Restore Me',
                        authors: 'Tahereh Mafi',
                        languages: ['English'],
                        edition: '1st Edition',
                        summary: 'It follows Juliette Ferrars as she grapples with newfound responsibilities as Supreme Commander and the complexities of ruling a fractured world while facing internal and external threats. The novel delves into political intrigue, personal growth, and the consequences of power in a post-apocalyptic society.',
                        image: 'Pictures/RestoreMe.jpg', // URL to the book's image
                    }
                },
                { 
                    id: 3,
                    item: 'Imagine Me',
                    category: 'Books',
                    quantity: 3888,
                    bookDetails: {
                        bookName: 'Imagine ME',
                        authors: 'Tahereh Mafi',
                        languages: ['English'],
                        edition: '1st Edition',
                        summary: 'is the sixth and final book in Tahereh Mafis "Shatter Me" series, continuing Juliettes journey as she navigates her newfound leadership role in a world on the brink of war. It delves deeper into the complexities of power, identity, and sacrifice while resolving the series overarching conflicts and character arcs.',
                        image: 'Pictures/imagineme.jpg', // URL to the book's image
                    }
                },

                { 
                    id: 10,
                    item: 'November 9',
                    category: 'Books',
                    quantity: 12,
                    bookDetails: {
                        bookName: 'November 9',
                        authors: 'Collen Hoover',
                        languages: ['English'],
                        edition: '1st Edition',
                        summary: 'is a captivating romance novel that follows the lives of Fallon and Ben, who meet every year on the same date. Their unique arrangement of meeting once a year creates a deeply emotional and suspenseful narrative, exploring themes of love, fate, and second chances.',
                        image: 'Pictures/Nov9.jpg', // URL to the book's image
                    }
                },
                { 
                    id: 11,
                    item: 'Reminders of Him',
                    category: 'Books',
                    quantity: 12,
                    bookDetails: {
                        bookName: 'Reminders of Him',
                        authors: 'Collen Hoover',
                        languages: ['English'],
                        edition: '1st Edition',
                        summary: 'After serving five years in prison for a tragic mistake, Kenna Rowan returns to the town where it all went wrong, hoping to reunite with her four-year-old daughter. But the bridges Kenna burned are proving impossible to rebuild.',
                        image: 'Pictures/remindersOfHim.jpg', // URL to the book's image
                    }
                },

        ];
    
        // Find the item with the matching ID
        const selectedItem = suppliesRequests.find(item => item.id === parseInt(itemId));
    
        if (selectedItem) {
            // Update HTML elements with item details
            document.getElementById('itemQuantity').textContent = selectedItem.quantity;
        
            document.getElementById('BookName').textContent = selectedItem.bookDetails.bookName;
            document.getElementById('Author').textContent = selectedItem.bookDetails.authors;
            document.getElementById('Langs').textContent = selectedItem.bookDetails.languages.join(' , ');
            document.getElementById('edition').textContent = selectedItem.bookDetails.edition;
            document.getElementById('Sum').textContent = selectedItem.bookDetails.summary;
            document.getElementById('Pic').setAttribute('src', selectedItem.bookDetails.image);

            const imageElement = document.getElementById('Pic');
            imageElement.setAttribute('src', selectedItem.bookDetails.image); // Set image source
            imageElement.onerror = function() {
                console.error('Error loading image:', selectedItem.bookDetails.image);
            };
        } 
        else {
            // Handle case where item with specified ID is not found
            console.error('Item not found.');
        }
    }
    
    // Call getItemDetails when the page loads
    getItemDetails();
    
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });


    document.getElementById('donation').addEventListener('click', function() {
        const requestedQuantity = parseInt(document.getElementById('itemQuantity').textContent);
        const enteredQuantity = parseInt(document.getElementById('quantityInput').value);

        if (enteredQuantity > requestedQuantity) {
            const complement = confirm(`The requested quantity is ${requestedQuantity}, but you entered ${enteredQuantity}. Do you want to complement?`);

            if (complement) {
                // Redirect to complement page or handle complement logic here
                window.location.href = 'pickup.html'; // Replace 'ComplementPage.html' with your actual complement page
            } else {
                // Do nothing or show a message
            }
        } else {
            // Handle case where entered quantity is valid for donation
            window.location.href = 'pickup.html';
            // Redirect or perform further actions as needed
        }
    });
    });
    