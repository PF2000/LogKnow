#!/bin/bash
usermod --password $(echo root | openssl passwd -1 -stdin) root

yum update -y

localFolder=/opt/LogKnow
repository="https://github.com/PF2000/LogKnow.git"

rm -rf $localFolder

echo 'Instaling LogKnow'

if ! rpm -q  git ; then
  echo 'Installing git...'
  yum install -y git
fi

if ! rpm -q  nano ; then
  echo 'Installing nano...'
  yum install -y nano
fi

if ! rpm -q  epel-release  ; then
  echo 'Installing epel-release...'
  yum install -y epel-release
fi

if ! rpm -q nginx  ; then
  echo 'Installing nginx...'
  yum install -y nginx

fi
#Nginx does not start on its own. To get Nginx running, type:
sudo systemctl start nginx
#Nginx to start when your system boots.
systemctl enable nginx


if ! rpm -q  curl  ; then
  echo 'Installing curl...'
  yum install -y curl
fi

if ! rpm -q  nodejs  ; then
  echo 'Installing nodejs...'
  curl -sL https://rpm.nodesource.com/setup_7.x | bash -
  yum  install -y nodejs
fi

if ! rpm -q  net-tools  ; then
  echo 'Installing net-tools...'
  yum  install -y net-tools
fi

#----- Instalar solucao ------
if [ ! -d $localFolder ]; then
  mkdir -p $localFolder;
  echo 'Creating folder '$localFolder
fi

git clone $repository $localFolder

cd $localFolder

npm install

# ----- Instalar servico  ------

cp $localFolder/Installer/LogKnow /etc/systemd/system/LogKnow.service

systemctl enable LogKnow.service
systemctl start LogKnow.service

# FIM
