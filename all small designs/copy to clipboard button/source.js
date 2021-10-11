(function() {
    window.onload = function() {
        var copy_btn;
        copy_btn = document.querySelector('.btn');
        return copy_btn.addEventListener('click', function(event) {
            var err, msg, successful, text;
            text = document.querySelector('.text');
            text.select();
            try {
                successful = document.execCommand('copy');
                msg = successful ? 'successful' : 'unsuccessful';
                return console.log('Copy command was ' + msg);
            } catch (error) {
                err = error;
                return console.log('Oops, unable to copy');
            }
        });
    };

}).call(this);