-- create database kaleido_db;
-- use kaleido_db;

drop table if exists user;
CREATE TABLE `user` (
    `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增长记录ID,主键',
    `user_id` varchar(15) NOT NULL COMMENT '用户ID',
    `login_name` varchar(50) NOT NULL COMMENT '登录名,邮箱号',
    `login_password` varchar(50) NOT NULL COMMENT '登录密码',
    `user_name` varchar(20) DEFAULT NULL COMMENT '昵称',
    `real_name` varchar(15) DEFAULT NULL COMMENT '真实姓名',
    `phone_num` varchar(20) DEFAULT NULL COMMENT '电话号码/手机号',
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '记录创建时间',
    `last_update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后更新时间',
    PRIMARY KEY (`id`),
    UNIQUE KEY `user_id` (`user_id`),
    UNIQUE KEY `login_name` (`login_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert user (user_id, login_name, login_password, user_name, real_name, phone_num) values
('201701070000001', 'chad_ding@126.com', '123456789', '吸毒欧阳锋', '习近平', '15334549385');