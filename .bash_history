ip a
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
run hello-world
docker run hello-world
sudo systemctl status docker
docker run hello-world
docker run -d nginx
docker ps -a
ss -tpln
-p 80:80
docker -p 80:80
ss -tpln
docker ps -a
docker stop 81dc90e0dd8c
docker rm 81dc90e0dd8c f85eb6d19ef4
docker ps -a
docker run -d -p 80:80 --rm nginx
ss -tpln | grep 80
sudo mkdir /usr/etc/conf
mkdir /usr/etc/html
sudo mkdir /usr/etc/html
cd html
sudo vim index.html
vim index.html
vim
vi index.html
sudo vi index.html
cd -a
cd conf
cd
cd /usr/etc/conf
sudo vi default.conf
docker stop $(docker ps -aq)
docker run -d -p 80:80 --rm --name nginx -v '/home/aquaman/conf:/etc/nginx/conf.d' -v '/home/aquaman/html:/usr/share/nginx/html' nginx
docker run -d -p 80:80 --rm --name nginx -v '/home/zaloznykhao/conf:/etc/nginx/conf.d' -v '/home/zaloznykhao/html:/usr/share/nginx/html' nginx
cd
cd /home/zaloznykhao/html
cd /home/zaloznykhao/
cd /home/zaloznykhao/conf
mkdir /home/zaloznykhao/conf
cd /home/zaloznykhao/conf
cd html
sudo vi index.html
cd

sudo vi default.conf
docker stop $(docker ps -aq)
docker run -d -p 80:80 --rm --name nginx -v '/home/zaloznykhao/conf:/etc/nginx/conf.d' -v '/home/zaloznykhao/html:/usr/share/nginx/html' nginx
mv html ../
ls ../
docker run -d -p 80:80 --rm --name nginx -v '/home/zaloznykhao/conf:/etc/nginx/conf.d' -v '/home/zaloznykhao/html:/usr/share/nginx/html' nginx
ss -tpln
docker ps -a
docker stop 3986c1146483
docker rm 3986c1146483
docker ps -a
docker run -d -p 80:80 --rm --name nginx -v '/home/zaloznykhao/conf:/etc/nginx/conf.d' -v '/home/zaloznykhao/html:/usr/share/nginx/html' nginx
ss -tpln
firewall-cmd --list-all
sudo firewall-cmd --list-all
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
ssh 192.168.233.130
