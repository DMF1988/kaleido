
drop table if exists profile;
create table profile (
	id bigint(20) not null auto_increment comment '自增长记录ID,主键',
    user_id varchar(15) not null comment '用户ID',
    user_name varchar(20) null comment '昵称',
    real_name varchar(15) null comment '真实名',
    gender char(1) null comment '性别：F-女  M-男',
    birthday date null comment '生日',
    phone_num varchar(20) null comment '电话号码',
    country varchar(5) not null default '86' comment '国家Code',
    province varchar(5) null comment '省份Code',
    city varchar(5) null comment '城市Code',
    address varchar(200) null comment '详细地址',
    portrait varchar(50) null comment '头像',
    occupation varchar(20) null comment '职业',
    create_time datetime not null default now() comment '创建日期',
    last_update_time datetime not null default now() comment '最后更新时间',
    deleted tinyint(1) not null default 0 comment '是否已删除',
    primary key (id),
    foreign key (user_id) references user (user_id)
    
) engine=InnoDB default charset=utf8;


select * from profile;