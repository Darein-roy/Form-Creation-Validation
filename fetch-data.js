// Initializing the async function
async function fetchUserData (){
    
    // defining the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // selecting data container element
    const dataContainer = document.getElementById('api-data');

    // fetching the data 
    try {
        const response = await fetch('apiUrl');
        const users = await response.json();

        // clear the loading massage 
        dataContainer.innerHTML = '';

        // create and append userlist
        const userList = document.createElement('ul');

        users.array.forEach(user => {
        const userName = document.createElement('li');
        userName.textContent = 'user';
        document.userList.appendChild(userName);
        });
        document.dataContainer.appendChild(userList);
    } catch {
        dataContainer.innerHTML = 'Failed to load user data.';

    };   
};

document.addEventListener('DOMContentLoaded', function(){
    fetchUserData();
});