//Challenge: Write a simple script that uses the fetch API to make a GET request to a public API (e.g., https://jsonplaceholder.typicode.com/posts/1). Log the response data to the console. This is a foundational skill for API automation.

async function fetchPost() 
{
    try 
    {
        const response  = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data.title)
    }
    catch(error)
    {
    console.error('There was an error fetching the data:', error);
    }
}

fetchPost()