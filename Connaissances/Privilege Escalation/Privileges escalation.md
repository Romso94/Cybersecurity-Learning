

##### Vérifier les droits avec : 
```shell
sudo -L  ou 
find / -perm -u=s -type f 2>/dev/null
```


# Tâches planifiées

Dans Linux et Windows, il existe des méthodes pour exécuter des scripts à des intervalles spécifiques afin d'effectuer une tâche. Quelques exemples incluent l'exécution d'une analyse antivirus toutes les heures ou d'un script de sauvegarde toutes les 30 minutes. Il y a généralement deux façons de tirer parti des tâches planifiées (Windows) ou des tâches cron (Linux) pour élever nos privilèges :

    Ajouter de nouvelles tâches planifiées ou des tâches cron
    Les tromper pour qu'ils exécutent un logiciel malveillant

La manière la plus simple est de vérifier si nous sommes autorisés à ajouter de nouvelles tâches planifiées. Sous Linux, une forme courante de maintien des tâches planifiées est via les tâches cron. Il existe des répertoires spécifiques que nous pouvons utiliser pour ajouter de nouvelles tâches cron si nous avons les permissions d'écriture sur ceux-ci. Cela inclut :

    /etc/crontab
    /etc/cron.d
    /var/spool/cron/crontabs/root

Si nous pouvons écrire dans un répertoire appelé par une tâche cron, nous pouvons écrire un script bash avec une commande de shell inversé, qui devrait nous envoyer un shell inversé lorsqu'il est exécuté.


# Methode Copie RSA :

-> /home/user > .ssh/ copier la cle 
