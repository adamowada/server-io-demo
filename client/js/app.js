'use strict';

document.getElementById('editor').addEventListener('submit', editFile);

async function pageLoad() {
    try {
        const res = await axios.get('http://localhost:3001/get-file');
        document.getElementById('textarea').innerText = res.data;
        console.log('File loaded');
    } catch (error) {
        console.error(error);
    }
}

async function editFile(e) {
    e.preventDefault();
    const file = e.target.textarea.value;
    try {
        const res = await axios.post('http://localhost:3001/post-file', {
            "file": file
        });
    } catch (error) {
        console.error(error);
    }
}

pageLoad();

