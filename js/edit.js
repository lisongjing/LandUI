const cacheCommandDetailHtml = {
    'c1': `<div class="collapsible-header script">
        <b class="ml-1p5 mr-1p5">如果</b>
        <div class="input-field ml-1p5 mr-1p5">
        <select>
        <option disabled selected>变量</option>
        <optgroup label="全局变量">
            <option value="v5">日期时间</option>
            <option value="v6">剪贴板内容</option>
        </optgroup>
        </select>
        </div>

        <div class="input-field ml-1p5 mr-1p5">
        <select>
        <option disabled selected>满足条件</option>
            <option value="cd1">没有值</option>
            <option value="cd2">有任何值</option>
            <option value="cd3">等于</option>
            <option value="cd4">不等于</option>
            <option value="cd5">包含</option>
            <option value="cd6">不包含</option>
            <option value="cd7">开头是</option>
            <option value="cd8">结尾是</option>
        </select>
        </div>

        <div class="input-field ml-1p5 mr-1p5">
        <select>
        <option disabled selected>变量</option>
        <optgroup label="全局变量">
            <option value="v5">日期时间</option>
            <option value="v6">剪贴板内容</option>
        </optgroup>
        </select>
        </div>
        <a class="waves-effect waves-teal btn-flat center-align remove-cmd-btn" onclick="removeCurrentCommand(this)"><i class="material-icons tiny">close</i></a>
       </div>
        <div class="collapsible-body grey lighten-5">
        拖放指令到里面
        </div>`,

        'c3': `<div class="collapsible-header script hoverable">
        <b class="ml-1p5 mr-1p5">等待(秒)：</b>
        <div class="input-field ml-1p5 mr-1p5">
          <input id="input-url" type="number" class="validate" size="40" required>
          <label for="input-url">等待的秒数</label>
        </div>
      <a class="waves-effect waves-teal btn-flat center-align remove-cmd-btn" onclick="removeCurrentCommand(this)"><i class="material-icons tiny">close</i></a>  
        </div>`,

        'c6': `<div class="collapsible-header script hoverable">
          <b class="ml-1p5 mr-1p5">新建浏览器窗口</b>
          <div class="switch ml-1p5 mr-1p5">
          隐藏窗口？
            <label>
            否
            <input type="checkbox">
            <span class="lever"></span>
            是
            </label>
        </div>
        <a class="waves-effect waves-teal btn-flat center-align remove-cmd-btn" onclick="removeCurrentCommand(this)"><i class="material-icons tiny">close</i></a>  
          </div>`,

          'c8': `<div class="collapsible-header script hoverable">
          <b class="ml-1p5 mr-1p5">打开网页链接：</b>
          <div class="input-field ml-1p5 mr-1p5">
          <input id="input-url" type="text" class="validate" size="40" required>
          <label for="input-url">URL</label>
        </div>
        <a class="waves-effect waves-teal btn-flat center-align remove-cmd-btn" onclick="removeCurrentCommand(this)"><i class="material-icons tiny">close</i></a>
          </div>`,

          'c11': `<div class="collapsible-header script hoverable">
          <b class="ml-1p5 mr-1p5">定位网页元素：</b>
          <div class="input-field ml-1p5 mr-1p5">
          <input id="input-url" type="text" class="validate" size="40" required>
          <label for="input-url">XPath</label>
        </div>
        <a class="waves-effect waves-teal btn-flat center-align remove-cmd-btn" onclick="removeCurrentCommand(this)"><i class="material-icons tiny">close</i></a>
          </div>`,

          'c14': `<div class="collapsible-header script hoverable">
          <b class="ml-1p5 mr-1p5">点击网页元素：</b>
          <div class="switch ml-1p5 mr-1p5">
          强制点击？
            <label>
            否
            <input type="checkbox">
            <span class="lever"></span>
            是
            </label>
        </div>
        <a class="waves-effect waves-teal btn-flat center-align remove-cmd-btn" onclick="removeCurrentCommand(this)"><i class="material-icons tiny">close</i></a>
          </div>`,

          'c15': `<div class="collapsible-header script hoverable">
          <b class="ml-1p5 mr-1p5">点击网页元素：</b>
          <div class="input-field ml-1p5 mr-1p5">
        <select>
        <option disabled selected>方式</option>
            <option value="cd1">单击鼠标主键(通常是左键)</option>
            <option value="cd2">双击鼠标主键(通常是左键)</option>
            <option value="cd3">单击鼠标次键(通常是右键)</option>
            <option value="cd4">双击鼠标次键(通常是右键)</option>
            <option value="cd5">单击鼠标中键</option>
            <option value="cd6">双击鼠标中键</option>
        </select>
        </div>
        <a class="waves-effect waves-teal btn-flat center-align remove-cmd-btn" onclick="removeCurrentCommand(this)"><i class="material-icons tiny">close</i></a>
          </div>`,

          'c17': `<div class="collapsible-header script hoverable">
          <b class="ml-1p5 mr-1p5">输入文本：</b>
          <div class="switch ml-1p5 mr-1p5">
          强制使用键盘模拟？
            <label>
            否
            <input type="checkbox">
            <span class="lever"></span>
            是
            </label>
        </div>
          <div class="input-field ml-1p5 mr-1p5">
          <input id="input-url" type="text" class="validate" size="40" required>
          <label for="input-url">文本</label>
        </div>
        <a class="waves-effect waves-teal btn-flat center-align remove-cmd-btn" onclick="removeCurrentCommand(this)"><i class="material-icons tiny">close</i></a>
          </div>`
}

document.addEventListener('DOMContentLoaded', function () {
    let commandLists = document.querySelectorAll('.collapsible.expandable');
    commandLists.forEach(commandList => M.Collapsible.init(commandList, {
        accordion: false
    }));

    let tooltipBtns = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltipBtns, {
        enterDelay: 1500,
        margin: 0
    });

    let pins = document.querySelectorAll('.pushpin');
    M.Pushpin.init(pins);

    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    let scriptContainer = document.querySelector('.collapsible.script');
    let commandContainers = document.querySelectorAll('.collection.commands');

    commandContainers.forEach(commandContainer => new Sortable(commandContainer, {
        group: {
            name: 'command-shared',
            pull: 'clone',
            put: false // Do not allow items to be put into this list
        },
        animation: 150,
        sort: false, // To disable sorting: set sort to false
        // dataIdAttr: 'data-id'
    }));

    new Sortable(scriptContainer, {
        group: 'command-shared',
        animation: 150,
        // dataIdAttr: 'data-id',
        onAdd: function (/**Event*/evt) {
            // console.log(evt);
            let commandItem = evt.item;
            commandItem = commandExpand(commandItem);
            let index = evt.newIndex;
            scriptContainer.replaceChild(commandItem, scriptContainer.children[index]);
            
            let selects = document.querySelectorAll('select');
            M.FormSelect.init(selects);

            scriptContainerExpandHeight();
        }
    });

    const commandExpand = commandItem => {
        let innerHtml = cacheCommandDetailHtml[commandItem.getAttribute('data-id')].trim();
        // console.log(innerHtml);
        let commandDetailItem = document.createElement('li');
        commandDetailItem.className = 'hoverable mb-1p5';
        commandDetailItem.innerHTML = innerHtml;
        return commandDetailItem;
        // scriptContainer.appendChild(commandDetailItem);
    }

    let pageCloseBtn = document.querySelector('.page-close-btn');
    pageCloseBtn.onclick = () => window.windowAPI.closeWindow();

    Object.keys(cacheCommandDetailHtml).forEach(id => {
        let commandItem = document.querySelector(`[data-id="${id}"]`);
        let text = commandItem.innerText;
        commandItem.innerHTML = `<span class="new badge"></span>${text}`
    });

    scriptContainerExpandHeight();

});

function removeCurrentCommand(source) {
    currentItem = source.parentElement.parentElement;
    currentItem.parentElement.removeChild(currentItem);
}

const runBtnCode = '<a class="tooltipped btn-floating btn waves-effect waves-light green" id="run-btn" data-position="bottom" data-tooltip="运行" onclick="executeScript(this)"><i class="material-icons">play_arrow</i></a>';
const stopBtnCode = '<a class="tooltipped btn-floating btn waves-effect waves-light red" id="stop-btn" data-position="bottom" data-tooltip="停止" onclick="executeScript(this)"><i class="material-icons">stop</i></a>'

function executeScript(source) {
    let parent = source.parentElement;
    if(source.id == 'run-btn') {
        let tmpContainer = document.createElement('div');
        tmpContainer.innerHTML = stopBtnCode;
        parent.replaceChild(tmpContainer.children[0], source);
        const Http = new XMLHttpRequest();
        const url = 'http://127.0.0.1:1111/execute';
        Http.open("POST", url);
        Http.send();
    
        Http.onreadystatechange = e => {
            console.log(Http.responseText);
            tmpContainer.innerHTML = runBtnCode;
            parent.replaceChild(tmpContainer.children[0], parent.children[1]);
        }
    } else if(source.id == 'stop-btn') {
        let tmpContainer = document.createElement('div');
        tmpContainer.innerHTML = runBtnCode;
        parent.replaceChild(tmpContainer.children[0], source);
    }
}

function scriptContainerExpandHeight() {
    let scriptContainer = document.querySelector('.collapsible.script');
    if(scriptContainer.scrollHeight >= 400) {
        scriptContainer.setAttribute('style', `min-height: ${scriptContainer.scrollHeight + 200}px;`);
    }
}