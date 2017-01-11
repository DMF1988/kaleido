
drop table if exists meta_dic;

create table meta_dic (
	id bigint(20) not null auto_increment comment '自增长记录ID,主键',
    parent varchar(20) not null comment '字典分组',
    value varchar(20) not null comment '字典值',
    text varchar(50) not null comment '字典字符',
    description varchar(100) null comment '字典描述',
    create_time datetime not null default now() comment '创建日期',
    last_update_time datetime not null default now() comment '最后更新时间',
    deleted tinyint(1) not null default 0 comment '是否已删除',
    primary key (id)
) engine=InnoDB default charset=utf8;