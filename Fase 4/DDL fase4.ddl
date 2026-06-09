-- Gerado por Oracle SQL Developer Data Modeler 24.3.1.351.0831
--   em:        2026-06-09 19:44:45 BRT
--   site:      Oracle Database 11g
--   tipo:      Oracle Database 11g



DROP TABLE local CASCADE CONSTRAINTS 
;

DROP TABLE planetaria CASCADE CONSTRAINTS 
;

DROP TABLE Simulações CASCADE CONSTRAINTS 
;

DROP TABLE Usuário CASCADE CONSTRAINTS 
;

-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE

CREATE TABLE local 
    ( 
     tempestades              CHAR (1) , 
     Simulações_Simulações_ID NUMBER  NOT NULL 
    ) 
;
CREATE UNIQUE INDEX local__IDX ON local 
    ( 
     Simulações_Simulações_ID ASC 
    ) 
;

CREATE TABLE planetaria 
    ( 
     Simulações_Simulações_ID NUMBER  NOT NULL 
    ) 
;
CREATE UNIQUE INDEX planetaria__IDX ON planetaria 
    ( 
     Simulações_Simulações_ID ASC 
    ) 
;

CREATE TABLE Simulações 
    ( 
     corpos_celestes    VARCHAR2 (1 BYTE) , 
     gravidade          NUMBER , 
     Simulações_ID      NUMBER  NOT NULL , 
     Usuário_Usuário_ID NUMBER  NOT NULL 
    ) 
;

ALTER TABLE Simulações 
    ADD CONSTRAINT Simulações_PK PRIMARY KEY ( Simulações_ID ) ;

CREATE TABLE Usuário 
    ( 
     altura     NUMBER , 
     peso       NUMBER , 
     Usuário_ID NUMBER  NOT NULL 
    ) 
;

ALTER TABLE Usuário 
    ADD CONSTRAINT Usuário_PK PRIMARY KEY ( Usuário_ID ) ;

ALTER TABLE local 
    ADD CONSTRAINT local_Simulações_FK FOREIGN KEY 
    ( 
     Simulações_Simulações_ID
    ) 
    REFERENCES Simulações 
    ( 
     Simulações_ID
    ) 
;

ALTER TABLE planetaria 
    ADD CONSTRAINT planetaria_Simulações_FK FOREIGN KEY 
    ( 
     Simulações_Simulações_ID
    ) 
    REFERENCES Simulações 
    ( 
     Simulações_ID
    ) 
;

ALTER TABLE Simulações 
    ADD CONSTRAINT Simulações_Usuário_FK FOREIGN KEY 
    ( 
     Usuário_Usuário_ID
    ) 
    REFERENCES Usuário 
    ( 
     Usuário_ID
    ) 
;

CREATE SEQUENCE Simulações_Simulações_ID_SEQ 
START WITH 1 
    NOCACHE 
    ORDER ;

CREATE OR REPLACE TRIGGER Simulações_Simulações_ID_TRG 
BEFORE INSERT ON Simulações 
FOR EACH ROW 
WHEN (NEW.Simulações_ID IS NULL) 
BEGIN 
    :NEW.Simulações_ID := Simulações_Simulações_ID_SEQ.NEXTVAL; 
END;
/

CREATE SEQUENCE Usuário_Usuário_ID_SEQ 
START WITH 1 
    NOCACHE 
    ORDER ;

CREATE OR REPLACE TRIGGER Usuário_Usuário_ID_TRG 
BEFORE INSERT ON Usuário 
FOR EACH ROW 
WHEN (NEW.Usuário_ID IS NULL) 
BEGIN 
    :NEW.Usuário_ID := Usuário_Usuário_ID_SEQ.NEXTVAL; 
END;
/



-- Relatório do Resumo do Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                             4
-- CREATE INDEX                             2
-- ALTER TABLE                              5
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           2
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          2
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
