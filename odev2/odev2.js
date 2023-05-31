const blog = [
    { text: 'blog 1' }, { text: 'blog2' }, { text: 'blog3' }, { text: 'blog4' }
]

function addTest(test) {
    blog.push(test);
}

function sortTest() {
    blog.map((value) => {
        console.log(value.text)
    })
}

async function funcFull() {
    try {
        console.log('1.list')
        sortTest();
        console.log('2.list')
        const add = await addTest({ text: 'blog5' })
        sortTest();

    } catch (error) {
        console.log(error)
    }

}

funcFull();