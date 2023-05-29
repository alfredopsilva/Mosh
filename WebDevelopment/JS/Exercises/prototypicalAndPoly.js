function HtmlElement()
{
    this.click = function(){
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function()
{
    console.log('focused')
}

function htmlSelectElement(items = []){
    this.items = items; 

    this.addItem = function(item)
    {
        this.items.push(item);
    }

    this.removeItem = function(item)
    {
        this.items.splice(this.items.indexOf(item),1);
    }

    this.render = function()
    {
        return `<select>${this.items.map(item => `<option>${item}</option>`).join('')}</select>`
    }
}

htmlSelectElement.prototype = new HtmlElement()

function HtmlImageElement(src)
{
    this.src = src; 

    this.render = function () { 
        return `<img src="${this.src}" />`
    }
}