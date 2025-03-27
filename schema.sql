drop database if exists mydb;
create database mydb;
\c mydb;

create table authors (
  id serial primary key,
  first_name text,
  last_name text
);

insert into authors (first_name, last_name) values ('James', 'S. A. Corey');
insert into authors (first_name, last_name) values ('Craig', 'Alanson');
insert into authors (first_name, last_name) values ('Cixin', 'Liu');
insert into authors (first_name, last_name) values ('David', 'Grann');

create table books (
  id serial primary key,
  title text,
  publishing_year int,
  genre_id int
);

insert into books (title, publishing_year) values ('Leviathan Wakes', 2011);
insert into books (title, publishing_year) values ('Caliban’s War', 2012);
insert into books (title, publishing_year) values ('Abaddon’s Gate', 2013);
insert into books (title, publishing_year) values ('Cibola Burn', 2014);
insert into books (title, publishing_year) values ('Nemesis Games', 2015);
insert into books (title, publishing_year) values ('Babylon’s Ashes', 2016);
insert into books (title, publishing_year) values ('Persepolis Rising', 2017);
insert into books (title, publishing_year) values ('Tiamat’s Wrath', 2018);
insert into books (title, publishing_year) values ('Strange Dogs', 2017);