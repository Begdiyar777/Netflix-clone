const tabItems = document.querySelectorAll('.tab-item')
const tabContentsItems = document.querySelectorAll('.tab-content-item')


// Select tab content item
function selectItem(e){
    removeBorder()
    removeShow()

    // add border to curret tab
    this.classList.add('tab-border')

    //grab content item from dom
    const tabContentsItem = document.querySelector(`#${this.id}-content`)

    // add show class
    tabContentsItem.classList.add('show')
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){
    tabContentsItems.forEach(item => item.classList.remove('show'))
}


// listen for tab click
tabItems.forEach( item => item.addEventListener('click', selectItem))



