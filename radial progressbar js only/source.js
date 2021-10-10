var RadialProgress = function(size, barSize, barColor, backgroundColor, textColor, zIndex) {
    this.radialProgress = document.createElement('div');
    this.style = document.createElement('style');
    this.progress = 0;

    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozAnimationFrame ||
        window.webkitAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    barSize = (barSize % 2 === 1) ? (barSize + 1) : barSize;
    var innerSize = size - barSize;
    var innerMargine = barSize / 2;

    this.radialProgress.className = 'radial-progress';
    this.radialProgress.innerHTML = '<div class="inner-circle">' +
        '<div class="progress">0%<' + '/div>' +
        '</div>' +
        '<div class="outer-circle">' +
        '<div class="mask full">' +
        '<div class="fill"></div>' +
        '</div>' +
        '<div class="mask">' +
        '<div class="fill"></div>' +
        '<div class="fill fix"></div>' +
        '</div>' +
        '</div>';

    this.style.type = 'text/css';
    this.style.innerHTML = '.radial-progress {' +
        'width:' + size + 'px;' +
        'height: ' + size + 'px;' +
        'position: absolute;' +
        'margin: auto;' +
        'top: 0; right: 0; bottom: 0; left: 0;' +
        'z-index: ' + zIndex + ';' +
        'background-color: #DDD;' +
        'border-radius: 50%;' +
        'box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);' +
        '}' +
        '.radial-progress .inner-circle {' +
        'width: ' + innerSize + 'px;' +
        'height: ' + innerSize + 'px;' +
        'position: absolute;' +
        'margin-top: ' + innerMargin + 'px;' +
        'margin-left: ' + innerMargin + 'px;' +
        'background-color: ' + backgroundColor + ';' +
        'border-radius: 50%;' +
        'z-index: 10;' +
        '}' +
        '.radial-progress .inner-circle .progress {' +
        'height: 1em;' +
        'position: absolute;' +
        'margin: auto;' +
        'top: 0; right: 0; bottom: 0; left: 0;' +
        'text-align: center;' +
        'color: ' + textColor + ';' +
        '}' +
        '.radial-progress .outer-circle .mask,' +
        '.radial-progress .outer-circle .fill {' +
        'width: ' + size + 'px;' +
        'height: ' + size + 'px;' +
        'position: absolute;' +
        'border-radius: 50%;' +
        '-webkit-backface-visibility: hidden;' +
        '}' +
        '.radial-progress .outer-circle .mask {' +
        'clip: rect(0px, ' + size + 'px, ' + size + 'px, ' + size / 2 + 'px);' +
        '}' +
        '.radial-progress .outer-circle .mask .fill {' +
        'clip: rect(0px, ' + size / 2 + 'px, ' + size + 'px, 0px);' +
        'background-color: ' + barColor + ';' +
        '}';
}