


const appDom = document.getElementById('app');
function render(){
    let html = appDom.innerHTML

    const date = new Date()

    html += ('<p>现在是北京时间：'+ date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDay() + "</p>")

    appDom.innerHTML = html
}
render()