
drop table if exists friend;

create table friend (
    id bigint(20) not null auto_increment comment '自增长记录ID,主键',
    owner varchar(15) not null comment '好友归属',
    friend varchar(15) not null comment '好友',
    status tinyint(1) not null default 0 comment '状态(0:等待确认, 1:已确认)',
    mark varchar(20) null comment '好友备注',
    create_time datetime not null default now() comment '记录创建时间',
    last_update_time datetime not null default now() comment '最后更新时间',
    deleted tinyint(1) not null default 0 comment '是否已删除 0:No, 1:Yes',
    primary key(id),
    foreign key (owner) references user(user_id),
    foreign key (friend) references user(user_id)
) ENGINE = InnoDB default charset=utf8;