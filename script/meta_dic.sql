
drop table if exists meta_dic;

create table meta_dic (
	id bigint(20) not null auto_increment comment '自增长记录ID,主键',
    parent varchar(20) not null comment '字典分组',
    value varchar(20) not null comment '字典值',
    text varchar(50) not null comment '字典字符',
    description varchar(100) null comment '字典描述',
    sort int(3) null comment '排序',
    create_time datetime not null default now() comment '创建日期',
    last_update_time datetime not null default now() comment '最后更新时间',
    deleted tinyint(1) not null default 0 comment '是否已删除',
    primary key (id)
) engine=InnoDB default charset=utf8;

insert into meta_dic (parent, value, text, description, create_time, last_update_time, sort)
values ('degree', '01', '小学', '小学', now(), now(), 1);

insert into meta_dic (parent, value, text, description, create_time, last_update_time, sort)
values ('degree', '02', '初中', '初中', now(), now(), 2);

insert into meta_dic (parent, value, text, description, create_time, last_update_time, sort)
values ('degree', '03', '高中', '高中', now(), now(), 3);

insert into meta_dic (parent, value, text, description, create_time, last_update_time, sort)
values ('degree', '04', '大专', '大专', now(), now(), 4);

insert into meta_dic (parent, value, text, description, create_time, last_update_time, sort)
values ('degree', '05', '本科', '本科', now(), now(), 5);

insert into meta_dic (parent, value, text, description, create_time, last_update_time, sort)
values ('degree', '06', '硕士', '硕士', now(), now(), 6);

insert into meta_dic (parent, value, text, description, create_time, last_update_time, sort)
values ('degree', '07', '博士', '博士', now(), now(), 7);

insert into meta_dic (parent, value, text, description, create_time, last_update_time, sort)
values ('degree', '08', '博士后', '博士后', now(), now(), 8);

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1001', 'IT狗', 'IT', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1002', '程序猿', 'IT', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1003', '攻城狮', 'IT', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1004', '射鸡师', 'IT', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1005', '法师', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1006', '术士', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1007', '牧师', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1008', '德鲁伊', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1009', '盗贼', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1010', '武僧', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1011', '恶魔猎手', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1012', '猎人', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1013', '萨满', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1014', '战士', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1015', '骑士', 'WOW', now(), now());

insert into meta_dic (parent, value, text, description, create_time, last_update_time)
values ('occupation', '1016', '死亡骑士', 'WOW', now(), now());