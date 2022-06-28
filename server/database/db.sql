CREATE DATABASE algorath;

/c algorath

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40)
);

CREATE TABLE Relation_user(
user1 int not null,
user2 int not null,
    CONSTRAINT FK_user1_user2
    FOREIGN KEY (user1) REFERENCES Users(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT FK_user2_user1
    FOREIGN KEY (user2) REFERENCES Users(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

INSERT INTO Users (name)
    VALUES ('Samuel'),
    ('Victoria'),
    ('Albert'),
    ('Xavi');

INSERT INTO Relation_user (user1, user2)
    VALUES(1,2),
    (2,3);

select * from Users;