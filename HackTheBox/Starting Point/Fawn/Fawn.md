
---
#ftp #reconaissance #fawn #veryeasy #anonymous #starting_point

![[Fawn_Info.png]]![[Fawn_MachineIp.png]]

---

## Task1 

![[Fawn_Task1.png]]


Réponse : File Transfer Protocol

---

## Task2 

![[Fawn_Task2.png]]

Réponse : 21

---

## Task3 

![[Fawn_Task3.png]]

Réponse : SFTP (Secure File Transfer Protocol)

---

## Task4

![[Fawn_Task4.png]]

Réponse : ping

--- 

## Task5

![[Fawn_Task5.png]]

On réalise un scan nmap rapide : 

> nmap -sS -sV -O -T4  --stats-every 10s 10.129.153.45

![[Fawn_Task5_NMAP.png]]

Réponse : vsftpd 3.0.3

--- 

## Task6

![[Fawn_Task6.png]]

>  Sur le scan précédent on a vu que l'os détecté était **Unix**

![[Fawn_Task6_UNIX.png]]

Réponse : Unix

---

## Task 7 

![[Fawn_Task7.png]]

Réponse : ftp -?

---

## Task 8 

![[Fawn_Task8.png]]

Réponse : anonymous

--- 

## Task 9


![[Fawn_Task9.png]]

> On se connecte en **anonymous** sans mdp

![[Fawn_Task9_AnonymousFTP.png]]

Réponse : 230 

---

## Task 10 

![[Fawn_Task10.png]]

Réponse : ls

---

## Task 11 

![[Fawn_Task11.png]]*

Réponse : get

---

## Flag 

>  Apres avoir fais un **ls**, il y a un fichier flag.txt sur le serveur FTP je fais donc un **get** et je quitte le ftp puis lis le flag 

![[Fawn_Flag.png]]

Réponse : 035db21c881520061c53e0536e44f815

---

![[Fawn_PWN.png]]







