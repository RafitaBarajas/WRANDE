drop database if exists cero;
create database cero;
use cero;

create table Datos
(
	idprof int not null auto_increment primary key,
    nombre nvarchar(30) not null,
    apaterno nvarchar(30) not null,
    amaterno nvarchar(30) not null,
    fnac date not null,
    puesto nvarchar(30),
    email nvarchar(40) not null,
    contra varbinary(255) not null
);

create table FAcademica
(
	idfa int not null auto_increment primary key,
	idprof int not null,
    nombre nvarchar(30) not null,
    nivel nvarchar(30) not null,
    institucion nvarchar(40) not null,
    pais nvarchar(30) not null,
    anio date,
    cedula nvarchar(30) not null,
   foreign key(idprof) references datos(idprof) on delete cascade on update cascade
);

create table CapAct
(
	idcapact int not null auto_increment primary key,
	idprof int not null,
    coa nvarchar(1) not null,
    tipo nvarchar(20) not null,
    institucion nvarchar(40) not null,
    pais nvarchar(30) not null,
    anio date,
    horas int not null,
    foreign key(idprof) references Datos(idprof) on delete cascade on update cascade
);

create table GestAExpP
(
	idga int not null auto_increment primary key,
	idprof int not null,
    goe nvarchar(1) not null,
    actividad nvarchar(30) not null,   
    institucion nvarchar(30) not null,
    de date not null,
    a date not null,
    foreign key(idprof) references Datos(idprof) on delete cascade on update cascade
);

create table Productos
(
    idprod int not null auto_increment primary key,
	idprof int not null,    
    num int not null,
    des tinytext not null,
    foreign key(idprof) references Datos(idprof) on delete cascade on update cascade
);

create table ExpIngMemb
(
	idexping int not null auto_increment primary key,
	idprof int not null,
    eom nvarchar(1) not null,
    organismo nvarchar(40) not null,
    periodo int(2) not null,
    nivel nvarchar(20) not null,
    foreign key(idprof) references datos(idprof) on delete cascade on update cascade
);

create table LogrosPrem
(
    idprod int not null auto_increment primary key,
	idprof int not null,    
    lop nvarchar(1) not null,
    des tinytext not null,
    foreign key(idprof) references Datos(idprof) on delete cascade on update cascade
);

create table PartPE
(
    idprod int not null auto_increment primary key,
	idprof int not null,    
    texto tinytext not null,
    foreign key(idprof) references Datos(idprof) on delete cascade on update cascade
);


