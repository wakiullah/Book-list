let Name = document.getElementById('name')
let writer = document.getElementById('writer')
let year = document.getElementById('year')
let btn = document.getElementById('btn')
let bookList = document.getElementById('bookList')


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()
    if (Name.value === '') {
        document.getElementById('notBook').innerHTML = 'Please enter a Name'
    }
    if (writer.value === '') {
        document.getElementById('notWriter').innerHTML = 'Please enter a Writer Name'
    }
    if (year.value === '') {
        document.getElementById('notYear').innerHTML = 'Please enter a Year'
    } else {
        let newrow = document.createElement('tr')

        let apppendName = document.createElement('td')
        apppendName.innerHTML = Name.value
        newrow.appendChild(apppendName)

        let apppendWriter = document.createElement('td')
        apppendWriter.innerHTML = writer.value
        newrow.appendChild(apppendWriter)

        let apppendYear = document.createElement('td')
        apppendYear.innerHTML = year.value
        newrow.appendChild(apppendYear)

        bookList.appendChild(newrow)
    }
})