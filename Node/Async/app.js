// console.log('Before')

// getUser(1, getRepositories);

// function getRepositories(user){
//     console.log(user)
//     getRepositories(user.githubUserName, namedGetRepositories)
// }

// function namedGetRepositories(user){
//     console.log(`UserName : ${user.githubUserName} = > repos ${repos}`)
//     getCommits(repos, displayCommits)
// }

// function displayCommits(commits){
//     console.log(commits);
// }

// console.log('After')


// getUser(1)
//     .then(user => getRepositories(user.githubUserName))
//     .then(repositories => getCommits(repositories))
//     .then(commits => console.log(commits))
//     .catch(err => console.log("Error", err.message));

// Async and Await Approach

async function displayCommits(){
    try 
    {
        const user = await getUser(1);
        const repositories = await getRepositories(user.githubUserName);
        const commits = await getCommits(repositories);
        console.log(commits);
    } catch (error) {
        console.log("Error", error)
    }
}

displayCommits()

function getUser(id) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => { 
            console.log("Reading a user from a Database");
            resolve({ id: id, githubUserName: "Alfredo" })
        },2500)
    })
}

function getRepositories(username) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Accessing GitHub API and Retrieving Info")
            // resolve(['repo1', 'repo2', 'repo3']);
            reject(new Error("Could not get the repos"))
        }, 2000)
    })
}

function getCommits(repos){
    return new Promise((resolve,reject) => {
        setTimeout(() => { 
            console.log("Calling GitHub API...")
            resolve(['Commit1', 'Commit2'])
        }, 2000)
    })
}