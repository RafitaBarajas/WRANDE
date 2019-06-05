
drop procedure if exists sp_registro;
delimiter **
create procedure sp_registro(in nom nvarchar(30), in apat nvarchar(30), in amat nvarchar(60), in fn nvarchar(60), in pto nvarchar(30), in mail nvarchar(40), in cont nvarchar(20))
begin
	declare msj nvarchar(60); 
    declare idp int;
    declare exs int;
	declare exs1 int;
    
	set exs = (select count(*) from datos where email = mail);
	set exs1 = (select count(*) from admin where email = mail);
       
	if exs = 0 and exs1 = 0 then
		set idp =(select ifnull(max(idprof),0) + 1 from datos);
		insert into datos values(idp, nom, apat, amat, STR_TO_DATE(REPLACE(fn,'/','.') ,GET_FORMAT(date,'EUR')), pto, mail, aes_encrypt(cont, 'huecofriends'));
		set msj='Has sido registrado';
	else
		set msj ='Este correo ya está registrado';
       end if;
       
   select msj as MSJ;
end**
delimiter ;

# LEER LEER LEER LEER LEER LEER LEER LEER 
# ncont es la nueva contraseña y acont es la antigua (para cuando quiera cambiarla, si no se quiere cambiar meter 'sc' en ambas). 
# amail es el correo del usuario que está cambiando los datos (el que está en la variable de sesión).
drop procedure if exists sp_editar;
delimiter **
create procedure sp_editar(in nom nvarchar(30), in apat nvarchar(30), in amat nvarchar(60), in fn nvarchar(60), in pto nvarchar(30), in mail nvarchar(40), in ncont nvarchar(20), in acont nvarchar(20), in amail nvarchar(20))
begin
	declare msj nvarchar(60); 
    declare exs int;
	declare exs1 int;
    declare cc int;
    
    if amail = mail then
		set cc = 0;
	else
		set cc = 1;
	end if;
    
    if cc = 0 then
		if acont = 'sc' and ncont = 'sc' then
				update datos set nombre = nom, apaterno = apat, amaterno = amat, fnac = (STR_TO_DATE(REPLACE(fn,'/','.') ,GET_FORMAT(date,'EUR'))), puesto = pto, email = mail where email = amail;
                set msj='Datos actualizados';
		else
				set exs = (select count(*) from datos where (CAST(AES_DECRYPT(contra, 'huecofriends') AS char(20))) = acont and email = amail);
                if exs = 1 then
					update datos set nombre = nom, apaterno = apat, amaterno = amat, fnac = (STR_TO_DATE(REPLACE(fn,'/','.') ,GET_FORMAT(date,'EUR'))), puesto = pto, email = mail, contra = aes_encrypt(ncont, 'huecofriends') where email = amail;
					set msj='Datos actualizados';
				else
					set msj ='La contraseña anterior es incorrecta';
				end if;
        end if;
    else 
		if cc = 1 then
			set exs = (select count(*) from datos where email = mail);
			set exs1 = (select count(*) from admin where email = mail);
            if exs = 0 and exs1 = 0 then
				if acont = 'sc' and ncont = 'sc' then
					update datos set nombre = nom, apaterno = apat, amaterno = amat, fnac = (STR_TO_DATE(REPLACE(fn,'/','.') ,GET_FORMAT(date,'EUR'))), puesto = pto, email = mail where email = amail;
					set msj='Datos actualizados!';
				else
					set exs = (select count(*) from datos where (CAST(AES_DECRYPT(contra, 'huecofriends') AS char(20))) = acont and email = amail);
					if exs = 1 then
						update datos set nombre = nom, apaterno = apat, amaterno = amat, fnac = (STR_TO_DATE(REPLACE(fn,'/','.') ,GET_FORMAT(date,'EUR'))), puesto = pto, email = mail, contra = aes_encrypt(ncont, 'huecofriends') where email = amail;
						set msj='Datos actualizados';
					else
						set msj ='La contraseña anterior es incorrecta';
					end if;
				end if;
			else
				set msj ='Este correo ya está registrado por otro usuario';
			end if;
		end if;	
    end if;
    select msj as MSJ;
end**
delimiter ;



drop procedure if exists sp_registroAdmin;
delimiter **
create procedure sp_registroAdmin(in mail nvarchar(40), in cont nvarchar(20))
begin
	declare msj nvarchar(60); 
    declare ida int;
    declare exs int;
	declare exs1 int;
    
	set exs = (select count(*) from datos where email = mail);
	set exs1 = (select count(*) from admin where email = mail);
       
	if exs = 0 and exs1 = 0 then
		set ida =(select ifnull(max(idadmin),0) + 1 from admin);
		insert into admin values(ida, mail, aes_encrypt(cont, 'huecofriends'));
		set msj='Administrador registrado';
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
    
    set exs = (select count(*) from admin where email = mail and (CAST(AES_DECRYPT(contra, 'huecofriends') AS char(20))) = cont);
    
    if exs = 1 then
		set msj = 'Administrador';
	else
    	set exs = (select count(*) from datos where email = mail and (CAST(AES_DECRYPT(contra, 'huecofriends') AS char(20))) = cont);
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


drop procedure if exists sp_DatosInst;
delimiter **
create procedure sp_DatosInst(cc nvarchar(3),in tc nvarchar(3), in fc date, in ins nvarchar(30), in fins date, in idl15 nvarchar(30), 
							  in hrsl15 int(3), in idp15 nvarchar(30), in hrsp15 int(3), in tip15 nvarchar(3), in idl16 nvarchar(30), in hrsl16 int(3), 
                              in idp16 nvarchar(30), in hrsp16 int(3), in tip16 nvarchar(3), in mail nvarchar(40))
begin
	declare msj nvarchar(60); 
    declare id int;
    declare exs int;
    
	set id =(select ifnull(max(iddi),0) + 1 from DatosInst);
	insert into DatosInst values(id,(select idprof from datos where email = mail),cc,tc,fc,ins,fins,idl15,hrsl15,idp15,hrsp15,tip15,idl16,hrsl16,idp16,hrsp16,tip16);
	set msj='Registrado';
    select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_eliminar;
delimiter **
create procedure sp_eliminar(in mail nvarchar(30))
begin
	declare msj nvarchar(60); 
    declare exs int;
    
	delete from datos where email = mail;
	set msj='Eliminado';
    select msj as MSJ;
end**
delimiter ;


drop procedure if exists sp_obtenerDatos;
delimiter **
create procedure sp_obtenerDatos(in mail nvarchar(30))
begin
	select nombre, apaterno, amaterno, DATE_FORMAT(fnac,'%d/%m/%Y') as fnac, puesto, email from datos where email = mail;
end**
delimiter ;


drop procedure if exists sp_obtenerCorreos;
delimiter **
create procedure sp_obtenerCorreos()
begin
	select email from datos;
end**
delimiter ;


drop procedure if exists sp_datosPerfil;
delimiter **
create procedure sp_datosPerfil(in mail nvarchar(30))
begin
	select nombre, apaterno, amaterno, YEAR(CURDATE())-YEAR(fnac) + IF(DATE_FORMAT(CURDATE(),'%m-%d') > DATE_FORMAT(fnac,'%m-%d'), 0 , -1 ) AS edad, puesto, email from datos where email = mail;
end**
delimiter ;





