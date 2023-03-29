# FactoredTest
Here i'm going to explain how to run the project made in react, express and mysql.

<b>#1)<br/> first you must have docker installed in your device. This is the dockers official page: https://www.docker.com/ 
then you must log in docker with your docker account (need to create one if its the first time in docker). In windows with the command: docker version 
you can see if everything is fine. <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228666929-c5a9703a-22ed-46fb-ad76-d654ad6f1eee.png) <br /><br />
In windows you should also have this icon too, looking for the service to be enabled <br /><br />
 ![image](https://user-images.githubusercontent.com/69688188/228667463-b99ed8d4-cfaa-4768-8327-32043b519bdc.png) <br /><br />

<b>#2)<br/> Then you should clone this repository, where the project is present: https://github.com/ChoppaNLE/FactoredTest
This can be done with github desktop (windows), can be downloaded here: https://desktop.github.com/
Once it is open the project can be cloned here <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228669845-1507fdb5-a5e7-4d9f-8127-4ce574a5d4de.png) <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228670442-ad8dddb2-4101-47d8-b442-9f5730895510.png) <br /><br />
save the local path for then <br /><br />

<b>#3)<br/> Then use a terminal (in this case windows cmd) to access the cloned repository, in my case the command is: cd C:\Users\INTEL\Documents\GitHub\FactoredTest
you should use the local path you stored before <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228671287-68df8e82-dee6-4004-9edb-6211db1c4885.png) <br /><br />

<b>#4)<br/> To start the project interface (frontend), you should write down the command cd frontend <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228673604-c09b7627-973b-4db8-961a-aa5378dfcb74.png) <br /><br />
in this path you must run the following commands  <br /><br />
docker build -t front . <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228674021-2b5ebdcf-3250-43ce-926c-a51bbceea2dd.png) <br /><br />
docker run -it -p 3000:3000 front <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228674384-de64f884-4c56-47f7-8547-82bd5db9f71d.png) <br /><br />
if all is good, you should see this message <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228674740-38b9d360-7e2e-4e7e-a871-c7f803dd4d68.png) <br /><br />
if everything is good, on your browser type down: http://localhost:3000/ then you should see the following interface <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228675395-956f081b-526a-48f0-9ac2-150d164ee9bc.png) <br /><br />

<b>#5)<br/> To start the connection with the data (backend), open a new terminal without closing the first one, then access again the local path you stored before of the repository <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228676377-924fee6e-d207-4e65-bdaf-63ea9db508e8.png) <br /><br />
then access to the backend folder <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228676460-8376e683-c68c-4e70-8a08-d5bf58663337.png) <br /><br />
in this path you must run the following commands <br /><br />
docker build -t back . <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228676694-2be837a7-b89f-4bde-a6fa-92cc4c36d46d.png) <br /> <br />
docker run -it -p 9000:9000 back <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228676779-faa428f5-e192-44c6-9c93-8f0b4598641a.png) <br /><br />
if everything is good, on your browser type down: http://localhost:3000/Profiles then you should see the following interface <br /><br />
![image](https://user-images.githubusercontent.com/69688188/228676913-be68452d-57ca-4b36-9c18-400a45c74676.png) <br /><br />

<b>#6)<br/> We just finished, to keep the project opened, dont close the cmd (windows) terminals (both of them) <br /><br />
