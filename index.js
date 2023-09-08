function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function mega_func() {
    const server_id = document.getElementById("server_id").value
    const res = fetch(`https://discord.com/api/guilds/${server_id}/widget.json`)
        .then(async function (r) {
            if (r.status == 200) {
                r.json().then(function (server) {
                    console.log(server)
                    let serverName = server['name']
                    let serverId = server['id']
                    let members = server['members']
                    let membersCount = members.length

                    document.getElementById("search").innerHTML = `
                            <div class="server-info">
                                <div>
                                    <span>${membersCount} online</span>
                                </div>
                                <div>
                                    <span>${serverName}</span>
                                </div>
                                <div>
                                    <a onclick="location.reload()">Back</a>
                                </div>
                                
                            </div>  
                            
                            `
                    members.forEach((user) => {
                        disc = user['discriminator']
                        username = user['username']
                        avatar = user['avatar_url']
                        status = user['status']
                        if (disc != "0000") {
                            username += `#${disc}`
                        }
                        document.querySelector("#content").insertAdjacentHTML('beforeend', `
                        <div class="user">
                            <img class="left" src="${avatar}">
                            <div class="right">
                                <span class="username">${username}</span>
                                <div class="color ${status}"><span class="status">${status}</span></div>
                            </div>                
                        </div>`)
                    })
                })
            } else {
                document.getElementById('error').innerHTML = "<h2>invalid id</h2>"
                await sleep(2000)
                document.getElementById('error').innerHTML = ""
            }

        })
}


async function mega_func1() {
    let server = await fetch(`https://discord.com/api/guilds/${server_id}/widget.json`).then(async function (r) {
        if (r.status === 200) {
            return r.json()
        } else {
            document.getElementById('error').innerHTML = "<h1>invalid id</h1>"
            await sleep(2000)
            document.getElementById('error').innerHTML = ""
        }
    })

    let serverName = server['name']
    let serverId = server['id']
    let members = server['members']
    let membersCount = members.length

    document.getElementById("search").innerHTML = `
                            <div class="server-info">
                                <div>
                                    <span>${membersCount} online</span>
                                </div>
                                <div>
                                    <span>${serverName}</span>
                                </div>
                                <div>
                                    <a onclick="location.reload()">Back</a>
                                </div>

                            </div>

                            `
    members.forEach((user) => {
        let disc = user['discriminator']
        let username = user['username']
        let avatar = user['avatar_url']
        let status = user['status']
        if (disc !== "0000") {
            username += `#${disc}`
        }
        document.querySelector("#content").insertAdjacentHTML('beforeend', `
                        <div class="user">
                            <img class="left" src="${avatar}">
                            <div class="right">
                                <span class="username">${username}</span>
                                <div class="color ${status}"><span class="status">${status}</span></div>
                            </div>
                        </div>`)
    })

}
