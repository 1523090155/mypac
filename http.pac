function FindProxyForURL(url, host) {
    var proxy = "PROXY 192.168.3.50:10809";
    var direct = "DIRECT";
    var proxyHost = "192.168.3.50";
    var proxyPort = 10809;

    try {
        var socket = new XMLHttpRequest();
        socket.open('GET', 'http://' + proxyHost + ':' + proxyPort, false);
        socket.setRequestHeader('Connection', 'close');
        socket.timeout = 100;
        socket.send();
        if (socket.status >= 200 && socket.status < 400) {
            return proxy;
        }
    } catch (e) {
        return direct;
    }

    return direct;
}    
