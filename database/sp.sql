drop procedure if exists sp_registro;
delimiter **
create procedure sp_registro(in nom nvarchar(30), in apat nvarchar(30), in amat nvarchar(60), in fn date, in pto nvarchar(30), in mail nvarchar(40), in cont nvarchar(20))
begin
	declare msj nvarchar(60); 
    declare idp int;
    declare exs int;

	set exs = (select count(*) from datos where email = mail);
       
	if exs = 0 then
		set idp =(select ifnull(max(idprof),0) + 1 from datos);
		insert into datos values(idp, nom, apat, amat, fn, pto, mail, aes_encrypt(cont, 'huecofriends'));
		set msj='Has sido registrado';
	else
		set msj ='Este correo ya está registrado';
       end if;
       
   select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_login;
delimiter **
create procedure sp_login(in mail nvarchar(40), in cont nvarchar(20))
begin
	declare exs int;
    declare msj nvarchar(60);    
    
    if mail = 'admin@mail.com' and cont = 'admin' then
		set msj = 'Administrador';
	else
    	set exs = (select count(*) from datos where email = mail and (CAST(AES_DECRYPT(contra, 'huecofriends') AS char(16))) = cont);
		if exs = 1 then
				set msj='Profesor';
		else
			set msj = 'Usuario no encontrado';
		end if;
	end if;
    select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_FAcademica;
delimiter **
create procedure sp_FAcademica(in nom nvarchar(30), in niv nvarchar(30), in inst nvarchar(40), in p nvarchar(30), in a date, in ced nvarchar(30), in mail nvarchar(40))
begin
	declare msj nvarchar(60); 
    declare id int;
    declare exs int;
    
	set id =(select ifnull(max(idfa),0) + 1 from FAcademica);
	insert into FAcademica values(id,(select idprof from datos where email = mail),nom,niv,inst,p,a, ced);
	set msj='Registrado';
    select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_CapAct;
delimiter **
create procedure sp_CapAct(in ca nvarchar(1), in tip nvarchar(20), in inst nvarchar(40), in p nvarchar(30), in a date, in hrs int, in mail nvarchar(40))
begin
	declare msj nvarchar(60); 
    declare id int;
    declare exs int;
    
	set id =(select ifnull(max(idcapact),0) + 1 from CapAct);
	insert into CapAct values(id,(select idprof from datos where email = mail),ca,tip,inst,p,a,hrs);
	set msj='Registrado';
    select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_GestAExpP;
delimiter **
create procedure sp_GestAExpP(in ge nvarchar(1), in act nvarchar(30), in inst nvarchar(40), in dd date, in ad date, in mail nvarchar(40))
begin
	declare msj nvarchar(60); 
    declare id int;
    declare exs int;
    
	set id =(select ifnull(max(idga),0) + 1 from GestAExpP);
	insert into GestAExpP values(id,(select idprof from datos where email = mail),ge,act,inst,dd,ad);
	set msj='Registrado';
    select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_Productos;
delimiter **
create procedure sp_Productos(in n int, in des tinytext, in mail nvarchar(40))
begin
	declare msj nvarchar(60); 
    declare id int;
    declare exs int;
    
	set id =(select ifnull(max(idprod),0) + 1 from Productos);
	insert into Productos values(id,(select idprof from datos where email = mail),n,des);
	set msj='Registrado';
    select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_ExpIngMemb;
delimiter **
create procedure sp_ExpIngMemb(in em nvarchar(1), in org nvarchar(40), in per int(2), in niv nvarchar(20), in mail nvarchar(40))
begin
	declare msj nvarchar(60); 
    declare id int;
    declare exs int;
    
	set id =(select ifnull(max(idexping),0) + 1 from ExpIngMemb);
	insert into ExpIngMemb values(id,(select idprof from datos where email = mail),em,org,per,niv);
	set msj='Registrado';
    select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_LogrosPrem;
delimiter **
create procedure sp_LogrosPrem(in lp nvarchar(1), in des tinytext, in mail nvarchar(40))
begin
	declare msj nvarchar(60); 
    declare id int;
    declare exs int;
    
	set id =(select ifnull(max(idlp),0) + 1 from LogrosPrem);
	insert into LogrosPrem values(id,(select idprof from datos where email = mail),lp,des);
	set msj='Registrado';
    select msj as MSJ;
end**
delimiter ;



drop procedure if exists sp_PartPE;
delimiter **
create procedure sp_PartPE(in txt tinytext, in mail nvarchar(40))
begin
	declare msj nvarchar(60); 
    declare id int;
    declare exs int;
    
	set id =(select ifnull(max(idpe),0) + 1 from PartPE);
	insert into PartPE values(id,(select idprof from datos where email = mail),txt);
	set msj='Registrado';
    select msj as MSJ;
end**
delimiter ;











