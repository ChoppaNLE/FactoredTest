CREATE TABLE POSITIONC(
    id_positionc INT PRIMARY KEY AUTO_INCREMENT,
    positionc_name VARCHAR(20) NOT NULL
);

CREATE TABLE PROFILE(
    id_profile INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_positionc INTEGER NOT NULL,
    name VARCHAR(20) NOT NULL,
    avatar VARCHAR(100) NOT NULL,
    KEY id_positionx (id_positionc)
);

CREATE TABLE SKILL(
    id_skill INTEGER PRIMARY KEY AUTO_INCREMENT,
    language VARCHAR(20) NOT NULL
);

CREATE TABLE PROFILEXSKILL(
    id_profile INTEGER NOT NULL,
    id_skill INTEGER NOT NULL,
    value INTEGER  NOT NULL,
    PRIMARY KEY(id_profile,id_skill),
    KEY id_profilex (id_profile),
    KEY id_killx (id_skill)
);