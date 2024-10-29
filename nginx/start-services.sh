#!/bin/sh

# Start dnsmasq
dnsmasq -k &
dnsmasq_pid=$!

# Start Nginx
nginx -g "daemon off;" &
nginx_pid=$!

# Monitor both processes
while kill -0 $dnsmasq_pid 2>/dev/null && kill -0 $nginx_pid 2>/dev/null; do
  sleep 1
done

# If either dnsmasq or nginx dies, stop the other and exit
if ! kill -0 $dnsmasq_pid 2>/dev/null; then
  echo "dnsmasq has stopped"
fi

if ! kill -0 $nginx_pid 2>/dev/null; then
  echo "Nginx has stopped"
fi

# Stop remaining processes
kill $dnsmasq_pid $nginx_pid
wait $dnsmasq_pid $nginx_pid
exit 1