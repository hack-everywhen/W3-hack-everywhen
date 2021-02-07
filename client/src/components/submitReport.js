


export function submitReport(data) {
    return fetch('localhost:8000/report', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
            console.log(response);
            window.location.reload();
        } else {
            console.log('Something happened wrong');
        }
    }).catch(err => err)
}