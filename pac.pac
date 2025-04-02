function FindProxyForURL(url, host) {
    var proxy = "SOCKS 192.168.3.50:10808";
    var direct = "DIRECT";

    if (isResolvable("192.168.3.50")) {
        return proxy;
    }

    return direct;
}
