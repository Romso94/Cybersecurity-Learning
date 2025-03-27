
---
#telnet #reconaissance #meow #veryeasy #starting_point

![[Meow_Info.png]]

![[Meow_ScreenIP.png]]

---

## Task 1 : 

![[Meow_Task1.png]]

Réponse : Virtual Machine 

---

## Task2 : 

![[Meow_Task2.png]]

Réponse : terminal

---

## Task3 : 

![[Meow_Task3.png]]
Réponse : openvpn

---

## Task4 : 

![[Meow_Task4.png]]

Réponse : Ping

---

## Task5 : 

![[Meow_Task5.png]]

Réponse : NMAP

--- 

## Task6 : 

![[Meow_Task6.png]]

>  On va réaliser un scan **NMAP** pour trouver des informations sur le port 23 

```bash
nmap -sS -sV -O -T4 10.129.188.135  --stats-every 10s
```

![[Meow_Task6NMaP.png]]
Réponse :  telnet

---

## Task7 : 

![[Meow_Task7.png]]

> On essaye de se connecter via **Telnet** sur la machine : 

```shell
>> telnet 10.129.188.135
```

Une fois la machine connecté via telnet, on nous demande un login on essaye root par défaut : 
![[Meow_Task7_TelnetConnexion.png]]

>  On est bien connecté en tant que **root** 

Réponse : root

---

## Flag :


![[Meow_Flag.png]]


![[Meow_Flag_Cat.png]]


> On est dans  la machine on va chercher le dossier Flag.txt

> On fait un cat sur le fichier et on a le flag :

> Réponse : **b40abdfe23665f766f9c61ecba8a4c19**

