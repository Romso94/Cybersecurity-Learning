
https://linuxconfig.org/configuring-virtual-network-interfaces-in-linux
Prérequis : net-tools ( sudo apt install net-tools)

### Activer le module kernel dummy

> sudo modprobe dummy

### Creer une interface virtuel 

> sudo ip link add eth0 type dummy

(eth0 = nom de notre interface)

### Ajouter une adresse MAC 
> sudo ifconfig eth0 hw ether C8:D7:4A:4E:47:50

### Creer un alias et lui attribuer une IP
>sudo ip addr add 192.168.1.100/24 brd + dev eth0 label eth0:0

### Charger notre interface 
> sudo ip link set dev eth0 up

### Verifier 
> ip -br -c a

### Pour supprimer : 
>sudo ip addr del 192.168.1.100/24 brd + dev eth0 label eth0:0
>sudo ip link delete eth0 type dummy
>sudo rmmod dummy